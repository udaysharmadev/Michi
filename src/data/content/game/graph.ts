import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_gmath", type: "section", position: { x: 0, y: 0 }, data: { title: "Math & Physics Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "calculator" } },
    { id: "n_gmath_1", type: "topic", parentId: "s_gmath", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Linear Algebra & Vectors", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiNumpy", row: 0, col: 0 } },
    { id: "n_gmath_2", type: "topic", parentId: "s_gmath", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Trigonometry & Quaternions", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "blue", icon: "target", row: 0, col: 1 } },
    { id: "n_gmath_3", type: "topic", parentId: "s_gmath", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Collision Detection Physics", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "blue", icon: "zap", row: 1, col: 0 } },

    { id: "s_geng", type: "section", position: { x: 576, y: 0 }, data: { title: "Game Engines", sectionNumber: 2, color: "purple", sectionIcon: "cpu" } },
    { id: "n_geng_1", type: "topic", parentId: "s_geng", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Unity (C#)", difficulty: "Beginner", estimatedTime: "20 hrs", sectionColor: "purple", icon: "SiUnity", row: 0, col: 0 } },
    { id: "n_geng_2", type: "topic", parentId: "s_geng", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Unreal Engine (C++)", difficulty: "Intermediate", estimatedTime: "25 hrs", sectionColor: "purple", icon: "SiUnrealengine", row: 0, col: 1 } },
    { id: "n_geng_3", type: "topic", parentId: "s_geng", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Godot (GDScript)", difficulty: "Advanced", estimatedTime: "15 hrs", sectionColor: "purple", icon: "SiGodot", row: 1, col: 0 } },

    { id: "s_gprog", type: "section", position: { x: 1152, y: 0 }, data: { title: "Game Programming Patterns", sectionNumber: 3, color: "green", sectionIcon: "code" } },
    { id: "n_gprog_1", type: "topic", parentId: "s_gprog", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Entity Component System (ECS)", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "green", icon: "layers", row: 0, col: 0 } },
    { id: "n_gprog_2", type: "topic", parentId: "s_gprog", extent: "parent", position: { x: 0, y: 0 }, data: { title: "State Machines & AI", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "green", icon: "cpu", row: 0, col: 1 } },
    { id: "n_gprog_3", type: "topic", parentId: "s_gprog", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Object Pooling & Memory", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "green", icon: "database", row: 1, col: 0 } },

    { id: "s_ggfx", type: "section", position: { x: 0, y: 600 }, data: { title: "Graphics & Rendering", sectionNumber: 4, color: "yellow", sectionIcon: "palette" } },
    { id: "n_grap_1", type: "topic", parentId: "s_ggfx", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Shaders (HLSL/GLSL)", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "yellow", icon: "code", row: 0, col: 0 } },
    { id: "n_grap_2", type: "topic", parentId: "s_ggfx", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Lighting & Materials (PBR)", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "yellow", icon: "sun", row: 0, col: 1 } },
    { id: "n_grap_3", type: "topic", parentId: "s_ggfx", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Particle Systems", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "sparkles", row: 1, col: 0 } },

    { id: "s_gass", type: "section", position: { x: 576, y: 600 }, data: { title: "Audio & Asset Pipelines", sectionNumber: 5, color: "red", sectionIcon: "music" } },
    { id: "n_ass_1", type: "topic", parentId: "s_gass", extent: "parent", position: { x: 0, y: 0 }, data: { title: "3D Modeling & Animation", difficulty: "Beginner", estimatedTime: "12 hrs", sectionColor: "red", icon: "box", row: 0, col: 0 } },
    { id: "n_ass_2", type: "topic", parentId: "s_gass", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Audio Middleware (FMOD/Wwise)", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", icon: "volume-2", row: 0, col: 1 } },
    { id: "n_ass_3", type: "topic", parentId: "s_gass", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Asset Bundling", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "red", icon: "package", row: 1, col: 0 } },

    { id: "s_gmp", type: "section", position: { x: 1152, y: 600 }, data: { title: "Multiplayer & Networking", sectionNumber: 6, color: "orange", sectionIcon: "users" } },
    { id: "n_mp_1", type: "topic", parentId: "s_gmp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Client-Server Architecture", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "orange", icon: "server", row: 0, col: 0 } },
    { id: "n_mp_2", type: "topic", parentId: "s_gmp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "State Synchronization", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", icon: "refresh-cw", row: 0, col: 1 } },
    { id: "n_mp_3", type: "topic", parentId: "s_gmp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Matchmaking & Lag Compensation", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "orange", icon: "gauge", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_gmath_1", target: "n_gmath_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_gmath_2", target: "n_gmath_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_gmath_3", target: "n_geng_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_geng_1", target: "n_geng_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_geng_1", target: "n_geng_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_geng_2", target: "n_gprog_1", sourceHandle: "bottom", targetHandle: "top" },

    { id: "e5", source: "n_gprog_1", target: "n_gprog_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_gprog_1", target: "n_gprog_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_gprog_3", target: "n_grap_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_grap_1", target: "n_grap_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_grap_1", target: "n_grap_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_grap_3", target: "n_ass_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_ass_1", target: "n_ass_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_ass_1", target: "n_ass_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_5", source: "n_ass_3", target: "n_mp_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_mp_1", target: "n_mp_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_mp_1", target: "n_mp_3", sourceHandle: "bottom", targetHandle: "top" },
];
