import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "prereq",
    "type": "section",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "1. Python & Math Prerequisites",
      "color": "blue",
      "sectionNumber": 1
    }
  },
  {
    "id": "n_pre_1",
    "type": "topic",
    "parentId": "prereq",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Python for Data Science",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_pre_2",
    "type": "topic",
    "parentId": "prereq",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Linear Algebra & Calculus",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_pre_3",
    "type": "topic",
    "parentId": "prereq",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Probability & Statistics",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "ml",
    "type": "section",
    "position": {
      "x": 700,
      "y": 0
    },
    "data": {
      "title": "2. Machine Learning Basics",
      "color": "purple",
      "sectionNumber": 2
    }
  },
  {
    "id": "n_ml_1",
    "type": "topic",
    "parentId": "ml",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Supervised Learning",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_ml_2",
    "type": "topic",
    "parentId": "ml",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Unsupervised Learning",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_ml_3",
    "type": "topic",
    "parentId": "ml",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Model Evaluation Metrics",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "dl",
    "type": "section",
    "position": {
      "x": 1400,
      "y": 0
    },
    "data": {
      "title": "3. Deep Learning Fundamentals",
      "color": "green",
      "sectionNumber": 3
    }
  },
  {
    "id": "n_dl_1",
    "type": "topic",
    "parentId": "dl",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Neural Networks (PyTorch/TF)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_dl_2",
    "type": "topic",
    "parentId": "dl",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Backpropagation",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_dl_3",
    "type": "topic",
    "parentId": "dl",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "CNNs & Vision Basics",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "nlp",
    "type": "section",
    "position": {
      "x": 1400,
      "y": 600
    },
    "data": {
      "title": "4. Natural Language Processing",
      "color": "yellow",
      "sectionNumber": 4
    }
  },
  {
    "id": "n_nlp_1",
    "type": "topic",
    "parentId": "nlp",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Embeddings & Word2Vec",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_nlp_2",
    "type": "topic",
    "parentId": "nlp",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Transformers Architecture",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_nlp_3",
    "type": "topic",
    "parentId": "nlp",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Hugging Face Datasets & Models",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "llms",
    "type": "section",
    "position": {
      "x": 700,
      "y": 600
    },
    "data": {
      "title": "5. Large Language Models (LLMs)",
      "color": "red",
      "sectionNumber": 5
    }
  },
  {
    "id": "n_llm_1",
    "type": "topic",
    "parentId": "llms",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Prompt Engineering",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_llm_2",
    "type": "topic",
    "parentId": "llms",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Fine-Tuning (LoRA/QLoRA)",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_llm_3",
    "type": "topic",
    "parentId": "llms",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Open Source vs Closed LLMs",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "rag",
    "type": "section",
    "position": {
      "x": 0,
      "y": 600
    },
    "data": {
      "title": "6. RAG & Vector Databases",
      "color": "orange",
      "sectionNumber": 6
    }
  },
  {
    "id": "n_rag_1",
    "type": "topic",
    "parentId": "rag",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Vector Databases (Pinecone/Weaviate)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_rag_2",
    "type": "topic",
    "parentId": "rag",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Retrieval Augmented Generation",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_rag_3",
    "type": "topic",
    "parentId": "rag",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "LangChain & LlamaIndex",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "mlops",
    "type": "section",
    "position": {
      "x": 0,
      "y": 1200
    },
    "data": {
      "title": "7. MLOps & Deployment",
      "color": "blue",
      "sectionNumber": 7
    }
  },
  {
    "id": "n_ops_1",
    "type": "topic",
    "parentId": "mlops",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Model Tracking (MLflow/W&B)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_ops_2",
    "type": "topic",
    "parentId": "mlops",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Model Serving (vLLM/TGI)",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_ops_3",
    "type": "topic",
    "parentId": "mlops",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "AI Ethics & Safety",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 1,
      "col": 0
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_pre_1-n_pre_2",
    "source": "n_pre_1",
    "target": "n_pre_2"
  },
  {
    "id": "e_n_pre_2-n_pre_3",
    "source": "n_pre_2",
    "target": "n_pre_3"
  },
  {
    "id": "e_n_ml_1-n_ml_2",
    "source": "n_ml_1",
    "target": "n_ml_2"
  },
  {
    "id": "e_n_ml_2-n_ml_3",
    "source": "n_ml_2",
    "target": "n_ml_3"
  },
  {
    "id": "e_n_pre_3-n_ml_1",
    "source": "n_pre_3",
    "target": "n_ml_1"
  },
  {
    "id": "e_n_dl_1-n_dl_2",
    "source": "n_dl_1",
    "target": "n_dl_2"
  },
  {
    "id": "e_n_dl_2-n_dl_3",
    "source": "n_dl_2",
    "target": "n_dl_3"
  },
  {
    "id": "e_n_ml_3-n_dl_1",
    "source": "n_ml_3",
    "target": "n_dl_1"
  },
  {
    "id": "e_n_nlp_1-n_nlp_2",
    "source": "n_nlp_1",
    "target": "n_nlp_2"
  },
  {
    "id": "e_n_nlp_2-n_nlp_3",
    "source": "n_nlp_2",
    "target": "n_nlp_3"
  },
  {
    "id": "e_n_dl_3-n_nlp_1",
    "source": "n_dl_3",
    "target": "n_nlp_1"
  },
  {
    "id": "e_n_llm_1-n_llm_2",
    "source": "n_llm_1",
    "target": "n_llm_2"
  },
  {
    "id": "e_n_llm_2-n_llm_3",
    "source": "n_llm_2",
    "target": "n_llm_3"
  },
  {
    "id": "e_n_nlp_3-n_llm_1",
    "source": "n_nlp_3",
    "target": "n_llm_1"
  },
  {
    "id": "e_n_rag_1-n_rag_2",
    "source": "n_rag_1",
    "target": "n_rag_2"
  },
  {
    "id": "e_n_rag_2-n_rag_3",
    "source": "n_rag_2",
    "target": "n_rag_3"
  },
  {
    "id": "e_n_llm_3-n_rag_1",
    "source": "n_llm_3",
    "target": "n_rag_1"
  },
  {
    "id": "e_n_ops_1-n_ops_2",
    "source": "n_ops_1",
    "target": "n_ops_2"
  },
  {
    "id": "e_n_ops_2-n_ops_3",
    "source": "n_ops_2",
    "target": "n_ops_3"
  },
  {
    "id": "e_n_rag_3-n_ops_1",
    "source": "n_rag_3",
    "target": "n_ops_1"
  }
] as RoadmapContentEdge[];
