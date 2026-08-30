import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "prereq", type: "section", position: { x: 0, y: 0 }, data: { title: "Python & Math Prerequisites", sectionNumber: 1, color: "blue", sectionIcon: "book-open" } },
    { id: "n_pre_1", type: "topic", parentId: "prereq", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Python for Data Science", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "blue", icon: "SiPython", row: 0, col: 0 } },
    { id: "n_pre_2", type: "topic", parentId: "prereq", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Linear Algebra & Calculus", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "blue", icon: "SiNumpy", row: 0, col: 1 } },
    { id: "n_pre_3", type: "topic", parentId: "prereq", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Probability & Statistics", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "blue", icon: "bar-chart", row: 1, col: 0 } },

    { id: "ml", type: "section", position: { x: 700, y: 0 }, data: { title: "Machine Learning Basics", sectionNumber: 2, color: "purple", sectionIcon: "brain" } },
    { id: "n_ml_1", type: "topic", parentId: "ml", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Supervised Learning", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "purple", icon: "trending-up", row: 0, col: 0 } },
    { id: "n_ml_2", type: "topic", parentId: "ml", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Unsupervised Learning", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", icon: "grid", row: 0, col: 1 } },
    { id: "n_ml_3", type: "topic", parentId: "ml", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Model Evaluation Metrics", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "purple", icon: "check-circle", row: 1, col: 0 } },

    { id: "dl", type: "section", position: { x: 1400, y: 0 }, data: { title: "Deep Learning Fundamentals", sectionNumber: 3, color: "green", sectionIcon: "cpu" } },
    { id: "n_dl_1", type: "topic", parentId: "dl", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Neural Networks (PyTorch/TF)", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "green", icon: "SiPytorch", row: 0, col: 0 } },
    { id: "n_dl_2", type: "topic", parentId: "dl", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Backpropagation", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", icon: "refresh-cw", row: 0, col: 1 } },
    { id: "n_dl_3", type: "topic", parentId: "dl", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CNNs & Vision Basics", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "green", icon: "SiOpencv", row: 1, col: 0 } },

    { id: "nlp", type: "section", position: { x: 1400, y: 600 }, data: { title: "Natural Language Processing", sectionNumber: 4, color: "yellow", sectionIcon: "message-square" } },
    { id: "n_nlp_1", type: "topic", parentId: "nlp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Embeddings & Word2Vec", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "yellow", icon: "layers", row: 0, col: 0 } },
    { id: "n_nlp_2", type: "topic", parentId: "nlp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Transformers Architecture", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "yellow", icon: "SiPytorch", row: 0, col: 1 } },
    { id: "n_nlp_3", type: "topic", parentId: "nlp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Hugging Face Datasets & Models", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "SiHuggingface", row: 1, col: 0 } },

    { id: "llms", type: "section", position: { x: 700, y: 600 }, data: { title: "Large Language Models (LLMs)", sectionNumber: 5, color: "red", sectionIcon: "brain" } },
    { id: "n_llm_1", type: "topic", parentId: "llms", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Prompt Engineering", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", icon: "message-square", row: 0, col: 0 } },
    { id: "n_llm_2", type: "topic", parentId: "llms", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Fine-Tuning (LoRA/QLoRA)", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", icon: "SiHuggingface", row: 0, col: 1 } },
    { id: "n_llm_3", type: "topic", parentId: "llms", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Open Source vs Closed LLMs", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "red", icon: "SiOpenai", row: 1, col: 0 } },

    { id: "rag", type: "section", position: { x: 0, y: 600 }, data: { title: "RAG & Vector Databases", sectionNumber: 6, color: "orange", sectionIcon: "database" } },
    { id: "n_rag_1", type: "topic", parentId: "rag", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Vector Databases (Pinecone/Weaviate)", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "orange", icon: "SiPinecone", row: 0, col: 0 } },
    { id: "n_rag_2", type: "topic", parentId: "rag", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Retrieval Augmented Generation", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "search", row: 0, col: 1 } },
    { id: "n_rag_3", type: "topic", parentId: "rag", extent: "parent", position: { x: 0, y: 0 }, data: { title: "LangChain & LlamaIndex", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "orange", icon: "SiLangchain", row: 1, col: 0 } },

    { id: "mlops", type: "section", position: { x: 0, y: 1200 }, data: { title: "MLOps & Deployment", sectionNumber: 7, color: "blue", sectionIcon: "rocket" } },
    { id: "n_ops_1", type: "topic", parentId: "mlops", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Model Tracking (MLflow/W&B)", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "blue", icon: "SiMlflow", row: 0, col: 0 } },
    { id: "n_ops_2", type: "topic", parentId: "mlops", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Model Serving (vLLM/TGI)", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", icon: "server", row: 0, col: 1 } },
    { id: "n_ops_3", type: "topic", parentId: "mlops", extent: "parent", position: { x: 0, y: 0 }, data: { title: "AI Ethics & Safety", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "blue", icon: "shield", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_pre_1", target: "n_pre_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_pre_2", target: "n_pre_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_pre_3", target: "n_ml_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_ml_1", target: "n_ml_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_ml_2", target: "n_ml_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_2", source: "n_ml_3", target: "n_dl_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_dl_1", target: "n_dl_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_dl_2", target: "n_dl_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_3", source: "n_dl_3", target: "n_nlp_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_nlp_1", target: "n_nlp_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_nlp_2", target: "n_nlp_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_4", source: "n_nlp_3", target: "n_llm_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_llm_1", target: "n_llm_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_llm_2", target: "n_llm_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_5", source: "n_llm_3", target: "n_rag_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_rag_1", target: "n_rag_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_rag_2", target: "n_rag_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_6", source: "n_rag_3", target: "n_ops_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e13", source: "n_ops_1", target: "n_ops_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e14", source: "n_ops_2", target: "n_ops_3", sourceHandle: "right", targetHandle: "left" },
];
