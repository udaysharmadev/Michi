import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "llm",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "llm"
    }
  },
  {
    "id": "foundations",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Foundations",
      "color": "blue"
    }
  },
  {
    "id": "transformers",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "Transformers Architecture",
      "color": "blue"
    }
  },
  {
    "id": "attention_mechanism",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "Attention Mechanism",
      "color": "blue"
    }
  },
  {
    "id": "tokenization",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Tokenization",
      "color": "blue"
    }
  },
  {
    "id": "prompting",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Prompt Engineering",
      "color": "purple"
    }
  },
  {
    "id": "few_shot",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Few-Shot Prompting",
      "color": "purple"
    }
  },
  {
    "id": "chain_of_thought",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Chain of Thought (CoT)",
      "color": "purple"
    }
  },
  {
    "id": "react_prompting",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "ReAct Prompting",
      "color": "purple"
    }
  },
  {
    "id": "fine_tuning",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Fine-Tuning",
      "color": "green"
    }
  },
  {
    "id": "peft_lora",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "PEFT & LoRA",
      "color": "green"
    }
  },
  {
    "id": "rlhf",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "RLHF",
      "color": "green"
    }
  },
  {
    "id": "dpo",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Direct Preference Optimization (DPO)",
      "color": "green"
    }
  },
  {
    "id": "rag",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Retrieval Augmented Gen (RAG)",
      "color": "orange"
    }
  },
  {
    "id": "vector_dbs",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Vector Databases",
      "color": "orange"
    }
  },
  {
    "id": "embeddings",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Embeddings",
      "color": "orange"
    }
  },
  {
    "id": "langchain_llamaindex",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "LangChain & LlamaIndex",
      "color": "orange"
    }
  },
  {
    "id": "deployment",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Deployment & Optimization",
      "color": "red"
    }
  },
  {
    "id": "vllm",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "vLLM",
      "color": "red"
    }
  },
  {
    "id": "quantization",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Quantization (AWQ/GPTQ)",
      "color": "red"
    }
  },
  {
    "id": "gguf_llama_cpp",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "GGUF & llama.cpp",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-llm-foundations",
    "source": "llm",
    "target": "foundations",
    "animated": true
  },
  {
    "id": "e-foundations-transformers",
    "source": "foundations",
    "target": "transformers"
  },
  {
    "id": "e-foundations-attention_mechanism",
    "source": "foundations",
    "target": "attention_mechanism"
  },
  {
    "id": "e-foundations-tokenization",
    "source": "foundations",
    "target": "tokenization"
  },
  {
    "id": "e-foundations-prompting",
    "source": "foundations",
    "target": "prompting",
    "animated": true
  },
  {
    "id": "e-prompting-few_shot",
    "source": "prompting",
    "target": "few_shot"
  },
  {
    "id": "e-prompting-chain_of_thought",
    "source": "prompting",
    "target": "chain_of_thought"
  },
  {
    "id": "e-prompting-react_prompting",
    "source": "prompting",
    "target": "react_prompting"
  },
  {
    "id": "e-prompting-fine_tuning",
    "source": "prompting",
    "target": "fine_tuning",
    "animated": true
  },
  {
    "id": "e-fine_tuning-peft_lora",
    "source": "fine_tuning",
    "target": "peft_lora"
  },
  {
    "id": "e-fine_tuning-rlhf",
    "source": "fine_tuning",
    "target": "rlhf"
  },
  {
    "id": "e-fine_tuning-dpo",
    "source": "fine_tuning",
    "target": "dpo"
  },
  {
    "id": "e-fine_tuning-rag",
    "source": "fine_tuning",
    "target": "rag",
    "animated": true
  },
  {
    "id": "e-rag-vector_dbs",
    "source": "rag",
    "target": "vector_dbs"
  },
  {
    "id": "e-rag-embeddings",
    "source": "rag",
    "target": "embeddings"
  },
  {
    "id": "e-rag-langchain_llamaindex",
    "source": "rag",
    "target": "langchain_llamaindex"
  },
  {
    "id": "e-rag-deployment",
    "source": "rag",
    "target": "deployment",
    "animated": true
  },
  {
    "id": "e-deployment-vllm",
    "source": "deployment",
    "target": "vllm"
  },
  {
    "id": "e-deployment-quantization",
    "source": "deployment",
    "target": "quantization"
  },
  {
    "id": "e-deployment-gguf_llama_cpp",
    "source": "deployment",
    "target": "gguf_llama_cpp"
  }
];
