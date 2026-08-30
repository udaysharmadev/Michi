import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_ds_math", type: "section", position: { x: 0, y: 0 }, data: { title: "Math & Statistics", sectionNumber: 1, color: "blue", sectionIcon: "calculator" } },
    { id: "n_ds_1", type: "topic", parentId: "s_ds_math", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Linear Algebra", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiNumpy", row: 0, col: 0 } },
    { id: "n_ds_2", type: "topic", parentId: "s_ds_math", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Calculus", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "blue", icon: "trending-up", row: 0, col: 1 } },
    { id: "n_ds_3", type: "topic", parentId: "s_ds_math", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Probability", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "blue", icon: "target", row: 1, col: 0 } },
    { id: "n_ds_4", type: "topic", parentId: "s_ds_math", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Statistics", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", icon: "bar-chart", row: 1, col: 1 } },

    { id: "s_ds_prog", type: "section", position: { x: 828, y: 0 }, data: { title: "Programming for Data", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_ds_5", type: "topic", parentId: "s_ds_prog", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Python / R", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "purple", icon: "SiPython", row: 0, col: 0 } },
    { id: "n_ds_6", type: "topic", parentId: "s_ds_prog", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Pandas & NumPy", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "purple", icon: "SiNumpy", row: 0, col: 1 } },
    { id: "n_ds_7", type: "topic", parentId: "s_ds_prog", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Data Structures", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", icon: "layers", row: 1, col: 0 } },

    { id: "s_ds_viz", type: "section", position: { x: 1656, y: 0 }, data: { title: "Data Visualization", sectionNumber: 3, color: "green", sectionIcon: "bar-chart" } },
    { id: "n_ds_8", type: "topic", parentId: "s_ds_viz", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Matplotlib & Seaborn", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiPython", row: 0, col: 0 } },
    { id: "n_ds_9", type: "topic", parentId: "s_ds_viz", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Tableau & PowerBI", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "green", icon: "SiTableau", row: 0, col: 1 } },
    { id: "n_ds_10", type: "topic", parentId: "s_ds_viz", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Dashboards", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", icon: "layout", row: 1, col: 0 } },

    { id: "s_ds_ml", type: "section", position: { x: 0, y: 600 }, data: { title: "Machine Learning", sectionNumber: 4, color: "orange", sectionIcon: "brain" } },
    { id: "n_ds_11", type: "topic", parentId: "s_ds_ml", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Regression & Classification", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", icon: "trending-up", row: 0, col: 0 } },
    { id: "n_ds_12", type: "topic", parentId: "s_ds_ml", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Clustering Algorithms", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "grid", row: 0, col: 1 } },
    { id: "n_ds_13", type: "topic", parentId: "s_ds_ml", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Model Evaluation", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", icon: "check-circle", row: 1, col: 0 } },

    { id: "s_ds_adv", type: "section", position: { x: 828, y: 600 }, data: { title: "Advanced Topics", sectionNumber: 5, color: "red", sectionIcon: "award" } },
    { id: "n_ds_14", type: "topic", parentId: "s_ds_adv", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Intro to Deep Learning", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "red", icon: "SiPytorch", row: 0, col: 0 } },
    { id: "n_ds_15", type: "topic", parentId: "s_ds_adv", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Time Series Analysis", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", icon: "activity", row: 0, col: 1 } },
    { id: "n_ds_16", type: "topic", parentId: "s_ds_adv", extent: "parent", position: { x: 0, y: 0 }, data: { title: "NLP Basics", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", icon: "message-square", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_ds_1", target: "n_ds_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_ds_3", target: "n_ds_4", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_ds_2", target: "n_ds_5", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_ds_5", target: "n_ds_6", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_ds_5", target: "n_ds_7", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_ds_6", target: "n_ds_8", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_ds_8", target: "n_ds_9", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_ds_8", target: "n_ds_10", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_ds_10", target: "n_ds_11", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_ds_11", target: "n_ds_12", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_ds_11", target: "n_ds_13", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_ds_13", target: "n_ds_14", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_ds_14", target: "n_ds_15", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_ds_14", target: "n_ds_16", sourceHandle: "bottom", targetHandle: "top" },
];
