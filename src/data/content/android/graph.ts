import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    // --- 1. Android Basics & OS (Blue) ---
    { id: "s_bas", type: "section", position: { x: 0, y: 0 }, data: { title: "Android Basics & OS", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_bas_1", type: "topic", parentId: "s_bas", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Android Architecture", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_bas_2", type: "topic", parentId: "s_bas", extent: "parent", position: { x: 0, y: 0 }, data: { title: "ART & Dalvik", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_bas_3", type: "topic", parentId: "s_bas", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Android Permissions", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", row: 1, col: 0 } },

    // --- 2. Kotlin Programming (Purple) ---
    { id: "s_kot", type: "section", position: { x: 576, y: 0 }, data: { title: "Kotlin Programming", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_kot_1", type: "topic", parentId: "s_kot", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Kotlin Syntax & Basics", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_kot_2", type: "topic", parentId: "s_kot", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Null Safety", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_kot_3", type: "topic", parentId: "s_kot", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Classes & Objects", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 1, col: 0 } },
    { id: "n_kot_4", type: "topic", parentId: "s_kot", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Coroutines", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "purple", row: 1, col: 1 } },

    // --- 3. Tooling (Android Studio) (Green) ---
    { id: "s_tool", type: "section", position: { x: 1152, y: 0 }, data: { title: "Tooling", sectionNumber: 3, color: "green", sectionIcon: "tool" } },
    { id: "n_tool_1", type: "topic", parentId: "s_tool", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Android Studio IDE", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "green", row: 0, col: 0 } },
    { id: "n_tool_2", type: "topic", parentId: "s_tool", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Gradle Build System", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_tool_3", type: "topic", parentId: "s_tool", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Android Emulator & ADB", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "green", row: 1, col: 0 } },

    // --- 4. UI Components (Yellow) ---
    { id: "s_ui", type: "section", position: { x: 1728, y: 0 }, data: { title: "UI Components", sectionNumber: 4, color: "yellow", sectionIcon: "palette" } },
    { id: "n_ui_1", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "XML Layouts (Legacy)", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "yellow", row: 0, col: 0 } },
    { id: "n_ui_2", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Jetpack Compose", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "yellow", row: 0, col: 1 } },
    { id: "n_ui_3", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Material Design 3", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "yellow", row: 1, col: 0 } },
    { id: "n_ui_4", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "RecyclerView / LazyColumn", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "yellow", row: 1, col: 1 } },

    // --- 5. App Components (Red) ---
    { id: "s_app", type: "section", position: { x: 0, y: 600 }, data: { title: "App Components", sectionNumber: 5, color: "red", sectionIcon: "tool" } },
    { id: "n_app_1", type: "topic", parentId: "s_app", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Activities & Lifecycle", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "red", row: 0, col: 0 } },
    { id: "n_app_2", type: "topic", parentId: "s_app", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Fragments", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "red", row: 0, col: 1 } },
    { id: "n_app_3", type: "topic", parentId: "s_app", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Intents & Navigation", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", row: 1, col: 0 } },

    // --- 6. Data Storage (Orange) ---
    { id: "s_data", type: "section", position: { x: 576, y: 600 }, data: { title: "Data Storage", sectionNumber: 6, color: "orange", sectionIcon: "database" } },
    { id: "n_data_1", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Room Database (SQLite)", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", row: 0, col: 0 } },
    { id: "n_data_2", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DataStore / SharedPreferences", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "orange", row: 0, col: 1 } },
    { id: "n_data_3", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "File Storage & MediaStore", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", row: 1, col: 0 } },

    // --- 7. Networking & APIs (Blue) ---
    { id: "s_net", type: "section", position: { x: 1152, y: 600 }, data: { title: "Networking & APIs", sectionNumber: 7, color: "blue", sectionIcon: "api" } },
    { id: "n_net_1", type: "topic", parentId: "s_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Retrofit & OkHttp", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_net_2", type: "topic", parentId: "s_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "JSON Parsing (Moshi/Gson)", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_net_3", type: "topic", parentId: "s_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Handling Network States", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "blue", row: 1, col: 0 } },

    // --- 8. Architecture Patterns (Purple) ---
    { id: "s_arch", type: "section", position: { x: 1728, y: 600 }, data: { title: "Architecture Patterns", sectionNumber: 8, color: "purple", sectionIcon: "check" } },
    { id: "n_arch_1", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MVVM Pattern", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_arch_2", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Clean Architecture", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_arch_3", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Dependency Injection (Hilt/Dagger)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "purple", row: 1, col: 0 } },

    // --- 9. Background Tasks (Green) ---
    { id: "s_bg", type: "section", position: { x: 0, y: 1200 }, data: { title: "Background Tasks", sectionNumber: 9, color: "green", sectionIcon: "tool" } },
    { id: "n_bg_1", type: "topic", parentId: "s_bg", extent: "parent", position: { x: 0, y: 0 }, data: { title: "WorkManager", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", row: 0, col: 0 } },
    { id: "n_bg_2", type: "topic", parentId: "s_bg", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Foreground Services", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_bg_3", type: "topic", parentId: "s_bg", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Broadcast Receivers", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "green", row: 1, col: 0 } },

    // --- 10. Publishing & CI/CD (Yellow) ---
    { id: "s_pub", type: "section", position: { x: 576, y: 1200 }, data: { title: "Publishing", sectionNumber: 10, color: "yellow", sectionIcon: "rocket" } },
    { id: "n_pub_1", type: "topic", parentId: "s_pub", extent: "parent", position: { x: 0, y: 0 }, data: { title: "App Signing", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "yellow", row: 0, col: 0 } },
    { id: "n_pub_2", type: "topic", parentId: "s_pub", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Google Play Console", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "yellow", row: 0, col: 1 } },
    { id: "n_pub_3", type: "topic", parentId: "s_pub", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CI/CD (GitHub Actions/Fastlane)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "yellow", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    // Basics
    { id: "e1", source: "n_bas_1", target: "n_bas_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_bas_1", target: "n_bas_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Kotlin
    { id: "e_sec_1", source: "n_bas_2", target: "n_kot_1", sourceHandle: "right", targetHandle: "left" },
    
    // Kotlin
    { id: "e3", source: "n_kot_1", target: "n_kot_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_kot_1", target: "n_kot_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e5", source: "n_kot_3", target: "n_kot_4", sourceHandle: "right", targetHandle: "left" },
    
    // To Tooling
    { id: "e_sec_2", source: "n_kot_2", target: "n_tool_1", sourceHandle: "right", targetHandle: "left" },
    
    // Tooling
    { id: "e6", source: "n_tool_1", target: "n_tool_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e7", source: "n_tool_1", target: "n_tool_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To UI
    { id: "e_sec_3", source: "n_tool_2", target: "n_ui_1", sourceHandle: "right", targetHandle: "left" },
    
    // UI
    { id: "e8", source: "n_ui_1", target: "n_ui_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e9", source: "n_ui_1", target: "n_ui_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e10", source: "n_ui_2", target: "n_ui_4", sourceHandle: "bottom", targetHandle: "top" },
    
    // To App Components
    { id: "e_sec_4", source: "n_ui_3", target: "n_app_1", sourceHandle: "bottom", targetHandle: "top" },
    
    // App Components
    { id: "e11", source: "n_app_1", target: "n_app_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_app_1", target: "n_app_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Data
    { id: "e_sec_5", source: "n_app_2", target: "n_data_1", sourceHandle: "right", targetHandle: "left" },
    
    // Data
    { id: "e13", source: "n_data_1", target: "n_data_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e14", source: "n_data_1", target: "n_data_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Net
    { id: "e_sec_6", source: "n_data_2", target: "n_net_1", sourceHandle: "right", targetHandle: "left" },
    
    // Net
    { id: "e15", source: "n_net_1", target: "n_net_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e16", source: "n_net_1", target: "n_net_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Arch
    { id: "e_sec_7", source: "n_net_2", target: "n_arch_1", sourceHandle: "right", targetHandle: "left" },
    
    // Arch
    { id: "e17", source: "n_arch_1", target: "n_arch_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e18", source: "n_arch_1", target: "n_arch_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Background
    { id: "e_sec_8", source: "n_arch_3", target: "n_bg_1", sourceHandle: "bottom", targetHandle: "top" },
    
    // Background
    { id: "e19", source: "n_bg_1", target: "n_bg_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e20", source: "n_bg_1", target: "n_bg_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Pub
    { id: "e_sec_9", source: "n_bg_2", target: "n_pub_1", sourceHandle: "right", targetHandle: "left" },
    
    // Pub
    { id: "e21", source: "n_pub_1", target: "n_pub_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e22", source: "n_pub_1", target: "n_pub_3", sourceHandle: "bottom", targetHandle: "top" },
];
