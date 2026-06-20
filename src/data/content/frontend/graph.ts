import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_internet", type: "section", position: { x: 0, y: 0 }, data: { title: "Internet Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_int_1", type: "topic", parentId: "s_internet", extent: "parent", position: { x: 0, y: 0 }, data: { title: "How does the internet work?", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_int_2", type: "topic", parentId: "s_internet", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DNS and Domain Names", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_int_3", type: "topic", parentId: "s_internet", extent: "parent", position: { x: 0, y: 0 }, data: { title: "HTTP / HTTPS Protocols", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", row: 1, col: 0 } },
    { id: "n_int_4", type: "topic", parentId: "s_internet", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Web Servers & Hosting", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 1, col: 1 } },

    // --- 2. HTML & CSS (Purple) ---
    { id: "s_htmlcss", type: "section", position: { x: 576, y: 0 }, data: { title: "HTML & CSS", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_hc_1", type: "topic", parentId: "s_htmlcss", extent: "parent", position: { x: 0, y: 0 }, data: { title: "HTML Fundamentals", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "purple", icon: "SiHtml5", row: 0, col: 0 } },
    { id: "n_hc_2", type: "topic", parentId: "s_htmlcss", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Semantic HTML", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", row: 0, col: 1 } },
    { id: "n_hc_3", type: "topic", parentId: "s_htmlcss", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CSS Fundamentals", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "purple", icon: "SiCss", row: 1, col: 0 } },
    { id: "n_hc_4", type: "topic", parentId: "s_htmlcss", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Flexbox Layout", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 1, col: 1 } },
    { id: "n_hc_5", type: "topic", parentId: "s_htmlcss", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Responsive Design", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 2, col: 0 } },
    { id: "n_hc_6", type: "topic", parentId: "s_htmlcss", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CSS Grid Layout", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 2, col: 1 } },

    // --- 3. JavaScript Basics (Green) ---
    { id: "s_js", type: "section", position: { x: 1152, y: 0 }, data: { title: "JavaScript Basics", sectionNumber: 3, color: "green", sectionIcon: "js" } },
    { id: "n_js_1", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "JavaScript Syntax", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "SiJavascript", row: 0, col: 0 } },
    { id: "n_js_2", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Variables & Data Types", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_js_3", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Functions & Scope", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "green", row: 0, col: 2 } },
    { id: "n_js_4", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DOM Manipulation", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "green", row: 1, col: 0 } },
    { id: "n_js_5", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Events & Listeners", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", row: 1, col: 1 } },
    { id: "n_js_6", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "ES6+ Features", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "green", row: 1, col: 2 } },
    { id: "n_js_7", type: "topic", parentId: "s_js", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Asynchronous JavaScript", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "green", row: 2, col: 1 } },

    // --- 4. Version Control (Yellow) ---
    { id: "s_vc", type: "section", position: { x: 1980, y: 0 }, data: { title: "Version Control", sectionNumber: 4, color: "yellow", sectionIcon: "git" } },
    { id: "n_vc_1", type: "topic", parentId: "s_vc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Git Fundamentals", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "SiGit", row: 0, col: 0 } },
    { id: "n_vc_2", type: "topic", parentId: "s_vc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "GitHub Essentials", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "yellow", icon: "SiGithub", row: 1, col: 0 } },
    { id: "n_vc_3", type: "topic", parentId: "s_vc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Branching & Merging", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "yellow", row: 2, col: 0 } },
    { id: "n_vc_4", type: "topic", parentId: "s_vc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Pull Requests", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "yellow", row: 3, col: 0 } },

    // --- 5. Modern JavaScript (Red) ---
    { id: "s_mjs", type: "section", position: { x: 0, y: 600 }, data: { title: "Modern JavaScript (Deep Dive)", sectionNumber: 5, color: "red", sectionIcon: "js" } },
    { id: "n_mjs_1", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "TypeScript Basics", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "red", icon: "SiTypescript", row: 0, col: 0 } },
    { id: "n_mjs_2", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Advanced JavaScript", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "red", row: 0, col: 1 } },
    { id: "n_mjs_3", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Closures & Scope", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", row: 0, col: 2 } },
    { id: "n_mjs_4", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Prototype & Inheritance", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", row: 1, col: 0 } },
    { id: "n_mjs_5", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Modules & Bundlers", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", row: 1, col: 1 } },
    { id: "n_mjs_6", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Error Handling", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "red", row: 1, col: 2 } },
    { id: "n_mjs_7", type: "topic", parentId: "s_mjs", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Performance Optimization", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", row: 2, col: 1 } },

    // --- 6. Frontend Frameworks (Blue) ---
    { id: "s_fw", type: "section", position: { x: 828, y: 600 }, data: { title: "Frontend Frameworks", sectionNumber: 6, color: "blue", sectionIcon: "react" } },
    { id: "n_fw_1", type: "topic", parentId: "s_fw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "React Library", difficulty: "Intermediate", estimatedTime: "20 hrs", sectionColor: "blue", icon: "SiReact", row: 0, col: 0 } },
    { id: "n_fw_2", type: "topic", parentId: "s_fw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Vue.js Framework", difficulty: "Intermediate", estimatedTime: "16 hrs", sectionColor: "blue", icon: "SiVuedotjs", row: 0, col: 1 } },
    { id: "n_fw_3", type: "topic", parentId: "s_fw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Angular Framework", difficulty: "Intermediate", estimatedTime: "16 hrs", sectionColor: "blue", icon: "SiAngular", row: 1, col: 0 } },
    { id: "n_fw_4", type: "topic", parentId: "s_fw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Svelte Framework", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "blue", icon: "SiSvelte", row: 1, col: 1 } },
    { id: "n_fw_5", type: "topic", parentId: "s_fw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Next.js Framework", difficulty: "Advanced", estimatedTime: "20 hrs", sectionColor: "blue", icon: "SiNextdotjs", row: 2, col: 1 } }, 

    // --- 7. State Management (Purple) ---
    { id: "s_sm", type: "section", position: { x: 1404, y: 600 }, data: { title: "State Management", sectionNumber: 7, color: "purple", sectionIcon: "database" } },
    { id: "n_sm_1", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "React Query", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_sm_2", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Zustand", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", row: 1, col: 0 } },
    { id: "n_sm_3", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Redux Toolkit", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "purple", icon: "SiRedux", row: 2, col: 0 } },
    { id: "n_sm_4", type: "topic", parentId: "s_sm", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Context API", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 3, col: 0 } },

    // --- 8. Styling Solutions (Green) ---
    { id: "s_css", type: "section", position: { x: 1728, y: 600 }, data: { title: "Styling Solutions", sectionNumber: 8, color: "green", sectionIcon: "palette" } },
    { id: "n_css_1", type: "topic", parentId: "s_css", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Tailwind CSS", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "green", icon: "SiTailwindcss", row: 0, col: 0 } },
    { id: "n_css_2", type: "topic", parentId: "s_css", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CSS Modules", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_css_3", type: "topic", parentId: "s_css", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Styled Components", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", row: 1, col: 0 } },
    { id: "n_css_4", type: "topic", parentId: "s_css", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Sass / SCSS", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiSass", row: 1, col: 1 } },

    // --- 9. Build Tools (Yellow) ---
    { id: "s_bt", type: "section", position: { x: 0, y: 1200 }, data: { title: "Build Tools", sectionNumber: 9, color: "yellow", sectionIcon: "tool" } },
    { id: "n_bt_1", type: "topic", parentId: "s_bt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Vite", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "SiVite", row: 0, col: 0 } },
    { id: "n_bt_2", type: "topic", parentId: "s_bt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Webpack", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "yellow", icon: "SiWebpack", row: 0, col: 1 } },
    { id: "n_bt_3", type: "topic", parentId: "s_bt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "ESLint", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "yellow", icon: "SiEslint", row: 1, col: 0 } },
    { id: "n_bt_4", type: "topic", parentId: "s_bt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Prettier", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "yellow", icon: "SiPrettier", row: 1, col: 1 } },

    // --- 10. Testing (Green) ---
    { id: "s_test", type: "section", position: { x: 576, y: 1200 }, data: { title: "Testing", sectionNumber: 10, color: "green", sectionIcon: "check" } },
    { id: "n_test_1", type: "topic", parentId: "s_test", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Unit Testing (Jest)", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "green", icon: "SiJest", row: 0, col: 0 } },
    { id: "n_test_2", type: "topic", parentId: "s_test", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Component Testing", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "green", row: 0, col: 1 } },
    { id: "n_test_3", type: "topic", parentId: "s_test", extent: "parent", position: { x: 0, y: 0 }, data: { title: "E2E Testing", difficulty: "Advanced", estimatedTime: "12 hrs", sectionColor: "green", icon: "SiCypress", row: 1, col: 0 } },

    // --- 11. APIs (Orange) ---
    { id: "s_api", type: "section", position: { x: 1152, y: 1200 }, data: { title: "APIs & Data Fetching", sectionNumber: 11, color: "orange", sectionIcon: "api" } },
    { id: "n_api_1", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "REST APIs", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "orange", row: 0, col: 0 } },
    { id: "n_api_2", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Fetch API / Axios", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", row: 0, col: 1 } },
    { id: "n_api_3", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "GraphQL", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "orange", icon: "SiGraphql", row: 1, col: 0 } },
    { id: "n_api_4", type: "topic", parentId: "s_api", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Authentication", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", row: 1, col: 1 } },

    // --- 12. Deployment (Red) ---
    { id: "s_deploy", type: "section", position: { x: 1728, y: 1200 }, data: { title: "Deployment", sectionNumber: 12, color: "red", sectionIcon: "rocket" } },
    { id: "n_dep_1", type: "topic", parentId: "s_deploy", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Static Site Deployment", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", row: 0, col: 0 } },
    { id: "n_dep_2", type: "topic", parentId: "s_deploy", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CI / CD", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", row: 0, col: 1 } },
    { id: "n_dep_3", type: "topic", parentId: "s_deploy", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Environment Variables", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "red", row: 1, col: 0 } },
    { id: "n_dep_4", type: "topic", parentId: "s_deploy", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Performance Optimization", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "red", row: 1, col: 1 } },
  ];

export const graphEdges: RoadmapContentEdge[] = [
    // Connected linearly within sections
    { id: "e1", source: "n_int_1", target: "n_int_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_int_1", target: "n_int_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e3", source: "n_int_2", target: "n_int_4", sourceHandle: "bottom", targetHandle: "top" },
    
    { id: "e_sec_1", source: "n_int_2", target: "n_hc_1", sourceHandle: "right", targetHandle: "left" }, 

    { id: "e4", source: "n_hc_1", target: "n_hc_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e5", source: "n_hc_1", target: "n_hc_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e6", source: "n_hc_3", target: "n_hc_4", sourceHandle: "right", targetHandle: "left" },
    { id: "e7", source: "n_hc_3", target: "n_hc_5", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_hc_6", source: "n_hc_5", target: "n_hc_6", sourceHandle: "right", targetHandle: "left" },

    { id: "e_sec_2", source: "n_hc_2", target: "n_js_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e8", source: "n_js_1", target: "n_js_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e9", source: "n_js_2", target: "n_js_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_js_1", target: "n_js_4", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e11", source: "n_js_4", target: "n_js_5", sourceHandle: "right", targetHandle: "left" },
    { id: "e11b", source: "n_js_5", target: "n_js_6", sourceHandle: "right", targetHandle: "left" },
    { id: "e11c", source: "n_js_5", target: "n_js_7", sourceHandle: "bottom", targetHandle: "top" },

    { id: "e_sec_3", source: "n_js_3", target: "n_vc_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e20", source: "n_sm_1", target: "n_sm_2", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e21", source: "n_sm_2", target: "n_sm_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e21b", source: "n_sm_3", target: "n_sm_4", sourceHandle: "bottom", targetHandle: "top" },

    { id: "e_sec_7", source: "n_sm_1", target: "n_css_1", sourceHandle: "right", targetHandle: "left" },
    
    { id: "e22", source: "n_css_1", target: "n_css_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e23", source: "n_css_1", target: "n_css_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e24", source: "n_css_3", target: "n_css_4", sourceHandle: "right", targetHandle: "left" },
    
    { id: "e_sec_8", source: "n_mjs_4", target: "n_bt_1", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e25", source: "n_bt_1", target: "n_bt_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e26", source: "n_bt_2", target: "n_bt_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e27", source: "n_bt_3", target: "n_bt_4", sourceHandle: "right", targetHandle: "left" },

    { id: "e_sec_9", source: "n_bt_4", target: "n_test_1", sourceHandle: "right", targetHandle: "left" },
    { id: "e28", source: "n_test_1", target: "n_test_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e28b", source: "n_test_2", target: "n_test_3", sourceHandle: "right", targetHandle: "left" },
    
    { id: "e_sec_10", source: "n_test_3", target: "n_api_1", sourceHandle: "right", targetHandle: "left" },
    { id: "e29", source: "n_api_1", target: "n_api_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e30", source: "n_api_2", target: "n_api_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e30b", source: "n_api_2", target: "n_api_4", sourceHandle: "bottom", targetHandle: "top" },
    
    { id: "e_sec_11", source: "n_api_3", target: "n_dep_1", sourceHandle: "right", targetHandle: "left" },
    { id: "e31", source: "n_dep_1", target: "n_dep_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e31b", source: "n_dep_2", target: "n_dep_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e31c", source: "n_dep_2", target: "n_dep_4", sourceHandle: "bottom", targetHandle: "top" },
  ];
