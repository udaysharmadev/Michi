import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_llm_found", type: "section", position: { x: 0, y: 0 }, data: { title: "Foundations", sectionNumber: 1, color: "blue", sectionIcon: "book-open" } },
    { id: "n_llm_1", type: "topic", parentId: "s_llm_found", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Transformers Architecture", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiPytorch", row: 0, col: 0 } },
    { id: "n_llm_2", type: "topic", parentId: "s_llm_found", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Attention Mechanism", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "blue", icon: "brain", row: 0, col: 1 } },
    { id: "n_llm_3", type: "topic", parentId: "s_llm_found", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Tokenization", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", icon: "hash", row: 1, col: 0 } },

    { id: "s_llm_prompt", type: "section", position: { x: 576, y: 0 }, data: { title: "Prompt Engineering", sectionNumber: 2, color: "purple", sectionIcon: "message-square" } },
    { id: "n_llm_4", type: "topic", parentId: "s_llm_prompt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Few-Shot Prompting", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", icon: "list", row: 0, col: 0 } },
    { id: "n_llm_5", type: "topic", parentId: "s_llm_prompt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Chain of Thought (CoT)", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", icon: "git-branch", row: 0, col: 1 } },
    { id: "n_llm_6", type: "topic", parentId: "s_llm_prompt", extent: "parent", position: { x: 0, y: 0 }, data: { title: "ReAct Prompting", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "purple", icon: "zap", row: 1, col: 0 } },

    { id: "s_llm_ft", type: "section", position: { x: 1152, y: 0 }, data: { title: "Fine-Tuning", sectionNumber: 3, color: "green", sectionIcon: "tool" } },
    { id: "n_llm_7", type: "topic", parentId: "s_llm_ft", extent: "parent", position: { x: 0, y: 0 }, data: { title: "PEFT & LoRA", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiHuggingface", row: 0, col: 0 } },
    { id: "n_llm_8", type: "topic", parentId: "s_llm_ft", extent: "parent", position: { x: 0, y: 0 }, data: { title: "RLHF", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "green", icon: "refresh-cw", row: 0, col: 1 } },
    { id: "n_llm_9", type: "topic", parentId: "s_llm_ft", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Direct Preference Optimization (DPO)", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", icon: "target", row: 1, col: 0 } },

    { id: "s_llm_rag", type: "section", position: { x: 0, y: 600 }, data: { title: "Retrieval Augmented Gen (RAG)", sectionNumber: 4, color: "orange", sectionIcon: "database" } },
    { id: "n_llm_10", type: "topic", parentId: "s_llm_rag", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Vector Databases", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", icon: "SiPinecone", row: 0, col: 0 } },
    { id: "n_llm_11", type: "topic", parentId: "s_llm_rag", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Embeddings", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "orange", icon: "layers", row: 0, col: 1 } },
    { id: "n_llm_12", type: "topic", parentId: "s_llm_rag", extent: "parent", position: { x: 0, y: 0 }, data: { title: "LangChain & LlamaIndex", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiLangchain", row: 1, col: 0 } },

    { id: "s_llm_dep", type: "section", position: { x: 576, y: 600 }, data: { title: "Deployment & Optimization", sectionNumber: 5, color: "red", sectionIcon: "rocket" } },
    { id: "n_llm_13", type: "topic", parentId: "s_llm_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "vLLM", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", icon: "server", row: 0, col: 0 } },
    { id: "n_llm_14", type: "topic", parentId: "s_llm_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Quantization (AWQ/GPTQ)", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "red", icon: "cpu", row: 0, col: 1 } },
    { id: "n_llm_15", type: "topic", parentId: "s_llm_dep", extent: "parent", position: { x: 0, y: 0 }, data: { title: "GGUF & llama.cpp", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "red", icon: "SiCplusplus", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_llm_1", target: "n_llm_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_llm_1", target: "n_llm_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_1", source: "n_llm_3", target: "n_llm_4", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_llm_4", target: "n_llm_5", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_llm_4", target: "n_llm_6", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_llm_6", target: "n_llm_7", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_llm_7", target: "n_llm_8", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_llm_7", target: "n_llm_9", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_llm_9", target: "n_llm_10", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_llm_10", target: "n_llm_11", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_llm_10", target: "n_llm_12", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_llm_12", target: "n_llm_13", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_llm_13", target: "n_llm_14", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_llm_13", target: "n_llm_15", sourceHandle: "bottom", targetHandle: "top" },
];
