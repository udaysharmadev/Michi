import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_ux_fund", type: "section", position: { x: 0, y: 0 }, data: { title: "UX Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "lightbulb" } },
    { id: "n_ux_1", type: "topic", parentId: "s_ux_fund", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Design Thinking", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "blue", icon: "brain", row: 0, col: 0 } },
    { id: "n_ux_2", type: "topic", parentId: "s_ux_fund", extent: "parent", position: { x: 0, y: 0 }, data: { title: "User Research", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "search", row: 0, col: 1 } },
    { id: "n_ux_3", type: "topic", parentId: "s_ux_fund", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Personas & Journey Maps", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", icon: "map", row: 1, col: 0 } },

    { id: "s_ux_ia", type: "section", position: { x: 576, y: 0 }, data: { title: "Information Architecture", sectionNumber: 2, color: "purple", sectionIcon: "layers" } },
    { id: "n_ux_4", type: "topic", parentId: "s_ux_ia", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Card Sorting", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", icon: "grid", row: 0, col: 0 } },
    { id: "n_ux_5", type: "topic", parentId: "s_ux_ia", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Sitemaps", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", icon: "map", row: 0, col: 1 } },
    { id: "n_ux_6", type: "topic", parentId: "s_ux_ia", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Wireframing", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "purple", icon: "layout", row: 1, col: 0 } },

    { id: "s_ux_ui", type: "section", position: { x: 1152, y: 0 }, data: { title: "UI Design", sectionNumber: 3, color: "green", sectionIcon: "palette" } },
    { id: "n_ux_7", type: "topic", parentId: "s_ux_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Color Theory", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "palette", row: 0, col: 0 } },
    { id: "n_ux_8", type: "topic", parentId: "s_ux_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Typography", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "type", row: 0, col: 1 } },
    { id: "n_ux_9", type: "topic", parentId: "s_ux_ui", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Layout & Grids", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "grid", row: 1, col: 0 } },

    { id: "s_ux_proto", type: "section", position: { x: 0, y: 600 }, data: { title: "Prototyping & Tools", sectionNumber: 4, color: "orange", sectionIcon: "tool" } },
    { id: "n_ux_10", type: "topic", parentId: "s_ux_proto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Figma Basics", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiFigma", row: 0, col: 0 } },
    { id: "n_ux_11", type: "topic", parentId: "s_ux_proto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Advanced Prototyping", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiFigma", row: 0, col: 1 } },
    { id: "n_ux_12", type: "topic", parentId: "s_ux_proto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Design Systems", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", icon: "box", row: 1, col: 0 } },

    { id: "s_ux_ho", type: "section", position: { x: 576, y: 600 }, data: { title: "Usability & Handoff", sectionNumber: 5, color: "red", sectionIcon: "check" } },
    { id: "n_ux_13", type: "topic", parentId: "s_ux_ho", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Usability Testing", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", icon: "users", row: 0, col: 0 } },
    { id: "n_ux_14", type: "topic", parentId: "s_ux_ho", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Accessibility (a11y)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", icon: "eye", row: 0, col: 1 } },
    { id: "n_ux_15", type: "topic", parentId: "s_ux_ho", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Developer Handoff", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "red", icon: "code", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_ux_1", target: "n_ux_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_ux_1", target: "n_ux_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_1", source: "n_ux_3", target: "n_ux_4", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_ux_4", target: "n_ux_5", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_ux_4", target: "n_ux_6", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_ux_6", target: "n_ux_7", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_ux_7", target: "n_ux_8", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_ux_7", target: "n_ux_9", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_ux_9", target: "n_ux_10", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_ux_10", target: "n_ux_11", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_ux_10", target: "n_ux_12", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_ux_12", target: "n_ux_13", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_ux_13", target: "n_ux_14", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_ux_13", target: "n_ux_15", sourceHandle: "bottom", targetHandle: "top" },
];
