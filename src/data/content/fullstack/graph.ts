import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const fullstackGraphNodes: RoadmapContentNode[] = [
    // --- 1. Pre-requisites (Blue) ---
    { id: "s_fs_prereq", type: "section", position: { x: 0, y: 0 }, data: { title: "Pre-requisites", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_fs_prereq_1", type: "topic", parentId: "s_fs_prereq", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Frontend Roadmap", difficulty: "Intermediate", estimatedTime: "Months", sectionColor: "blue", icon: "layout", row: 0, col: 0, linkTo: "frontend" } },
    { id: "n_fs_prereq_2", type: "topic", parentId: "s_fs_prereq", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Backend Roadmap", difficulty: "Intermediate", estimatedTime: "Months", sectionColor: "blue", icon: "server", row: 0, col: 1, linkTo: "backend" } },

    // --- 2. Full Stack Integration (Purple) ---
    { id: "s_fs_integ", type: "section", position: { x: 576, y: 0 }, data: { title: "Full Stack Integration", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_fs_integ_1", type: "topic", parentId: "s_fs_integ", extent: "parent", position: { x: 0, y: 0 }, data: { title: "REST & GraphQL Integration", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_fs_integ_2", type: "topic", parentId: "s_fs_integ", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CORS Handling", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_fs_integ_3", type: "topic", parentId: "s_fs_integ", extent: "parent", position: { x: 0, y: 0 }, data: { title: "BFF (Backend for Frontend)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "purple", row: 1, col: 0 } },

    // --- 3. State & Data Sync (Green) ---
    { id: "s_fs_sync", type: "section", position: { x: 1152, y: 0 }, data: { title: "State & Data Sync", sectionNumber: 3, color: "green", sectionIcon: "database" } },
    { id: "n_fs_sync_1", type: "topic", parentId: "s_fs_sync", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Optimistic UI", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", row: 0, col: 0 } },
    { id: "n_fs_sync_2", type: "topic", parentId: "s_fs_sync", extent: "parent", position: { x: 0, y: 0 }, data: { title: "WebSockets & Real-time", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "green", row: 0, col: 1 } },

    // --- 4. Advanced Authentication (Yellow) ---
    { id: "s_fs_auth", type: "section", position: { x: 1728, y: 0 }, data: { title: "Advanced Authentication", sectionNumber: 4, color: "yellow", sectionIcon: "lock" } },
    { id: "n_fs_auth_1", type: "topic", parentId: "s_fs_auth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Cross-origin Cookies", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "yellow", row: 0, col: 0 } },
    { id: "n_fs_auth_2", type: "topic", parentId: "s_fs_auth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "JWT Refresh Token Flows", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "yellow", row: 0, col: 1 } },

    // --- 5. Monorepos & Tooling (Red) ---
    { id: "s_fs_mono", type: "section", position: { x: 0, y: 600 }, data: { title: "Monorepos & Tooling", sectionNumber: 5, color: "red", sectionIcon: "box" } },
    { id: "n_fs_mono_1", type: "topic", parentId: "s_fs_mono", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Nx", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "red", row: 0, col: 0 } },
    { id: "n_fs_mono_2", type: "topic", parentId: "s_fs_mono", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Turborepo", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "red", icon: "SiTurborepo", row: 0, col: 1 } },
    { id: "n_fs_mono_3", type: "topic", parentId: "s_fs_mono", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Shared Packages", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", row: 1, col: 0 } },

    // --- 6. Deployment & Architecture (Orange) ---
    { id: "s_fs_dep", type: "section", position: { x: 576, y: 600 }, data: { title: "Deployment & Architecture", sectionNumber: 6, color: "orange", sectionIcon: "rocket" } },
    { id: "n_fs_dep_1", type: "topic", parentId: "s_fs_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Full Stack Hosting (Vercel, AWS)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "orange", row: 0, col: 0 } },
    { id: "n_fs_dep_2", type: "topic", parentId: "s_fs_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Serverless vs Containers", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "orange", row: 0, col: 1 } },
];

export const fullstackGraphEdges: RoadmapContentEdge[] = [
    // Pre-requisites internal
    { id: "fs_e1", source: "n_fs_prereq_1", target: "n_fs_prereq_2", sourceHandle: "right", targetHandle: "left" },

    // Pre-requisites to Integration (Combining arrows conceptually)
    { id: "fs_e_sec_1", source: "n_fs_prereq_2", target: "n_fs_integ_1", sourceHandle: "right", targetHandle: "left" },

    // Integration internal
    { id: "fs_e2", source: "n_fs_integ_1", target: "n_fs_integ_2", sourceHandle: "right", targetHandle: "left" },
    { id: "fs_e3", source: "n_fs_integ_1", target: "n_fs_integ_3", sourceHandle: "bottom", targetHandle: "top" },

    // Integration to Sync
    { id: "fs_e_sec_2", source: "n_fs_integ_2", target: "n_fs_sync_1", sourceHandle: "right", targetHandle: "left" },

    // Sync internal
    { id: "fs_e4", source: "n_fs_sync_1", target: "n_fs_sync_2", sourceHandle: "right", targetHandle: "left" },

    // Sync to Auth
    { id: "fs_e_sec_3", source: "n_fs_sync_2", target: "n_fs_auth_1", sourceHandle: "right", targetHandle: "left" },

    // Auth internal
    { id: "fs_e5", source: "n_fs_auth_1", target: "n_fs_auth_2", sourceHandle: "right", targetHandle: "left" },

    // Auth to Monorepos (wraps around)
    { id: "fs_e_sec_4", source: "n_fs_auth_2", target: "n_fs_mono_1", sourceHandle: "bottom", targetHandle: "top" },

    // Monorepos internal
    { id: "fs_e6", source: "n_fs_mono_1", target: "n_fs_mono_2", sourceHandle: "right", targetHandle: "left" },
    { id: "fs_e7", source: "n_fs_mono_1", target: "n_fs_mono_3", sourceHandle: "bottom", targetHandle: "top" },

    // Monorepos to Deployment
    { id: "fs_e_sec_5", source: "n_fs_mono_2", target: "n_fs_dep_1", sourceHandle: "right", targetHandle: "left" },

    // Deployment internal
    { id: "fs_e8", source: "n_fs_dep_1", target: "n_fs_dep_2", sourceHandle: "right", targetHandle: "left" },
];
