import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    // --- 1. iOS Ecosystem & HIG (Blue) ---
    { id: "s_eco", type: "section", position: { x: 0, y: 0 }, data: { title: "iOS Ecosystem & HIG", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_eco_1", type: "topic", parentId: "s_eco", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apple Developer Program", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_eco_2", type: "topic", parentId: "s_eco", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Human Interface Guidelines", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_eco_3", type: "topic", parentId: "s_eco", extent: "parent", position: { x: 0, y: 0 }, data: { title: "App Sandbox & Privacy", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", row: 1, col: 0 } },

    // --- 2. Swift Programming (Orange) ---
    { id: "s_swift", type: "section", position: { x: 576, y: 0 }, data: { title: "Swift Programming", sectionNumber: 2, color: "orange", sectionIcon: "code" } },
    { id: "n_swift_1", type: "topic", parentId: "s_swift", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Swift Syntax & Types", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "orange", row: 0, col: 0 } },
    { id: "n_swift_2", type: "topic", parentId: "s_swift", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Optionals", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "orange", row: 0, col: 1 } },
    { id: "n_swift_3", type: "topic", parentId: "s_swift", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Structs vs Classes", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "orange", row: 1, col: 0 } },
    { id: "n_swift_4", type: "topic", parentId: "s_swift", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Protocols & Extensions", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "orange", row: 1, col: 1 } },

    // --- 3. Xcode & Tooling (Green) ---
    { id: "s_xcode", type: "section", position: { x: 1152, y: 0 }, data: { title: "Xcode & Tooling", sectionNumber: 3, color: "green", sectionIcon: "tool" } },
    { id: "n_xcode_1", type: "topic", parentId: "s_xcode", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Xcode IDE Basics", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", row: 0, col: 0 } },
    { id: "n_xcode_2", type: "topic", parentId: "s_xcode", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Swift Package Manager (SPM)", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_xcode_3", type: "topic", parentId: "s_xcode", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Instruments & Profiling", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", row: 1, col: 0 } },

    // --- 4. UI Development (Purple) ---
    { id: "s_ui", type: "section", position: { x: 1728, y: 0 }, data: { title: "UI Development", sectionNumber: 4, color: "purple", sectionIcon: "palette" } },
    { id: "n_ui_1", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SwiftUI Fundamentals", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_ui_2", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "UIKit Basics (Legacy)", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_ui_3", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "State & Data Flow (@State)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", row: 1, col: 0 } },
    { id: "n_ui_4", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Animations & Transitions", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 1, col: 1 } },

    // --- 5. App Architecture (Yellow) ---
    { id: "s_arch", type: "section", position: { x: 0, y: 600 }, data: { title: "App Architecture", sectionNumber: 5, color: "yellow", sectionIcon: "check" } },
    { id: "n_arch_1", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MVC Pattern", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "yellow", row: 0, col: 0 } },
    { id: "n_arch_2", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MVVM with SwiftUI", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "yellow", row: 0, col: 1 } },
    { id: "n_arch_3", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "TCA (The Composable Architecture)", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "yellow", row: 1, col: 0 } },

    // --- 6. Core Data & Storage (Red) ---
    { id: "s_data", type: "section", position: { x: 576, y: 600 }, data: { title: "Core Data & Storage", sectionNumber: 6, color: "red", sectionIcon: "database" } },
    { id: "n_data_1", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "UserDefaults & Keychain", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", row: 0, col: 0 } },
    { id: "n_data_2", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "FileManager", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "red", row: 0, col: 1 } },
    { id: "n_data_3", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Core Data Basics", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", row: 1, col: 0 } },
    { id: "n_data_4", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SwiftData (Modern)", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", row: 1, col: 1 } },

    // --- 7. Networking (Blue) ---
    { id: "s_net", type: "section", position: { x: 1152, y: 600 }, data: { title: "Networking", sectionNumber: 7, color: "blue", sectionIcon: "api" } },
    { id: "n_net_1", type: "topic", parentId: "s_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "URLSession", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_net_2", type: "topic", parentId: "s_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Codable Protocol", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_net_3", type: "topic", parentId: "s_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Alamofire (3rd Party)", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", row: 1, col: 0 } },

    // --- 8. Concurrency (Green) ---
    { id: "s_sync", type: "section", position: { x: 1728, y: 600 }, data: { title: "Concurrency", sectionNumber: 8, color: "green", sectionIcon: "tool" } },
    { id: "n_sync_1", type: "topic", parentId: "s_sync", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Grand Central Dispatch (GCD)", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", row: 0, col: 0 } },
    { id: "n_sync_2", type: "topic", parentId: "s_sync", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Swift Concurrency (async/await)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_sync_3", type: "topic", parentId: "s_sync", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Actors & Data Races", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", row: 1, col: 0 } },

    // --- 9. Device Capabilities (Orange) ---
    { id: "s_dev", type: "section", position: { x: 0, y: 1200 }, data: { title: "Device Capabilities", sectionNumber: 9, color: "orange", sectionIcon: "tool" } },
    { id: "n_dev_1", type: "topic", parentId: "s_dev", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CoreLocation & MapKit", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", row: 0, col: 0 } },
    { id: "n_dev_2", type: "topic", parentId: "s_dev", extent: "parent", position: { x: 0, y: 0 }, data: { title: "AVFoundation (Camera/Audio)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "orange", row: 0, col: 1 } },
    { id: "n_dev_3", type: "topic", parentId: "s_dev", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Push Notifications", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", row: 1, col: 0 } },

    // --- 10. App Store Deployment (Purple) ---
    { id: "s_pub", type: "section", position: { x: 576, y: 1200 }, data: { title: "App Store Deployment", sectionNumber: 10, color: "purple", sectionIcon: "rocket" } },
    { id: "n_pub_1", type: "topic", parentId: "s_pub", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Certificates & Provisioning", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_pub_2", type: "topic", parentId: "s_pub", extent: "parent", position: { x: 0, y: 0 }, data: { title: "TestFlight & Beta Testing", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_pub_3", type: "topic", parentId: "s_pub", extent: "parent", position: { x: 0, y: 0 }, data: { title: "App Store Connect", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    // Ecosystem
    { id: "e1", source: "n_eco_1", target: "n_eco_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_eco_1", target: "n_eco_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Swift
    { id: "e_sec_1", source: "n_eco_2", target: "n_swift_1", sourceHandle: "right", targetHandle: "left" },
    
    // Swift
    { id: "e3", source: "n_swift_1", target: "n_swift_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_swift_1", target: "n_swift_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e5", source: "n_swift_3", target: "n_swift_4", sourceHandle: "right", targetHandle: "left" },
    
    // To Xcode
    { id: "e_sec_2", source: "n_swift_2", target: "n_xcode_1", sourceHandle: "right", targetHandle: "left" },
    
    // Xcode
    { id: "e6", source: "n_xcode_1", target: "n_xcode_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e7", source: "n_xcode_1", target: "n_xcode_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To UI
    { id: "e_sec_3", source: "n_xcode_2", target: "n_ui_1", sourceHandle: "right", targetHandle: "left" },
    
    // UI
    { id: "e8", source: "n_ui_1", target: "n_ui_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e9", source: "n_ui_1", target: "n_ui_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e10", source: "n_ui_3", target: "n_ui_4", sourceHandle: "right", targetHandle: "left" },
    
    // To Architecture
    { id: "e_sec_4", source: "n_ui_3", target: "n_arch_1", sourceHandle: "bottom", targetHandle: "top" },
    
    // Architecture
    { id: "e11", source: "n_arch_1", target: "n_arch_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_arch_1", target: "n_arch_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Storage
    { id: "e_sec_5", source: "n_arch_2", target: "n_data_1", sourceHandle: "right", targetHandle: "left" },
    
    // Storage
    { id: "e13", source: "n_data_1", target: "n_data_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e14", source: "n_data_1", target: "n_data_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e15", source: "n_data_3", target: "n_data_4", sourceHandle: "right", targetHandle: "left" },
    
    // To Net
    { id: "e_sec_6", source: "n_data_2", target: "n_net_1", sourceHandle: "right", targetHandle: "left" },
    
    // Net
    { id: "e16", source: "n_net_1", target: "n_net_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e17", source: "n_net_1", target: "n_net_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Concurrency
    { id: "e_sec_7", source: "n_net_2", target: "n_sync_1", sourceHandle: "right", targetHandle: "left" },
    
    // Concurrency
    { id: "e18", source: "n_sync_1", target: "n_sync_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e19", source: "n_sync_1", target: "n_sync_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Devices
    { id: "e_sec_8", source: "n_sync_3", target: "n_dev_1", sourceHandle: "bottom", targetHandle: "top" },
    
    // Devices
    { id: "e20", source: "n_dev_1", target: "n_dev_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e21", source: "n_dev_1", target: "n_dev_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Pub
    { id: "e_sec_9", source: "n_dev_2", target: "n_pub_1", sourceHandle: "right", targetHandle: "left" },
    
    // Pub
    { id: "e22", source: "n_pub_1", target: "n_pub_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e23", source: "n_pub_1", target: "n_pub_3", sourceHandle: "bottom", targetHandle: "top" },
];
