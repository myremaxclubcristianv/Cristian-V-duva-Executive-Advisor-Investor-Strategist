import Foundation
import Vision
import AppKit

struct DetectionResult: Codable {
    let path: String
    let faceCount: Int
    let confidence: Float
}

let args = CommandLine.arguments
if args.count < 2 {
    print("Usage: detect_faces <directory_or_file>")
    exit(1)
}

let target = args[1]
var paths: [String] = []

let fm = FileManager.default
var isDir: ObjCBool = false
if fm.fileExists(atPath: target, isDirectory: &isDir) {
    if isDir.boolValue {
        if let subpaths = try? fm.subpathsOfDirectory(atPath: target) {
            for sub in subpaths {
                let lower = sub.lowercased()
                if lower.hasSuffix(".jpg") || lower.hasSuffix(".jpeg") || lower.hasSuffix(".png") || lower.hasSuffix(".webp") {
                    paths.append((target as NSString).appendingPathComponent(sub))
                }
            }
        }
    } else {
        paths.append(target)
    }
}

var results: [DetectionResult] = []

for p in paths.sorted() {
    guard let img = NSImage(contentsOfFile: p),
          let cgImg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        continue
    }
    
    let request = VNDetectFaceRectanglesRequest()
    let handler = VNImageRequestHandler(cgImage: cgImg, options: [:])
    try? handler.perform([request])
    
    let count = request.results?.count ?? 0
    let conf = request.results?.first?.confidence ?? 0.0
    results.append(DetectionResult(path: p, faceCount: count, confidence: conf))
}

let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
if let data = try? encoder.encode(results),
   let json = String(data: data, encoding: .utf8) {
    print(json)
}
