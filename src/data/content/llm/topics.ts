import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "transformers": {
    whyLearnThis: "The Transformer architecture (2017) is the foundation of the modern AI boom. It replaced Recurrent Neural Networks (RNNs) by allowing parallel processing of data, enabling models to scale to billions of parameters and understand deep context.",
    whenIsItUsed: "It is the underlying architecture of every modern Large Language Model (GPT, Llama, Claude).",
    whereIsItUsed: "Hugging Face, OpenAI, Anthropic, Meta Llama.",
    whatComesNext: "Attention Mechanism",
    learningOutcomes: [
      "Explain the fundamental difference between sequential processing (RNNs) and parallel processing (Transformers).",
      "Understand the Encoder-Decoder architecture (original paper).",
      "Differentiate between Encoder-only (BERT) and Decoder-only (GPT) architectures.",
      "Explain the role of Positional Encoding.",
      "Understand why Transformers scale so efficiently across GPUs."
    ],
    commonMistakes: [
      "Assuming a Decoder-only model like GPT can 'read ahead'—it is strictly autoregressive (predicts next token based only on past tokens).",
      "Ignoring the $O(N^2)$ memory bottleneck of transformers, which is why context windows were historically small.",
      "Thinking transformers are only for text (Vision Transformers and Audio Transformers now dominate as well)."
    ],
    realWorldApplications: [
      "GPT-4 using a massive Decoder-only transformer to generate text.",
      "Google Search using BERT (Encoder-only) to understand the bidirectional context of a search query.",
      "Tesla using Vision Transformers (ViT) for self-driving car perception."
    ],
    resources: [
      { type: "official", title: "Attention Is All You Need Paper", url: "https://arxiv.org/abs/1706.03762" },
      { type: "video_en", title: "Transformers Explained (Andrej Karpathy)", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { type: "video_hi", title: "Transformers Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=Sq1nZ0dnY0k" },
      { type: "article", title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
      { type: "github", title: "The Annotated Transformer", url: "https://github.com/harvardnlp/annotated-transformer" },
      { type: "cheat_sheet", title: "Transformer Architecture Diagram", url: "https://arxiv.org/abs/1810.04805" },
      { type: "deep_dive", title: "Stanford CS224N: Transformers", url: "https://web.stanford.edu/class/cs224n/" }
    ]
  },
  "attention_mechanism": {
    whyLearnThis: "Self-attention is the magic that allows an LLM to understand context. It allows the word 'bank' to mean a financial institution in one sentence and the side of a river in another, by looking at all other words in the sentence simultaneously.",
    whenIsItUsed: "It runs under the hood during every single LLM inference step.",
    whereIsItUsed: "Inside the Transformer blocks of neural networks.",
    whatComesNext: "Tokenization",
    learningOutcomes: [
      "Explain the concept of Queries, Keys, and Values (QKV).",
      "Understand how the dot product of a Query and a Key determines the 'attention score'.",
      "Explain Multi-Head Attention and why multiple heads learn different relationships.",
      "Understand causal masking (why a model can't look at future words during generation).",
      "Explain the quadratic scaling problem of standard attention."
    ],
    commonMistakes: [
      "Confusing cross-attention (focusing on the input prompt) with self-attention (focusing on the sequence being generated).",
      "Not understanding that attention scores are normalized using the Softmax function.",
      "Forgetting that attention has no notion of sequence order (hence the need for positional encoding)."
    ],
    realWorldApplications: [
      "When parsing 'The animal didn't cross the street because it was too tired', attention strongly links 'it' to 'animal' rather than 'street'.",
      "Multi-head attention dedicating one 'head' to grammar, one to sentiment, and one to subject-verb agreement.",
      "FlashAttention optimizing memory access to make attention calculate faster on modern GPUs."
    ],
    resources: [
      { type: "official", title: "Hugging Face Attention Overview", url: "https://huggingface.co/course/chapter1/4" },
      { type: "video_en", title: "Attention Mechanism (StatQuest)", url: "https://www.youtube.com/watch?v=eMlx5fFNoYc" },
      { type: "video_hi", title: "Self Attention Hindi", url: "https://www.youtube.com/watch?v=E1Gk1MFqSzc" },
      { type: "article", title: "Visualizing Attention", url: "https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/" },
      { type: "github", title: "FlashAttention Code", url: "https://github.com/Dao-AILab/flash-attention" },
      { type: "cheat_sheet", title: "QKV Matrix Cheat Sheet", url: "https://arxiv.org/abs/2307.09288" },
      { type: "deep_dive", title: "FlashAttention Paper", url: "https://arxiv.org/abs/2205.14135" }
    ]
  },
  "tokenization": {
    whyLearnThis: "LLMs do not see text; they see lists of integer IDs called tokens. Understanding tokenization explains why LLMs are bad at math, why they fail at spelling tasks (like 'how many Rs in Strawberry'), and why non-English languages cost more to process.",
    whenIsItUsed: "Preparing data for fine-tuning, calculating API costs, and debugging weird LLM behaviors.",
    whereIsItUsed: "Byte Pair Encoding (BPE), SentencePiece, Tiktoken.",
    whatComesNext: "Few-Shot Prompting",
    learningOutcomes: [
      "Explain why we don't tokenize by word (too many) or by character (too little context).",
      "Understand Byte Pair Encoding (BPE) and subword tokenization.",
      "Explain why common words (like 'apple') are 1 token, while rare words might be 3-4 tokens.",
      "Calculate LLM API costs based on token limits.",
      "Understand the implications of tokenization on languages other than English."
    ],
    commonMistakes: [
      "Assuming 1 token = 1 word (it's roughly 1 token = 0.75 words in English, much worse for Hindi/Japanese).",
      "Asking an LLM to 'spell a word backwards'—it struggles because it sees a token ID (e.g., [4532]), not individual letters.",
      "Using the wrong tokenizer for a model (e.g., using OpenAI's Tiktoken on a Llama-3 model)."
    ],
    realWorldApplications: [
      "Using OpenAI's Tiktoken library to count tokens in a massive PDF before sending it to the API to avoid a 'Context Length Exceeded' error.",
      "Training a custom SentencePiece tokenizer on a corpus of medical documents so complex drug names become single tokens.",
      "Understanding that asking an LLM to do arithmetic is hard because numbers like '384' and '385' might be tokenized entirely differently."
    ],
    resources: [
      { type: "official", title: "OpenAI Tokenizer Tool", url: "https://platform.openai.com/tokenizer" },
      { type: "video_en", title: "Let's build the GPT Tokenizer (Andrej Karpathy)", url: "https://www.youtube.com/watch?v=zduSFxRajkE" },
      { type: "video_hi", title: "Tokenization in NLP Hindi", url: "https://www.youtube.com/watch?v=zduSFxRajkE" },
      { type: "article", title: "Hugging Face Summary of Tokenizers", url: "https://huggingface.co/docs/transformers/tokenizer_summary" },
      { type: "github", title: "OpenAI Tiktoken Source", url: "https://github.com/openai/tiktoken" },
      { type: "cheat_sheet", title: "Tokenization Methods Overview", url: "https://nlp.seas.harvard.edu/2018/04/03/attention.html" },
      { type: "deep_dive", title: "SentencePiece Paper", url: "https://arxiv.org/abs/1808.06226" }
    ]
  },
  "few_shot": {
    whyLearnThis: "LLMs are trained to mimic patterns. By providing a 'Few Shots' (a few examples) of the exact input-output pattern you want, you can dramatically increase accuracy and enforce strict formatting without needing to fine-tune the model.",
    whenIsItUsed: "Formatting outputs (e.g., strict JSON), classifying text into specific categories, and translating tone.",
    whereIsItUsed: "API Prompts, LangChain templates, System Prompts.",
    whatComesNext: "Chain of Thought",
    learningOutcomes: [
      "Differentiate between Zero-Shot, One-Shot, and Few-Shot prompting.",
      "Construct a highly effective Few-Shot prompt template.",
      "Understand how Few-Shot prompting leverages the LLM's in-context learning capabilities.",
      "Identify when Few-Shot prompting is sufficient versus when fine-tuning is required.",
      "Use dynamic few-shot selection (using a vector database to pick the most relevant examples)."
    ],
    commonMistakes: [
      "Providing examples that are all heavily skewed (e.g., 5 positive examples and 1 negative), causing the model to bias toward positive.",
      "Using examples that don't match the actual edge-cases the model will encounter in production.",
      "Wasting context window space on 50 examples when 3 well-crafted examples would suffice."
    ],
    realWorldApplications: [
      "Providing 3 examples of extracting Names and Dates from an email, ensuring the LLM outputs a perfect JSON array instead of conversational text.",
      "Translating casual English into highly formal legal jargon by providing a few before/after examples.",
      "Using a semantic search tool to dynamically inject the 3 most relevant coding examples into a Copilot prompt."
    ],
    resources: [
      { type: "official", title: "OpenAI: Prompt Engineering Basics", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { type: "video_en", title: "ChatGPT Prompt Engineering for Developers (DeepLearning.AI)", url: "https://www.youtube.com/watch?v=H4YK_7MAckk" },
      { type: "video_hi", title: "Few Shot Prompting Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "PromptingGuide: Few-Shot", url: "https://www.promptingguide.ai/techniques/fewshot" },
      { type: "github", title: "LangChain FewShotPromptTemplate", url: "https://python.langchain.com/docs/modules/model_io/prompts/few_shot_examples" },
      { type: "cheat_sheet", title: "Prompt Patterns Cheat Sheet", url: "https://github.com/dair-ai/Prompt-Engineering-Guide" },
      { type: "deep_dive", title: "Language Models are Few-Shot Learners (GPT-3 Paper)", url: "https://arxiv.org/abs/2005.14165" }
    ]
  },
  "chain_of_thought": {
    whyLearnThis: "An LLM generates text one token at a time. If you ask it a complex math problem, it tries to guess the answer instantly. Chain of Thought (CoT) forces the model to generate the intermediate reasoning steps first, drastically improving logic and math capabilities.",
    whenIsItUsed: "Solving math problems, logic puzzles, coding tasks, and complex multi-step reasoning queries.",
    whereIsItUsed: "System prompts, Agent reasoning loops.",
    whatComesNext: "ReAct Prompting",
    learningOutcomes: [
      "Explain the concept of Chain of Thought prompting.",
      "Implement Zero-Shot CoT (`Think step-by-step`).",
      "Implement Few-Shot CoT (providing examples that include reasoning steps).",
      "Understand why generating more tokens gives the model more 'compute time' to solve a problem.",
      "Identify tasks where CoT is useless (e.g., simple fact retrieval)."
    ],
    commonMistakes: [
      "Using CoT for simple extraction tasks, wasting tokens, latency, and money on useless reasoning.",
      "Assuming CoT guarantees a correct answer (the model can still hallucinate a perfectly logical-sounding but mathematically wrong step).",
      "Not parsing the final answer out of the reasoning text properly."
    ],
    realWorldApplications: [
      "Adding 'Let's think step by step' to an API prompt, increasing the model's accuracy on a math dataset from 17% to over 70%.",
      "Prompting an AI coding assistant to explain the logic of the algorithm *before* writing the code.",
      "A legal AI reasoning through a sequence of contract clauses before determining if a breach occurred."
    ],
    resources: [
      { type: "official", title: "PromptingGuide: Chain of Thought", url: "https://www.promptingguide.ai/techniques/cot" },
      { type: "video_en", title: "Chain of Thought Prompting (Andrew Ng)", url: "https://www.youtube.com/watch?v=5sLYAQS9sWQ" },
      { type: "video_hi", title: "Chain of Thought Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "How Chain of Thought actually works", url: "https://www.promptingguide.ai/techniques/cot" },
      { type: "github", title: "Awesome Chain of Thought", url: "https://github.com/atfortes/LLM-Reasoning-Papers" },
      { type: "cheat_sheet", title: "Prompting Techniques Comparison", url: "https://learnprompting.org/" },
      { type: "deep_dive", title: "Chain-of-Thought Prompting Elicits Reasoning (Original Paper)", url: "https://arxiv.org/abs/2201.11903" }
    ]
  },
  "react_prompting": {
    whyLearnThis: "ReAct (Reason + Act) is the core pattern that turns an LLM from a static text generator into an autonomous Agent. It allows the model to think about a problem, decide to use a tool (like a web search), observe the result, and repeat.",
    whenIsItUsed: "Building AI Agents, providing LLMs access to APIs, databases, or calculators.",
    whereIsItUsed: "LangChain Agents, AutoGPT, OpenAI Function Calling.",
    whatComesNext: "PEFT & LoRA",
    learningOutcomes: [
      "Understand the ReAct loop: Thought -> Action -> Observation -> Final Answer.",
      "Design a prompt that provides a model with a list of available tools/functions.",
      "Explain how parsing works to extract the 'Action' from the model's output and execute code.",
      "Understand the failure modes of agents (infinite loops, hallucinations).",
      "Implement a basic ReAct agent using LangChain or raw Python."
    ],
    commonMistakes: [
      "Giving an agent access to a destructive tool (like `DROP TABLE` or executing raw bash commands) without a human-in-the-loop approval step.",
      "Providing too many tools (e.g., 20+), which overwhelms the model and causes it to hallucinate tool names.",
      "Not setting a `max_iterations` limit, resulting in an agent looping infinitely and racking up massive API bills."
    ],
    realWorldApplications: [
      "An AI agent that thinks: 'I need the weather. Action: SearchWeather(NYC). Observation: 75 degrees. Final Answer: It is 75 degrees in NYC.'",
      "A database agent that writes a SQL query, runs it, gets an error, realizes the syntax was wrong, fixes it, and runs it again.",
      "OpenAI's Function Calling API, which natively structures the ReAct pattern for developers."
    ],
    resources: [
      { type: "official", title: "LangChain ReAct Agent", url: "https://python.langchain.com/docs/modules/agents/agent_types/react" },
      { type: "video_en", title: "ReAct Pattern Explained", url: "https://www.youtube.com/watch?v=WYpR4Tx5ilU" },
      { type: "video_hi", title: "AI Agents and ReAct Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Understanding ReAct Prompting", url: "https://www.promptingguide.ai/techniques/react" },
      { type: "github", title: "AutoGPT (ReAct in Action)", url: "https://github.com/Significant-Gravitas/AutoGPT" },
      { type: "cheat_sheet", title: "Agentic Patterns Overview", url: "https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/" },
      { type: "deep_dive", title: "ReAct Paper (Yao et al.)", url: "https://arxiv.org/abs/2210.03629" }
    ]
  },
  "peft_lora": {
    whyLearnThis: "Training a 70-billion parameter model from scratch costs millions of dollars. Parameter-Efficient Fine-Tuning (PEFT), specifically LoRA (Low-Rank Adaptation), allows you to fine-tune massive models on a single consumer GPU by only training a tiny adapter.",
    whenIsItUsed: "Customizing open-source models (Llama, Mistral) to a specific company tone, task, or syntax without losing the base model's general knowledge.",
    whereIsItUsed: "Hugging Face PEFT, Axolotl, Unsloth.",
    whatComesNext: "RLHF",
    learningOutcomes: [
      "Explain the difference between Full Fine-Tuning and PEFT.",
      "Understand the math intuition behind LoRA (using low-rank matrix factorization to represent weight changes).",
      "Explain the concept of an 'adapter' and how it is merged with base weights at inference.",
      "Understand QLoRA (Quantized LoRA) and how it reduces memory requirements.",
      "Prepare an Instruction dataset for supervised fine-tuning (SFT)."
    ],
    commonMistakes: [
      "Trying to use LoRA to teach a model 'new facts' (use RAG for that). LoRA is for teaching style, tone, and format.",
      "Using a learning rate that is too high, completely overwriting the base model's abilities (catastrophic forgetting).",
      "Failing to format the training data with the exact prompt template (e.g., ChatML, Llama-3 format) that the base model expects."
    ],
    realWorldApplications: [
      "Training a LoRA adapter on 5,000 corporate support tickets so the model learns to answer exactly like a company employee.",
      "Using QLoRA to fine-tune an 8-billion parameter model on a 16GB laptop GPU using the Unsloth library.",
      "Hot-swapping different LoRA adapters at inference time (e.g., using a 'Coding' adapter, then switching to a 'Translation' adapter)."
    ],
    resources: [
      { type: "official", title: "Hugging Face PEFT Docs", url: "https://huggingface.co/docs/peft/index" },
      { type: "video_en", title: "LoRA and QLoRA Explained", url: "https://www.youtube.com/watch?v=Us5ZFp16PaU" },
      { type: "video_hi", title: "Fine-Tuning LLMs Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Understanding LoRA", url: "https://sebastianraschka.com/blog/2023/llm-finetuning-lora.html" },
      { type: "github", title: "Unsloth: Fast LLM Fine-Tuning", url: "https://github.com/unslothai/unsloth" },
      { type: "cheat_sheet", title: "LoRA Hyperparameter Guide", url: "https://lightning.ai/pages/community/lora-insights/" },
      { type: "deep_dive", title: "LoRA Paper (Hu et al.)", url: "https://arxiv.org/abs/2106.09685" }
    ]
  },
  "rlhf": {
    whyLearnThis: "Base models (like GPT-3) just predict the next word—they are chaotic and often unhelpful. Reinforcement Learning from Human Feedback (RLHF) is the alignment process that made ChatGPT polite, helpful, and safe to use.",
    whenIsItUsed: "The final alignment phase of building a state-of-the-art LLM.",
    whereIsItUsed: "OpenAI, Anthropic (Constitutional AI), Llama-3 Instruct.",
    whatComesNext: "DPO",
    learningOutcomes: [
      "Understand the 3 steps of RLHF: Pretraining, Supervised Fine-Tuning (SFT), and RLHF.",
      "Explain the role of the Reward Model (training a smaller model to score outputs based on human preference).",
      "Understand how Proximal Policy Optimization (PPO) uses the Reward Model to update the LLM.",
      "Acknowledge the cost and complexity of gathering human preference data.",
      "Understand the 'Alignment Problem' (making AI do what we actually want)."
    ],
    commonMistakes: [
      "Thinking a base model is an 'Instruct' model. (You cannot chat with a raw base model; it will just continue your sentence).",
      "Assuming RLHF makes a model 'smarter'—it actually decreases raw capability slightly (the 'Alignment Tax') in exchange for usability.",
      "Attempting to do RLHF as a solo developer (it requires massive amounts of human annotation data)."
    ],
    realWorldApplications: [
      "OpenAI paying humans to rank 3 different AI responses to 'Tell me a joke', using that data to train a Reward Model.",
      "Using RLHF to penalize an AI heavily for providing instructions on how to build a bomb, enforcing safety guardrails.",
      "Anthropic using 'Constitutional AI', replacing human feedback with AI feedback based on a set of rules."
    ],
    resources: [
      { type: "official", title: "OpenAI: Aligning Language Models", url: "https://openai.com/research/instruction-following" },
      { type: "video_en", title: "RLHF Explained (Andrej Karpathy)", url: "https://www.youtube.com/watch?v=bZQun8Y4L2A" },
      { type: "video_hi", title: "RLHF Concept Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Illustrating RLHF (Hugging Face)", url: "https://huggingface.co/blog/rlhf" },
      { type: "github", title: "TRL: Transformer Reinforcement Learning", url: "https://github.com/huggingface/trl" },
      { type: "cheat_sheet", title: "Alignment Techniques Overview", url: "https://arxiv.org/abs/2309.15217" },
      { type: "deep_dive", title: "InstructGPT Paper", url: "https://arxiv.org/abs/2203.02155" }
    ]
  },
  "dpo": {
    whyLearnThis: "RLHF is incredibly complex because it requires training a separate Reward Model and running unstable reinforcement learning (PPO). Direct Preference Optimization (DPO) achieves the exact same alignment mathematically without the Reward Model, revolutionizing open-source fine-tuning.",
    whenIsItUsed: "Aligning open-source LLMs to human preferences easily.",
    whereIsItUsed: "Hugging Face TRL library, modern open-source models.",
    whatComesNext: "Vector Databases",
    learningOutcomes: [
      "Understand the mathematical breakthrough of DPO (treating the LLM itself as the reward model).",
      "Explain the dataset format required for DPO (Prompt, Chosen Response, Rejected Response).",
      "Compare the stability and compute cost of DPO vs PPO (RLHF).",
      "Understand why DPO has become the standard for open-source alignment.",
      "Implement a DPO training loop using Hugging Face."
    ],
    commonMistakes: [
      "Providing DPO data where the 'Chosen' and 'Rejected' responses are too similar, causing the model to learn nothing.",
      "Skipping Supervised Fine-Tuning (SFT) and going straight to DPO. (DPO requires a model that already knows how to chat).",
      "Using a reference model that is completely different from the policy model being trained."
    ],
    realWorldApplications: [
      "A developer aligning an open-source model using the 'UltraFeedback' dataset via DPO in 2 hours on a single GPU.",
      "Creating a 'coding-focused' model by feeding it pairs of efficient code (chosen) and buggy code (rejected).",
      "Zephyr-7B using DPO to punch far above its weight class, beating much larger models on chat leaderboards."
    ],
    resources: [
      { type: "official", title: "Hugging Face DPO Trainer", url: "https://huggingface.co/docs/trl/main/en/dpo_trainer" },
      { type: "video_en", title: "DPO vs RLHF Explained", url: "https://www.youtube.com/watch?v=k2pD3k1485A" },
      { type: "video_hi", title: "DPO Explained Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Direct Preference Optimization (Hugging Face Blog)", url: "https://huggingface.co/blog/dpo-trl" },
      { type: "github", title: "TRL DPO Implementation", url: "https://github.com/huggingface/trl" },
      { type: "cheat_sheet", title: "DPO Hyperparameters Guide", url: "https://huggingface.co/docs/trl/main/en/dpo_trainer" },
      { type: "deep_dive", title: "DPO Original Paper", url: "https://arxiv.org/abs/2305.18290" }
    ]
  },
  "vector_dbs": {
    whyLearnThis: "Vector databases are the memory of Large Language Models. They store dense embeddings (vectors) and use similarity search to find relevant information. Without them, Retrieval-Augmented Generation (RAG) on massive datasets is impossible.",
    whenIsItUsed: "Building semantic search engines, RAG pipelines, and recommendation systems.",
    whereIsItUsed: "Pinecone, Milvus, Weaviate, Qdrant, ChromaDB.",
    whatComesNext: "Embeddings",
    learningOutcomes: [
      "Understand how Vector DBs differ from Relational (SQL) and Document (NoSQL) databases.",
      "Explain distance metrics: Cosine Similarity, Dot Product, and Euclidean (L2) distance.",
      "Understand Approximate Nearest Neighbor (ANN) search and the HNSW index algorithm.",
      "Implement metadata filtering alongside vector search.",
      "Compare fully managed cloud vector DBs (Pinecone) with local/embedded ones (Chroma, pgvector)."
    ],
    commonMistakes: [
      "Performing exact nearest neighbor (k-NN) searches on millions of vectors, which is $O(N)$ and extremely slow.",
      "Changing the embedding model but forgetting to re-embed and update the entire vector database.",
      "Not storing metadata (like document IDs or dates), making it impossible to filter search results by source."
    ],
    realWorldApplications: [
      "Storing 10 million Wikipedia embeddings in Pinecone, allowing an LLM to retrieve the top 5 most relevant articles in 50 milliseconds.",
      "Using pgvector in an existing PostgreSQL database to add semantic search without migrating to a new database.",
      "Filtering a vector search for 'financial reports' by metadata `year == 2023` to restrict the search space."
    ],
    resources: [
      { type: "official", title: "Pinecone: What is a Vector DB?", url: "https://www.pinecone.io/learn/vector-database/" },
      { type: "video_en", title: "Vector Databases Explained", url: "https://www.youtube.com/watch?v=klTvEwg3oJ4" },
      { type: "video_hi", title: "Vector Databases in Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Comprehensive Guide to ANN", url: "https://towardsdatascience.com/comprehensive-guide-to-approximate-nearest-neighbors-algorithms-8b94f057d6b6" },
      { type: "github", title: "ChromaDB Source Code", url: "https://github.com/chroma-core/chroma" },
      { type: "cheat_sheet", title: "Vector DB Landscape Comparison", url: "https://github.com/chroma-core/chroma" },
      { type: "deep_dive", title: "HNSW Algorithm Explained", url: "https://www.pinecone.io/learn/series/faiss/hnsw/" }
    ]
  },
  "embeddings": {
    whyLearnThis: "Embeddings are how AI represents meaning. By converting text, images, or audio into arrays of numbers, models can mathematically compare concepts. Embeddings power search, RAG, and clustering.",
    whenIsItUsed: "Before data is stored in a Vector Database or processed by an LLM.",
    whereIsItUsed: "OpenAI `text-embedding-ada-002`, SentenceTransformers, Cohere embeddings.",
    whatComesNext: "LangChain & LlamaIndex",
    learningOutcomes: [
      "Understand what a dense vector representation is (e.g., an array of 1536 floats).",
      "Explain how concepts that are semantically similar end up close together in vector space.",
      "Generate text embeddings using the OpenAI API or local Hugging Face models.",
      "Understand cross-modal embeddings (e.g., CLIP mapping images and text to the same vector space).",
      "Identify the limitations of embeddings (e.g., struggling with exact keyword matches or negations)."
    ],
    commonMistakes: [
      "Using a massive LLM (GPT-4) to determine if two sentences are similar, instead of just comparing their embeddings for 1/1000th the cost.",
      "Comparing vectors generated by two *different* embedding models (the math will be completely meaningless).",
      "Assuming embeddings understand negations perfectly (sometimes 'I love this' and 'I do not love this' have very similar vectors)."
    ],
    realWorldApplications: [
      "Using OpenAI's embedding API to convert an entire corporate knowledge base into vectors for semantic search.",
      "Using OpenAI's CLIP model to embed an image and a text query, allowing a user to search for 'dog on beach' and return the correct image.",
      "Clustering customer reviews by plotting their embeddings in 2D space using UMAP to find common complaint themes."
    ],
    resources: [
      { type: "official", title: "OpenAI Embeddings Guide", url: "https://platform.openai.com/docs/guides/embeddings" },
      { type: "video_en", title: "Embeddings Explained (StatQuest)", url: "https://www.youtube.com/watch?v=viZrOnJclY0" },
      { type: "video_hi", title: "Embeddings Concept Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Text Embeddings Visually Explained", url: "https://jalammar.github.io/illustrated-word2vec/" },
      { type: "github", title: "Sentence Transformers Repo", url: "https://github.com/UKPLab/sentence-transformers" },
      { type: "cheat_sheet", title: "MTEB Leaderboard (Best Embeddings)", url: "https://huggingface.co/spaces/mteb/leaderboard" },
      { type: "deep_dive", title: "Word2Vec Original Paper", url: "https://arxiv.org/abs/1301.3781" }
    ]
  },
  "langchain_llamaindex": {
    whyLearnThis: "LangChain and LlamaIndex are the React/Angular of the AI world. They provide the necessary abstractions to chain multiple API calls together, parse outputs, maintain conversational memory, and ingest data for RAG.",
    whenIsItUsed: "Building robust AI applications, agents, and advanced RAG pipelines in Python or TypeScript.",
    whereIsItUsed: "AI backend services, chat interfaces.",
    whatComesNext: "vLLM",
    learningOutcomes: [
      "Understand LangChain's core components: Prompts, Models, Output Parsers, and Chains.",
      "Use LCEL (LangChain Expression Language) to write composable pipelines.",
      "Understand LlamaIndex's focus on data ingestion, indexing, and advanced retrieval (query engines).",
      "Implement conversation memory (Buffer vs Summary).",
      "Decide when to use raw API calls vs a framework."
    ],
    commonMistakes: [
      "Using LangChain for a simple 1-step prompt where `openai.chat.completions` would be faster, easier to read, and less prone to breaking changes.",
      "Not understanding how LCEL passes variables under the hood, making debugging difficult.",
      "Failing to implement streaming in the UI because the LangChain pipeline wasn't configured for async generators."
    ],
    realWorldApplications: [
      "Using LlamaIndex to point at a directory of 50 complex PDFs, parse the text, chunk it, embed it, and create a chat interface in 10 lines of code.",
      "Building a LangChain application that takes a user query, parses it into a SQL query, runs the SQL, and uses the LLM to summarize the data table.",
      "Using LangChain's Output Parsers to guarantee an LLM responds in a Pydantic-validated JSON format."
    ],
    resources: [
      { type: "official", title: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
      { type: "video_en", title: "LangChain Crash Course", url: "https://www.youtube.com/watch?v=aywZrzNaKjs" },
      { type: "video_hi", title: "LangChain Tutorial Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "LlamaIndex vs LangChain", url: "https://docs.llamaindex.ai/en/stable/" },
      { type: "github", title: "LlamaIndex Repository", url: "https://github.com/run-llama/llama_index" },
      { type: "cheat_sheet", title: "LCEL Cheat Sheet", url: "https://python.langchain.com/docs/expression_language/" },
      { type: "deep_dive", title: "Advanced RAG with LlamaIndex", url: "https://docs.llamaindex.ai/en/stable/optimizing/production_rag.html" }
    ]
  },
  "vllm": {
    whyLearnThis: "Deploying an LLM for production is not like deploying a normal web server. LLM inference is severely memory-bound. vLLM uses an innovation called PagedAttention to dramatically increase throughput and serve thousands of concurrent requests.",
    whenIsItUsed: "Hosting open-source models (Llama, Mistral) in production as an API.",
    whereIsItUsed: "GPU cloud servers (AWS EC2, RunPod), Kubernetes.",
    whatComesNext: "Quantization",
    learningOutcomes: [
      "Understand the KV Cache memory bottleneck during autoregressive generation.",
      "Explain how PagedAttention solves KV Cache fragmentation (similar to OS virtual memory).",
      "Deploy a model using the vLLM Docker container with an OpenAI-compatible endpoint.",
      "Understand continuous batching (processing new requests the millisecond old ones finish).",
      "Understand Tensor Parallelism (splitting a model across multiple GPUs)."
    ],
    commonMistakes: [
      "Deploying a model using Hugging Face `pipeline` in FastAPI—it will process requests sequentially and crash under load.",
      "Not configuring the `gpu_memory_utilization` flag in vLLM, causing Out Of Memory (OOM) errors.",
      "Using a 70B parameter model on a single 24GB GPU (it physically won't fit without massive quantization; you need tensor parallelism)."
    ],
    realWorldApplications: [
      "Replacing a custom Hugging Face deployment with vLLM, instantly achieving 5-10x higher request throughput.",
      "Spinning up an OpenAI-compatible API on a local server using `python -m vllm.entrypoints.openai.api_server --model meta-llama/Llama-3-8b`.",
      "Serving a model across 4x A100 GPUs using vLLM's tensor parallelism."
    ],
    resources: [
      { type: "official", title: "vLLM Documentation", url: "https://docs.vllm.ai/en/latest/" },
      { type: "video_en", title: "vLLM and PagedAttention Explained", url: "https://www.youtube.com/watch?v=McLdlg5Gc9s" },
      { type: "video_hi", title: "LLM Deployment vLLM Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "How vLLM works under the hood", url: "https://blog.vllm.ai/2023/06/20/vllm.html" },
      { type: "github", title: "vLLM Source Code", url: "https://github.com/vllm-project/vllm" },
      { type: "cheat_sheet", title: "LLM Inference Engine Comparison", url: "https://github.com/ray-project/llm-numbers" },
      { type: "deep_dive", title: "PagedAttention Original Paper", url: "https://arxiv.org/abs/2309.06180" }
    ]
  },
  "quantization": {
    whyLearnThis: "A 70-billion parameter model takes 140GB of VRAM just to load in standard FP16 (16-bit) math. Quantization compresses the math to 8-bit or 4-bit, allowing massive models to run on consumer GPUs or even laptops with minimal accuracy loss.",
    whenIsItUsed: "Running local LLMs, reducing cloud GPU costs, and deploying models to edge devices (phones).",
    whereIsItUsed: "AWQ, GPTQ, GGUF, bitsandbytes.",
    whatComesNext: "GGUF & llama.cpp",
    learningOutcomes: [
      "Understand the difference between FP32, FP16, INT8, and INT4 data types.",
      "Explain the concept of Quantization (compressing weights) and the trade-off with Perplexity (accuracy).",
      "Differentiate between Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT).",
      "Understand modern quantization algorithms: GPTQ and AWQ (optimized for GPU inference).",
      "Load a quantized model using Hugging Face `bitsandbytes`."
    ],
    commonMistakes: [
      "Trying to fine-tune a model that has already been severely quantized without using specialized techniques (like QLoRA).",
      "Assuming a 4-bit quantized model will be exactly as smart as the 16-bit original (it degrades slightly, especially in complex math/coding).",
      "Using the wrong quantization format for your hardware (e.g., using GPTQ on a Mac CPU instead of GGUF)."
    ],
    realWorldApplications: [
      "Using AWQ to compress a Llama-3-8B model so it runs at 100 tokens/second on an RTX 4090.",
      "Deploying a 4-bit quantized model using `bitsandbytes` to save $5,000/month in AWS GPU costs.",
      "Using QLoRA to fine-tune a 70B model on a single A100 GPU by keeping the base weights in 4-bit."
    ],
    resources: [
      { type: "official", title: "Hugging Face Quantization Guide", url: "https://huggingface.co/docs/transformers/main_classes/quantization" },
      { type: "video_en", title: "LLM Quantization Explained", url: "https://www.youtube.com/watch?v=mNE_d-C82lI" },
      { type: "video_hi", title: "Quantization in Deep Learning Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "Understanding GPTQ and AWQ", url: "https://huggingface.co/docs/transformers/quantization" },
      { type: "github", title: "AutoAWQ Repo", url: "https://github.com/casper-hansen/AutoAWQ" },
      { type: "cheat_sheet", title: "GPU VRAM Calculator for LLMs", url: "https://huggingface.co/spaces/hf-accelerate/model-memory-usage" },
      { type: "deep_dive", title: "AWQ Paper (Activation-aware Weight Quantization)", url: "https://arxiv.org/abs/2306.00978" }
    ]
  },
  "gguf_llama_cpp": {
    whyLearnThis: "Not everyone has a massive NVIDIA GPU. `llama.cpp` is a C/C++ library that allows you to run massive LLMs efficiently on CPUs and Apple Silicon (Macs) using the GGUF quantization format. It democratized local AI.",
    whenIsItUsed: "Running AI locally on laptops, edge devices (Raspberry Pi), and environments without NVIDIA GPUs.",
    whereIsItUsed: "Ollama, LM Studio, llama.cpp, Apple MacBooks.",
    whatComesNext: "LLM Complete",
    learningOutcomes: [
      "Understand the GGUF file format (which stores the model weights, metadata, and tokenizer in a single file).",
      "Explain how `llama.cpp` optimizes inference for CPUs and Apple Metal (MPS).",
      "Run a local LLM using the Ollama CLI or LM Studio.",
      "Understand the difference between GPU-bound formats (AWQ/GPTQ) and CPU-friendly formats (GGUF).",
      "Offload specific layers of a model to the GPU while keeping the rest on the CPU."
    ],
    commonMistakes: [
      "Downloading a raw PyTorch `.bin` or `.safetensors` model and trying to run it in Ollama (it requires GGUF format).",
      "Running an LLM on CPU without enabling AVX2 instructions, resulting in painfully slow 1-token-per-second generation.",
      "Not offloading layers to the GPU when a dedicated GPU is actually available."
    ],
    realWorldApplications: [
      "A developer running Mistral-7B locally on an M3 MacBook Pro completely offline using LM Studio.",
      "Using the Ollama CLI to pull `llama3` and instantly exposing a local REST API that perfectly mimics OpenAI's API.",
      "Running a tiny 1-billion parameter LLM on a Raspberry Pi for a smart home assistant using `llama.cpp`."
    ],
    resources: [
      { type: "official", title: "Ollama Official Site", url: "https://ollama.com/" },
      { type: "video_en", title: "Run LLMs Locally with LM Studio", url: "https://www.youtube.com/watch?v=wxQgGK5K0rE" },
      { type: "video_hi", title: "Local LLM using Ollama Hindi", url: "https://www.youtube.com/watch?v=V19VGmFszIk" },
      { type: "article", title: "What is GGUF?", url: "https://github.com/ggerganov/llama.cpp" },
      { type: "github", title: "llama.cpp Repository", url: "https://github.com/ggerganov/llama.cpp" },
      { type: "cheat_sheet", title: "Ollama CLI Commands", url: "https://github.com/ollama/ollama/blob/main/README.md" },
      { type: "deep_dive", title: "The Blazing Fast Math Behind llama.cpp", url: "https://simonwillison.net/2023/Oct/23/embeddings/" }
    ]
  }
};
