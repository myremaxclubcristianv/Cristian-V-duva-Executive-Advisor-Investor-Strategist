import Foundation
import Vision
import AppKit

struct MatchResult: Codable {
    let path: String
    let filename: String
    let isCristian: Bool
    let minDistance: Float
    let faceCount: Int
    let reason: String
}

// 1. Load Reference Face Feature Prints of Cristian Văduva
let refPaths = [
    "public/images/personal/editorial/cristian-vaduva-executive.jpg",
    "public/images/personal/portraits/cristian-vaduva-primary.jpg",
    "public/images/personal/archive/cristian-vaduva-desk-advisor.jpg"
]

func extractFaceCrops(from imagePath: String) -> [CGImage] {
    guard let img = NSImage(contentsOfFile: imagePath),
          let cgImg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        return []
    }
    
    let faceReq = VNDetectFaceRectanglesRequest()
    let handler = VNImageRequestHandler(cgImage: cgImg, options: [:])
    try? handler.perform([faceReq])
    
    guard let faces = faceReq.results, !faces.isEmpty else { return [] }
    
    var crops: [CGImage] = []
    let w = CGFloat(cgImg.width)
    let h = CGFloat(cgImg.height)
    
    for face in faces {
        let box = face.boundingBox
        // Expand slightly (15% padding)
        let padX = box.width * 0.15
        let padY = box.height * 0.15
        let minX = max(0, box.origin.x - padX)
        let minY = max(0, box.origin.y - padY)
        let maxX = min(1.0, box.origin.x + box.width + padX)
        let maxY = min(1.0, box.origin.y + box.height + padY)
        
        // Vision coordinates have (0,0) at bottom-left, CGImage has (0,0) at top-left
        let cropRect = CGRect(
            x: minX * w,
            y: (1.0 - maxY) * h,
            width: (maxX - minX) * w,
            height: (maxY - minY) * h
        )
        
        if let crop = cgImg.cropping(to: cropRect) {
            crops.append(crop)
        }
    }
    return crops
}

func getFeaturePrint(from cgImage: CGImage) -> VNFeaturePrintObservation? {
    let req = VNGenerateImageFeaturePrintRequest()
    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    try? handler.perform([req])
    return req.results?.first as? VNFeaturePrintObservation
}

// Extract reference prints
var refPrints: [VNFeaturePrintObservation] = []
for ref in refPaths {
    let crops = extractFaceCrops(from: ref)
    for c in crops {
        if let fp = getFeaturePrint(from: c) {
            refPrints.append(fp)
        }
    }
}

if refPrints.isEmpty {
    fputs("ERROR: Failed to extract reference feature prints from \(refPaths)\n", stderr)
    exit(1)
}

fputs("Extracted \(refPrints.count) reference face prints of Cristian Văduva\n", stderr)

// 2. Scan Target Directories
let args = CommandLine.arguments
let targetDirs = args.count > 1 ? Array(args.dropFirst()) : ["scripts/full_media_scan/cristianvaduva", "scripts/full_media_scan/aixluxury"]

var allImagePaths: [String] = []
let fm = FileManager.default

for dir in targetDirs {
    var isDir: ObjCBool = false
    if fm.fileExists(atPath: dir, isDirectory: &isDir) {
        if isDir.boolValue {
            if let subpaths = try? fm.subpathsOfDirectory(atPath: dir) {
                for sub in subpaths {
                    let lower = sub.lowercased()
                    if lower.hasSuffix(".jpg") || lower.hasSuffix(".jpeg") || lower.hasSuffix(".png") || lower.hasSuffix(".webp") {
                        allImagePaths.append((dir as NSString).appendingPathComponent(sub))
                    }
                }
            }
        } else {
            allImagePaths.append(dir)
        }
    }
}

var results: [MatchResult] = []

for path in allImagePaths.sorted() {
    let filename = (path as NSString).lastPathComponent
    let crops = extractFaceCrops(from: path)
    
    if crops.isEmpty {
        results.append(MatchResult(
            path: path,
            filename: filename,
            isCristian: false,
            minDistance: 99.0,
            faceCount: 0,
            reason: "no_face_detected"
        ))
        continue
    }
    
    var lowestDist: Float = 99.0
    for crop in crops {
        if let cropFp = getFeaturePrint(from: crop) {
            for refFp in refPrints {
                var distance: Float = 99.0
                if (try? cropFp.computeDistance(&distance, to: refFp)) != nil {
                    if distance < lowestDist {
                        lowestDist = distance
                    }
                }
            }
        }
    }
    
    // Threshold: Vision feature print distance <= 0.65 indicates strong match for same individual
    // 0.65 to 0.70 is probable match
    let isMatch = lowestDist <= 0.68
    let reason = isMatch ? "face_match_cristian_vaduva" : "other_person_detected"
    
    results.append(MatchResult(
        path: path,
        filename: filename,
        isCristian: isMatch,
        minDistance: lowestDist,
        faceCount: crops.count,
        reason: reason
    ))
}

let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
if let data = try? encoder.encode(results),
   let json = String(data: data, encoding: .utf8) {
    print(json)
}
