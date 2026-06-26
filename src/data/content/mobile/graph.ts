import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    // --- 1. Mobile Ecosystem (Blue) ---
    { id: "s_me", type: "section", position: { x: 0, y: 0 }, data: { title: "Mobile Ecosystem", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_me_1", type: "topic", parentId: "s_me", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Native vs Cross-platform", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_me_2", type: "topic", parentId: "s_me", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Mobile OS Architecture", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_me_3", type: "topic", parentId: "s_me", extent: "parent", position: { x: 0, y: 0 }, data: { title: "App Lifecycle", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 0, col: 2 } },

    // --- 2. Programming Foundations (Purple) ---
    { id: "s_pf", type: "section", position: { x: 828, y: 0 }, data: { title: "Programming Foundations", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_pf_1", type: "topic", parentId: "s_pf", extent: "parent", position: { x: 0, y: 0 }, data: { title: "JavaScript / TypeScript", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_pf_2", type: "topic", parentId: "s_pf", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Dart Basics", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_pf_3", type: "topic", parentId: "s_pf", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Asynchronous Programming", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 1, col: 0 } },

    // --- 3. Cross-Platform Frameworks (Green) ---
    { id: "s_cp", type: "section", position: { x: 1404, y: 0 }, data: { title: "Cross-Platform Frameworks", sectionNumber: 3, color: "green", sectionIcon: "react" } },
    { id: "n_cp_1", type: "topic", parentId: "s_cp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "React Native Fundamentals", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "green", icon: "SiReact", row: 0, col: 0 } },
    { id: "n_cp_2", type: "topic", parentId: "s_cp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Flutter Fundamentals", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_cp_3", type: "topic", parentId: "s_cp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Expo (for RN)", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", row: 1, col: 0 } },

    // --- 4. UI & Navigation (Yellow) ---
    { id: "s_ui", type: "section", position: { x: 1980, y: 0 }, data: { title: "UI & Navigation", sectionNumber: 4, color: "yellow", sectionIcon: "palette" } },
    { id: "n_ui_1", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Mobile Layouts (Flexbox)", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "yellow", row: 0, col: 0 } },
    { id: "n_ui_2", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Styling & Theming", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "yellow", row: 0, col: 1 } },
    { id: "n_ui_3", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Stack & Tab Navigation", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "yellow", row: 1, col: 0 } },
    { id: "n_ui_4", type: "topic", parentId: "s_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Gestures & Animations", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "yellow", row: 1, col: 1 } },

    // --- 5. State Management (Red) ---
    { id: "s_sm", type: "section", position: { x: 0, y: 600 }, data: { title: "State Management", sectionNumber: 5, color: "red", sectionIcon: "database" } },
    { id: "n_sm_1", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "React Context / Redux", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", icon: "SiRedux", row: 0, col: 0 } },
    { id: "n_sm_2", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Provider / Riverpod", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", row: 0, col: 1 } },
    { id: "n_sm_3", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Async State", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", row: 1, col: 0 } },

    // --- 6. Device APIs & Permissions (Orange) ---
    { id: "s_api", type: "section", position: { x: 576, y: 600 }, data: { title: "Device APIs & Permissions", sectionNumber: 6, color: "orange", sectionIcon: "tool" } },
    { id: "n_api_1", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Camera & Media", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", row: 0, col: 0 } },
    { id: "n_api_2", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Location & Maps", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", row: 0, col: 1 } },
    { id: "n_api_3", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Push Notifications", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "orange", row: 1, col: 0 } },
    { id: "n_api_4", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Permissions Handling", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "orange", row: 1, col: 1 } },

    // --- 7. Data & Offline (Blue) ---
    { id: "s_data", type: "section", position: { x: 1152, y: 600 }, data: { title: "Data & Offline", sectionNumber: 7, color: "blue", sectionIcon: "database" } },
    { id: "n_data_1", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SQLite / LocalStorage", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_data_2", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "REST & GraphQL", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "blue", icon: "SiGraphql", row: 0, col: 1 } },
    { id: "n_data_3", type: "topic", parentId: "s_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Offline-First Sync", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "blue", row: 1, col: 0 } },

    // --- 8. Deployment & App Stores (Purple) ---
    { id: "s_dep", type: "section", position: { x: 1728, y: 600 }, data: { title: "Deployment", sectionNumber: 8, color: "purple", sectionIcon: "rocket" } },
    { id: "n_dep_1", type: "topic", parentId: "s_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "App Store Guidelines", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_dep_2", type: "topic", parentId: "s_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Code Signing", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_dep_3", type: "topic", parentId: "s_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CI/CD (Fastlane)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "purple", row: 1, col: 0 } },
    { id: "n_dep_4", type: "topic", parentId: "s_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Play Console & App Store Connect", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 1, col: 1 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    // Ecosystem
    { id: "e1", source: "n_me_1", target: "n_me_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_me_2", target: "n_me_3", sourceHandle: "right", targetHandle: "left" },
    
    // To Programming Foundations
    { id: "e_sec_1", source: "n_me_3", target: "n_pf_1", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1b", source: "n_me_3", target: "n_pf_2", sourceHandle: "right", targetHandle: "left" },
    
    // Programming Foundations
    { id: "e3", source: "n_pf_1", target: "n_pf_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e4", source: "n_pf_2", target: "n_pf_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Frameworks
    { id: "e_sec_2", source: "n_pf_3", target: "n_cp_1", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_2b", source: "n_pf_3", target: "n_cp_2", sourceHandle: "right", targetHandle: "left" },
    
    // Frameworks
    { id: "e5", source: "n_cp_1", target: "n_cp_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To UI
    { id: "e_sec_3", source: "n_cp_1", target: "n_ui_1", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_3b", source: "n_cp_2", target: "n_ui_1", sourceHandle: "right", targetHandle: "left" },
    
    // UI
    { id: "e6", source: "n_ui_1", target: "n_ui_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e7", source: "n_ui_1", target: "n_ui_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e8", source: "n_ui_3", target: "n_ui_4", sourceHandle: "right", targetHandle: "left" },
    
    // To State Management
    { id: "e_sec_4", source: "n_ui_3", target: "n_sm_1", sourceHandle: "bottom", targetHandle: "top" },
    
    // State Management
    { id: "e9", source: "n_sm_1", target: "n_sm_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e10", source: "n_sm_2", target: "n_sm_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To APIs
    { id: "e_sec_5", source: "n_sm_3", target: "n_api_1", sourceHandle: "right", targetHandle: "left" },
    
    // APIs
    { id: "e11", source: "n_api_1", target: "n_api_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_api_1", target: "n_api_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e13", source: "n_api_3", target: "n_api_4", sourceHandle: "right", targetHandle: "left" },
    
    // To Data
    { id: "e_sec_6", source: "n_api_3", target: "n_data_1", sourceHandle: "right", targetHandle: "left" },
    
    // Data
    { id: "e14", source: "n_data_1", target: "n_data_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e15", source: "n_data_1", target: "n_data_3", sourceHandle: "bottom", targetHandle: "top" },
    
    // To Deployment
    { id: "e_sec_7", source: "n_data_3", target: "n_dep_1", sourceHandle: "right", targetHandle: "left" },
    
    // Deployment
    { id: "e16", source: "n_dep_1", target: "n_dep_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e17", source: "n_dep_1", target: "n_dep_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e18", source: "n_dep_3", target: "n_dep_4", sourceHandle: "right", targetHandle: "left" },
];
