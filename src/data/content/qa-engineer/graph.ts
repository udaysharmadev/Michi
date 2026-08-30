import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_qa_tf", type: "section", position: { x: 0, y: 0 }, data: { title: "Testing Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "check" } },
    { id: "n_qa_1", type: "topic", parentId: "s_qa_tf", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SDLC & STLC", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", icon: "list", row: 0, col: 0 } },
    { id: "n_qa_2", type: "topic", parentId: "s_qa_tf", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Types of Testing", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", icon: "layers", row: 0, col: 1 } },
    { id: "n_qa_3", type: "topic", parentId: "s_qa_tf", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Test Cases & Plans", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "blue", icon: "file-text", row: 1, col: 0 } },

    { id: "s_qa_manual", type: "section", position: { x: 576, y: 0 }, data: { title: "Manual Testing", sectionNumber: 2, color: "purple", sectionIcon: "mouse-pointer" } },
    { id: "n_qa_4", type: "topic", parentId: "s_qa_manual", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Exploratory Testing", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "purple", icon: "search", row: 0, col: 0 } },
    { id: "n_qa_5", type: "topic", parentId: "s_qa_manual", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Bug Reporting & Jira", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", icon: "SiJira", row: 0, col: 1 } },
    { id: "n_qa_6", type: "topic", parentId: "s_qa_manual", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Agile & Scrum for QA", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", icon: "refresh-cw", row: 1, col: 0 } },

    { id: "s_qa_auto", type: "section", position: { x: 1152, y: 0 }, data: { title: "Automation Basics", sectionNumber: 3, color: "green", sectionIcon: "code" } },
    { id: "n_qa_7", type: "topic", parentId: "s_qa_auto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Programming for QA (Java/Python/JS)", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "green", icon: "SiJavascript", row: 0, col: 0 } },
    { id: "n_qa_8", type: "topic", parentId: "s_qa_auto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Selenium WebDriver", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "green", icon: "SiSelenium", row: 0, col: 1 } },
    { id: "n_qa_9", type: "topic", parentId: "s_qa_auto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Cypress & Playwright", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "green", icon: "SiCypress", row: 1, col: 0 } },

    { id: "s_qa_api", type: "section", position: { x: 0, y: 600 }, data: { title: "API Testing", sectionNumber: 4, color: "orange", sectionIcon: "api" } },
    { id: "n_qa_10", type: "topic", parentId: "s_qa_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Postman Basics", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "orange", icon: "SiPostman", row: 0, col: 0 } },
    { id: "n_qa_11", type: "topic", parentId: "s_qa_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "REST Assured", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiJava", row: 0, col: 1 } },
    { id: "n_qa_12", type: "topic", parentId: "s_qa_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "GraphQL Testing", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", icon: "SiGraphql", row: 1, col: 0 } },

    { id: "s_qa_adv", type: "section", position: { x: 576, y: 600 }, data: { title: "Advanced QA", sectionNumber: 5, color: "red", sectionIcon: "award" } },
    { id: "n_qa_13", type: "topic", parentId: "s_qa_adv", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CI/CD Integration", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", icon: "SiGit", row: 0, col: 0 } },
    { id: "n_qa_14", type: "topic", parentId: "s_qa_adv", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Performance Testing (JMeter)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", icon: "SiApachjmeter", row: 0, col: 1 } },
    { id: "n_qa_15", type: "topic", parentId: "s_qa_adv", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Mobile Testing (Appium)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", icon: "SiAppium", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_qa_1", target: "n_qa_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_qa_2", target: "n_qa_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_qa_3", target: "n_qa_4", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_qa_4", target: "n_qa_5", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_qa_4", target: "n_qa_6", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_qa_5", target: "n_qa_7", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_qa_7", target: "n_qa_8", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_qa_7", target: "n_qa_9", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_qa_9", target: "n_qa_10", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_qa_10", target: "n_qa_11", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_qa_10", target: "n_qa_12", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_qa_12", target: "n_qa_13", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_qa_13", target: "n_qa_14", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_qa_13", target: "n_qa_15", sourceHandle: "bottom", targetHandle: "top" },
];
