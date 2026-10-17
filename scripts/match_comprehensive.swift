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

// Multi-angle, multi-setting verified reference portraits of Cristian Văduva
let refPaths = [
    "public/images/personal/editorial/cristian-vaduva-executive.jpg",
    "public/images/personal/portraits/cristian-vaduva-primary.jpg",
    "public/images/personal/archive/cristian-vaduva-desk-advisor.jpg",
    "scripts/inspect/850.jpg", // armchair in office
    "scripts/inspect/851.jpg", // gold desk
    "scripts/inspect/1011.jpg", // gala event
    "scripts/inspect/805.jpg", // construction site hard hat
    "scripts/full_media_scan/aixluxury/67EF9918-1D48-42FF-8B56-DA0B8D67A4DC-IIS5ZRIql90K-aMd21CfMA.JPG" // outdoor penthouse terrace
]

// Prepare reference inspect files if not present
let fm = FileManager.default
if !fm.fileExists(atPath: "scripts/inspect/850.jpg") {
    try? fm.copyItem(atPath: "scripts/full_media_scan/cristianvaduva/850_Captura-de-ecran-din-2024-07-06-la-16.26.05-1.png", toPath: "scripts/inspect/850.jpg")
}
if !fm.fileExists(atPath: "scripts/inspect/851.jpg") {
    try? fm.copyItem(atPath: "scripts/full_media_scan/cristianvaduva/851_Captura-de-ecran-din-2024-07-06-la-16.34.15.png", toPath: "scripts/inspect/851.jpg")
}
if !fm.fileExists(atPath: "scripts/inspect/805.jpg") {
    try? fm.copyItem(atPath: "scripts/full_media_scan/cristianvaduva/805_Captura-de-ecran-din-2024-03-01-la-11.11.02.png", toPath: "scripts/inspect/805.jpg")
}

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
        let padX = box.width * 0.15
        let padY = box.height * 0.15
        let minX = max(0, box.origin.x - padX)
        let minY = max(0, box.origin.y - padY)
        let maxX = min(1.0, box.origin.x + box.width + padX)
        let maxY = min(1.0, box.origin.y + box.height + padY)
        
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

var refPrints: [VNFeaturePrintObservation] = []
for ref in refPaths {
    if fm.fileExists(atPath: ref) {
        let crops = extractFaceCrops(from: ref)
        for c in crops {
            if let fp = getFeaturePrint(from: c) {
                refPrints.append(fp)
            }
        }
    }
}

fputs("Extracted \(refPrints.count) multi-angle reference feature prints\n", stderr)

let targetDirs = ["scripts/full_media_scan/cristianvaduva", "scripts/full_media_scan/aixluxury"]
var allPaths: [String] = []

for dir in targetDirs {
    if let subs = try? fm.subpathsOfDirectory(atPath: dir) {
        for s in subs {
            let lower = s.lowercased()
            if lower.hasSuffix(".jpg") || lower.hasSuffix(".jpeg") || lower.hasSuffix(".png") || lower.hasSuffix(".webp") {
                allPaths.append((dir as NSString).appendingPathComponent(s))
            }
        }
    }
}

var results: [MatchResult] = []

for path in allPaths.sorted() {
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
    
    // With 12 diverse multi-angle reference feature prints, distance <= 0.65 is high-confidence match
    let isMatch = lowestDist <= 0.65
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
