import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_pre_1": {
    whyLearnThis: "Python is the undisputed language of AI. Libraries like Pandas and NumPy provide the foundation for manipulating the vast amounts of data required to train models. Without mastering Python for data, you cannot build AI systems.",
    whenIsItUsed: "Loading datasets, cleaning messy data, doing exploratory data analysis (EDA), and writing the glue code for AI pipelines.",
    whereIsItUsed: "Jupyter Notebooks, data preprocessing scripts, Pandas, NumPy.",
    whatComesNext: "Linear Algebra & Calculus",
    learningOutcomes: [
      "Master Python data structures: lists, dictionaries, sets, and list comprehensions.",
      "Use NumPy for fast, vectorized array operations and broadcasting.",
      "Load, filter, merge, and clean tabular data using Pandas.",
      "Handle missing values and outliers in datasets.",
      "Perform basic data visualization using Matplotlib and Seaborn."
    ],
    commonMistakes: [
      "Using standard Python `for` loops over large datasets instead of vectorized Pandas/NumPy operations.",
      "Modifying Pandas DataFrames in-place without understanding the `SettingWithCopyWarning`.",
      "Skipping exploratory data analysis and feeding raw, unexamined data into a model."
    ],
    realWorldApplications: [
      "Cleaning a 10-million row dataset of customer reviews before training a sentiment analysis model.",
      "Using NumPy to normalize pixel values in a massive image dataset in milliseconds.",
      "Writing a Pandas script to merge user behavior logs with demographic data."
    ],
    resources: [
      { type: "official", title: "Pandas Official Documentation", url: "https://pandas.pydata.org/docs/user_guide/index.html" },
      { type: "video_en", title: "Python for Data Science Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" },
      { type: "video_hi", title: "Pandas & NumPy in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=4pNSPBfJpKw" },
      { type: "article", title: "10 Minutes to Pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
      { type: "github", title: "Python Data Science Handbook", url: "https://github.com/jakevdp/PythonDataScienceHandbook" },
      { type: "cheat_sheet", title: "Pandas Data Wrangling Cheat Sheet", url: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf" },
      { type: "deep_dive", title: "NumPy Fundamentals Deep Dive", url: "https://numpy.org/doc/stable/user/basics.html" }
    ]
  },
  "n_pre_2": {
    whyLearnThis: "AI models aren't magic; they are math. Linear algebra (matrices/vectors) is how neural networks represent data. Calculus (derivatives) is how neural networks learn via gradient descent. You need both to truly understand AI.",
    whenIsItUsed: "Understanding neural network architectures, diagnosing training issues, and reading AI research papers.",
    whereIsItUsed: "PyTorch tensors, TensorFlow graphs, backpropagation algorithms.",
    whatComesNext: "Probability & Statistics",
    learningOutcomes: [
      "Understand vectors, matrices, dot products, and matrix multiplication.",
      "Explain how a neural network layer is essentially a matrix multiplication followed by an activation function.",
      "Understand derivatives, partial derivatives, and the chain rule.",
      "Explain how gradient descent uses calculus to minimize the loss function.",
      "Apply linear algebra concepts using NumPy arrays."
    ],
    commonMistakes: [
      "Treating math as purely theoretical and failing to connect it to actual Python code (e.g., PyTorch tensors).",
      "Ignoring the shape of matrices, leading to endless broadcasting errors in code.",
      "Assuming you need a PhD in math to build AI—you only need to understand the intuition behind the math."
    ],
    realWorldApplications: [
      "Using matrix multiplication to process an entire batch of 64 images through a neural network layer simultaneously.",
      "The Adam optimizer using gradients (calculus) to adjust model weights and decrease training loss.",
      "Applying Singular Value Decomposition (SVD) for dimensionality reduction."
    ],
    resources: [
      { type: "official", title: "PyTorch Math Operations", url: "https://pytorch.org/docs/stable/torch.html#math-operations" },
      { type: "video_en", title: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs" },
      { type: "video_hi", title: "Math for ML in Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Calculus for Deep Learning", url: "https://towardsdatascience.com/calculus-in-machine-learning-2e7cddafa21f" },
      { type: "github", title: "Mathematics for Machine Learning Book", url: "https://github.com/mml-book/mml-book.github.io" },
      { type: "cheat_sheet", title: "Linear Algebra Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io/en/latest/linear_algebra.html" },
      { type: "deep_dive", title: "Matrix Calculus for Deep Learning", url: "https://explained.ai/matrix-calculus/" }
    ]
  },
  "n_pre_3": {
    whyLearnThis: "AI models don't produce certainties; they produce probabilities. Understanding distributions, Bayes' theorem, and statistical significance is required to evaluate models, represent uncertainty, and prevent overfitting.",
    whenIsItUsed: "Evaluating model accuracy, understanding generative models (like VAEs or Diffusion models), and performing A/B testing.",
    whereIsItUsed: "Softmax outputs in classification, Bayesian Neural Networks, scikit-learn statistical tests.",
    whatComesNext: "Supervised Learning",
    learningOutcomes: [
      "Understand basic probability concepts: conditional probability and Bayes' Theorem.",
      "Identify common probability distributions (Normal, Binomial, Uniform).",
      "Explain the concept of Maximum Likelihood Estimation (MLE).",
      "Understand variance, standard deviation, and expected value.",
      "Use statistical significance and p-values to evaluate experimental results."
    ],
    commonMistakes: [
      "Confusing correlation with causation in data.",
      "Interpreting the output of a softmax function as absolute confidence rather than a probability distribution.",
      "Ignoring the underlying distribution of the data and assuming everything is normally distributed."
    ],
    realWorldApplications: [
      "A language model outputting a probability distribution over the next word in a sequence.",
      "A medical AI providing a 92% confidence score that an x-ray shows pneumonia, using probabilistic outputs.",
      "Using statistical significance to prove that a new recommendation model actually increases click-through rate over the old model."
    ],
    resources: [
      { type: "official", title: "SciPy Stats Documentation", url: "https://docs.scipy.org/doc/scipy/reference/stats.html" },
      { type: "video_en", title: "Statistics and Probability (StatQuest)", url: "https://www.youtube.com/watch?v=vYimHJMuTa0" },
      { type: "video_hi", title: "Statistics for ML Hindi", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "article", title: "Probability concepts for Machine Learning", url: "https://towardsdatascience.com/probability-concepts-explained-introduction-a7c0316de465" },
      { type: "github", title: "Think Stats (Book Repository)", url: "https://github.com/AllenDowney/ThinkStats2" },
      { type: "cheat_sheet", title: "Probability Cheat Sheet", url: "https://www.probabilitycourse.com/" },
      { type: "deep_dive", title: "Probabilistic Machine Learning (Kevin Murphy)", url: "https://probml.github.io/pml-book/" }
    ]
  },
  "n_ml_1": {
    whyLearnThis: "Supervised learning—learning from labeled examples—is the most widely deployed form of AI. From predicting house prices (regression) to detecting spam (classification), these algorithms form the baseline of predictive AI.",
    whenIsItUsed: "When you have historical data with known outcomes and want to predict the outcome for new, unseen data.",
    whereIsItUsed: "Scikit-learn, XGBoost, LightGBM, Random Forests.",
    whatComesNext: "Unsupervised Learning",
    learningOutcomes: [
      "Differentiate between Regression (continuous output) and Classification (discrete output).",
      "Train and evaluate Linear and Logistic Regression models.",
      "Understand Decision Trees and how they split data based on information gain.",
      "Explain ensemble methods: Bagging (Random Forest) and Boosting (XGBoost).",
      "Apply cross-validation to prevent overfitting and select the best model."
    ],
    commonMistakes: [
      "Using deep learning for tabular data when XGBoost or Random Forests are faster, more interpretable, and often more accurate.",
      "Failing to scale features before using distance-based algorithms like SVM or KNN.",
      "Leaking test data into the training set by applying transformations before the train/test split."
    ],
    realWorldApplications: [
      "An XGBoost model predicting credit card fraud based on historical transaction data.",
      "A Random Forest classifier predicting patient readmission risk in a hospital.",
      "Linear regression predicting the future price of real estate based on square footage and location."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Supervised Learning", url: "https://scikit-learn.org/stable/supervised_learning.html" },
      { type: "video_en", title: "Machine Learning Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "video_hi", title: "Supervised Learning Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=DKSZHN7jLmI" },
      { type: "article", title: "Introduction to XGBoost", url: "https://xgboost.readthedocs.io/en/stable/tutorials/model.html" },
      { type: "github", title: "Machine Learning From Scratch", url: "https://github.com/eriklindernoren/ML-From-Scratch" },
      { type: "cheat_sheet", title: "Scikit-learn Algorithm Cheat Sheet", url: "https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html" },
      { type: "deep_dive", title: "StatQuest: Random Forests", url: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" }
    ]
  },
  "n_ml_2": {
    whyLearnThis: "Most data in the world is unlabeled. Unsupervised learning finds hidden patterns, groupings, and structures in raw data without human supervision. It's crucial for customer segmentation, anomaly detection, and data compression.",
    whenIsItUsed: "When exploring new datasets, reducing feature dimensions before supervised learning, or detecting outliers (fraud/security).",
    whereIsItUsed: "K-Means, PCA, Isolation Forests, t-SNE, UMAP.",
    whatComesNext: "Model Evaluation Metrics",
    learningOutcomes: [
      "Implement K-Means clustering and use the elbow method to find the optimal number of clusters.",
      "Understand Principal Component Analysis (PCA) for dimensionality reduction.",
      "Apply t-SNE or UMAP to visualize high-dimensional data in 2D or 3D.",
      "Use Isolation Forests for anomaly and outlier detection.",
      "Explain the challenges of evaluating unsupervised models (since there are no ground-truth labels)."
    ],
    commonMistakes: [
      "Applying K-Means to data with non-spherical clusters (where DBSCAN would be better).",
      "Forgetting to standardize data before using PCA or K-Means, causing features with larger magnitudes to dominate.",
      "Using t-SNE for feature reduction before training a classifier (it doesn't preserve global distance well; use PCA or UMAP instead)."
    ],
    realWorldApplications: [
      "Clustering an e-commerce platform's users into distinct marketing segments based on browsing behavior.",
      "Using PCA to compress a 1000-dimensional dataset to 50 dimensions while retaining 95% of the variance.",
      "Using unsupervised anomaly detection to flag unusual network traffic indicative of a cyberattack."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Unsupervised Learning", url: "https://scikit-learn.org/stable/unsupervised_learning.html" },
      { type: "video_en", title: "K-Means Clustering (StatQuest)", url: "https://www.youtube.com/watch?v=4b5d3muPQmA" },
      { type: "video_hi", title: "Unsupervised Learning Hindi", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "article", title: "Understanding PCA", url: "https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis-5582fb7e0a9c" },
      { type: "github", title: "UMAP: Uniform Manifold Approximation", url: "https://github.com/lmcinnes/umap" },
      { type: "cheat_sheet", title: "Clustering Algorithms Comparison", url: "https://scikit-learn.org/stable/auto_examples/cluster/plot_cluster_comparison.html" },
      { type: "deep_dive", title: "How to Use t-SNE Effectively", url: "https://distill.pub/2016/misread-tsne/" }
    ]
  },
  "n_ml_3": {
    whyLearnThis: "If you optimize for the wrong metric, you build a useless model. Accuracy is often misleading (especially on imbalanced data). Understanding Precision, Recall, F1, and ROC-AUC ensures you measure what actually matters to the business.",
    whenIsItUsed: "Every single time you train a model, and when comparing models during hyperparameter tuning.",
    whereIsItUsed: "Scikit-learn metrics, model monitoring dashboards, Kaggle competitions.",
    whatComesNext: "Neural Networks (PyTorch/TF)",
    learningOutcomes: [
      "Calculate and interpret a Confusion Matrix.",
      "Explain why Accuracy is a terrible metric for imbalanced datasets (like fraud detection).",
      "Differentiate between Precision (minimizing false positives) and Recall (minimizing false negatives).",
      "Interpret the ROC curve and the AUC (Area Under Curve) score.",
      "Understand regression metrics: MAE, MSE, RMSE, and R-squared."
    ],
    commonMistakes: [
      "Using Accuracy for a dataset where 99% of transactions are legitimate and 1% are fraud.",
      "Optimizing for Precision when a False Negative is lethal (e.g., medical diagnosis, where Recall is crucial).",
      "Evaluating a model on the training set rather than a strict holdout/test set."
    ],
    realWorldApplications: [
      "A cancer detection model optimized for High Recall, ensuring no tumors are missed, even at the cost of some false alarms.",
      "A spam filter optimized for High Precision, ensuring legitimate emails are almost never sent to the spam folder.",
      "Using RMSE to evaluate a housing price prediction model, heavily penalizing large errors."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Model Evaluation", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
      { type: "video_en", title: "Precision, Recall, F1 (StatQuest)", url: "https://www.youtube.com/watch?v=Kdsp6soqA7o" },
      { type: "video_hi", title: "Evaluation Metrics Hindi", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "article", title: "The ultimate guide to evaluation metrics", url: "https://towardsdatascience.com/the-ultimate-guide-to-evaluation-metrics-for-machine-learning-8c5da4651054" },
      { type: "github", title: "Evaluating ML Models Code", url: "https://github.com/ageron/handson-ml3" },
      { type: "cheat_sheet", title: "Metrics Selection Cheat Sheet", url: "https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics" },
      { type: "deep_dive", title: "ROC and AUC Explained", url: "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc" }
    ]
  },
  "n_dl_1": {
    whyLearnThis: "Deep Learning powers the AI revolution—from ChatGPT to self-driving cars. Neural networks can learn incredibly complex, non-linear representations of data that traditional ML cannot. PyTorch is the industry standard framework for building them.",
    whenIsItUsed: "Handling unstructured data (images, text, audio) or extremely large datasets where traditional ML plateaus.",
    whereIsItUsed: "PyTorch, TensorFlow, Keras, Hugging Face.",
    whatComesNext: "Backpropagation",
    learningOutcomes: [
      "Explain the architecture of a Multi-Layer Perceptron (MLP): weights, biases, and hidden layers.",
      "Understand activation functions: ReLU, Sigmoid, Tanh, and Softmax.",
      "Define a neural network model in PyTorch using `nn.Module`.",
      "Write a basic PyTorch training loop (forward pass, loss calculation, backward pass, optimizer step).",
      "Understand the difference between CPU and GPU (CUDA) execution for tensors."
    ],
    commonMistakes: [
      "Forgetting to call `optimizer.zero_grad()` in the PyTorch training loop, causing gradients to accumulate indefinitely.",
      "Using the wrong loss function (e.g., MSE for classification instead of CrossEntropyLoss).",
      "Building a deep network without non-linear activation functions (which collapses it into a single linear transformation)."
    ],
    realWorldApplications: [
      "Training a PyTorch neural network to recognize handwritten digits (MNIST) with 99% accuracy.",
      "Using ReLU activation to solve the vanishing gradient problem in deep networks.",
      "Running a training loop on an NVIDIA GPU, accelerating training time by 100x compared to CPU."
    ],
    resources: [
      { type: "official", title: "PyTorch: 60 Minute Blitz", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" },
      { type: "video_en", title: "Neural Networks Explained (3Blue1Brown)", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { type: "video_hi", title: "PyTorch Tutorial Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=EMXfZB8FVUA" },
      { type: "article", title: "A Visual Guide to Neural Networks", url: "https://jalammar.github.io/visual-interactive-guide-basics-neural-networks/" },
      { type: "github", title: "Karpathy: Neural Networks Zero to Hero", url: "https://github.com/karpathy/nn-zero-to-hero" },
      { type: "cheat_sheet", title: "PyTorch Cheat Sheet", url: "https://pytorch.org/tutorials/beginner/ptcheat.html" },
      { type: "deep_dive", title: "Deep Learning Book (Goodfellow et al.)", url: "https://www.deeplearningbook.org/" }
    ]
  },
  "n_dl_2": {
    whyLearnThis: "Backpropagation is the algorithm that makes deep learning possible. It calculates the gradients of the loss function with respect to every weight in the network, allowing the optimizer (like SGD or Adam) to update the weights and 'learn'.",
    whenIsItUsed: "It runs automatically during the `.backward()` call in PyTorch, but understanding it is crucial for debugging training failures (like vanishing/exploding gradients).",
    whereIsItUsed: "Inside every deep learning framework's autograd engine.",
    whatComesNext: "CNNs & Vision Basics",
    learningOutcomes: [
      "Explain the chain rule of calculus and how it applies to a computational graph.",
      "Understand the difference between the forward pass (computing loss) and backward pass (computing gradients).",
      "Diagnose the Vanishing Gradient problem and how architectures like ResNet solve it.",
      "Diagnose the Exploding Gradient problem and implement gradient clipping.",
      "Understand how PyTorch Autograd dynamically builds a computational graph."
    ],
    commonMistakes: [
      "Treating backpropagation purely as a black box—when a model stops learning, you won't know why.",
      "Not understanding that deep networks (without skip connections) suffer heavily from vanishing gradients.",
      "Detaching tensors from the computation graph accidentally, preventing gradients from flowing."
    ],
    realWorldApplications: [
      "PyTorch automatically calculating the exact gradients for a 100-layer network in milliseconds using `.backward()`.",
      "Implementing gradient clipping (`torch.nn.utils.clip_grad_norm_`) to stabilize the training of a Recurrent Neural Network (RNN).",
      "Using skip connections (ResNet) to provide a 'highway' for gradients to flow backward without vanishing."
    ],
    resources: [
      { type: "official", title: "PyTorch Autograd Mechanics", url: "https://pytorch.org/docs/stable/notes/autograd.html" },
      { type: "video_en", title: "Backpropagation Calculus (3Blue1Brown)", url: "https://www.youtube.com/watch?v=Ilg3gGewQ5U" },
      { type: "video_hi", title: "Backpropagation Hindi", url: "https://www.youtube.com/watch?v=NXSDI42LHGA" },
      { type: "article", title: "Yes you should understand backprop (Karpathy)", url: "https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b" },
      { type: "github", title: "Micrograd: Autograd Engine from Scratch", url: "https://github.com/karpathy/micrograd" },
      { type: "cheat_sheet", title: "Calculus for Deep Learning Cheat Sheet", url: "https://distill.pub/2017/momentum/" },
      { type: "deep_dive", title: "CS231n: Backpropagation and Computation Graphs", url: "https://cs231n.github.io/optimization-2/" }
    ]
  },
  "n_dl_3": {
    whyLearnThis: "Convolutional Neural Networks (CNNs) revolutionized computer vision. Instead of analyzing an image pixel by pixel independently, CNNs use sliding filters to learn spatial hierarchies (edges -> textures -> objects).",
    whenIsItUsed: "Image classification, object detection, facial recognition, and medical image analysis.",
    whereIsItUsed: "TorchVision, YOLO, ResNet, autonomous vehicle perception systems.",
    whatComesNext: "Embeddings & Word2Vec",
    learningOutcomes: [
      "Understand the mechanics of the Convolution operation, padding, and stride.",
      "Explain the purpose of Max Pooling layers (spatial downsampling and translation invariance).",
      "Build a CNN from scratch in PyTorch to classify images (e.g., CIFAR-10).",
      "Understand Transfer Learning and how to fine-tune a pre-trained ResNet model.",
      "Apply Data Augmentation to prevent overfitting on small image datasets."
    ],
    commonMistakes: [
      "Flattening an image too early and using dense layers, destroying all spatial relationship data.",
      "Training a massive CNN from scratch on a small dataset instead of fine-tuning a pre-trained model (Transfer Learning).",
      "Failing to normalize image tensors (e.g., to mean 0, std 1) before feeding them into the network."
    ],
    realWorldApplications: [
      "Using a pre-trained ResNet-50 model, changing the final layer, and fine-tuning it to detect manufacturing defects in factory images.",
      "Applying random crops, rotations, and color jitter (Data Augmentation) to artificially expand a training dataset.",
      "YOLO (You Only Look Once) using CNNs to detect multiple objects and their bounding boxes in real-time video."
    ],
    resources: [
      { type: "official", title: "TorchVision Documentation", url: "https://pytorch.org/vision/stable/index.html" },
      { type: "video_en", title: "CNNs Explained (Computerphile)", url: "https://www.youtube.com/watch?v=YRhxdVk_sIs" },
      { type: "video_hi", title: "CNN Concept in Hindi", url: "https://www.youtube.com/watch?v=y-lIVDtOKgM" },
      { type: "article", title: "A Comprehensive Guide to CNNs", url: "https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53" },
      { type: "github", title: "PyTorch Vision Repository", url: "https://github.com/pytorch/vision" },
      { type: "cheat_sheet", title: "CNN Architecture Cheat Sheet", url: "https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-convolutional-neural-networks" },
      { type: "deep_dive", title: "Stanford CS231n: Convolutional Neural Networks", url: "https://cs231n.github.io/convolutional-networks/" }
    ]
  },
  "n_nlp_1": {
    whyLearnThis: "Computers can't understand text; they only understand numbers. Embeddings map words (or sentences) into dense, high-dimensional mathematical vectors where semantic meaning translates to spatial distance. This is the foundation of all modern NLP and LLMs.",
    whenIsItUsed: "Text classification, sentiment analysis, semantic search, and preparing text for language models.",
    whereIsItUsed: "Word2Vec, GloVe, OpenAI Ada embeddings, Hugging Face sentence-transformers.",
    whatComesNext: "Transformers Architecture",
    learningOutcomes: [
      "Explain the difference between sparse representations (One-Hot Encoding, TF-IDF) and dense embeddings.",
      "Understand how Word2Vec (Skip-gram and CBOW) learns semantic relationships.",
      "Measure word similarity using Cosine Similarity.",
      "Understand the limitations of static word embeddings (e.g., 'bank' has the same vector in 'river bank' and 'bank account').",
      "Use pre-trained sentence embeddings for semantic search."
    ],
    commonMistakes: [
      "Using Euclidean distance instead of Cosine Similarity to compare high-dimensional embedding vectors.",
      "Using Word2Vec for modern tasks when contextual embeddings (like BERT or OpenAI embeddings) perform much better.",
      "Not handling out-of-vocabulary (OOV) words properly when using static embeddings."
    ],
    realWorldApplications: [
      "Calculating that the vector for 'King' - 'Man' + 'Woman' is mathematically closest to the vector for 'Queen'.",
      "Building a semantic search engine that finds documents based on meaning rather than exact keyword matches.",
      "Using an embedding layer in PyTorch as the first layer of a text classification neural network."
    ],
    resources: [
      { type: "official", title: "Sentence Transformers Documentation", url: "https://sbert.net/" },
      { type: "video_en", title: "Word Embeddings (StatQuest)", url: "https://www.youtube.com/watch?v=viZrOnJclY0" },
      { type: "video_hi", title: "Word2Vec and Embeddings Hindi", url: "https://www.youtube.com/watch?v=gE9OJ3gAIwY" },
      { type: "article", title: "The Illustrated Word2Vec", url: "https://jalammar.github.io/illustrated-word2vec/" },
      { type: "github", title: "Gensim: Topic modeling and Word2Vec", url: "https://github.com/piskvorky/gensim" },
      { type: "cheat_sheet", title: "Embeddings Quick Reference", url: "https://developers.google.com/machine-learning/crash-course/embeddings/video-lecture" },
      { type: "deep_dive", title: "Efficient Estimation of Word Representations (Original Word2Vec Paper)", url: "https://arxiv.org/abs/1301.3781" }
    ]
  },
  "n_nlp_2": {
    whyLearnThis: "The Transformer architecture (introduced in the 'Attention Is All You Need' paper) completely took over AI. It replaced RNNs and LSTMs by processing entire sequences in parallel using Self-Attention. Every major LLM (GPT, BERT, Llama) is a Transformer.",
    whenIsItUsed: "Building or understanding modern NLP models, Large Language Models, and Vision Transformers.",
    whereIsItUsed: "OpenAI GPT models, Google BERT/Gemini, Meta Llama, Hugging Face Transformers.",
    whatComesNext: "Hugging Face Datasets & Models",
    learningOutcomes: [
      "Explain the Self-Attention mechanism (Queries, Keys, Values).",
      "Understand the difference between Encoder-only (BERT), Decoder-only (GPT), and Encoder-Decoder (T5) architectures.",
      "Explain the purpose of Positional Encoding (since Transformers have no inherent sense of sequence order).",
      "Understand Multi-Head Attention and how it allows the model to focus on different parts of the sequence.",
      "Explain why Transformers scale so much better than RNNs (parallelization)."
    ],
    commonMistakes: [
      "Assuming Transformers process text left-to-right natively—they process all tokens simultaneously, which is why positional encoding is required.",
      "Confusing BERT (which looks in both directions to understand context) with GPT (which is autoregressive and only predicts the next word).",
      "Ignoring the quadratic memory cost of Self-Attention ($O(N^2)$), which limits context window sizes."
    ],
    realWorldApplications: [
      "BERT (Encoder) powering Google Search to understand the deep bidirectional context of search queries.",
      "GPT-4 (Decoder) predicting the next token autoregressively to generate an essay.",
      "Vision Transformers (ViT) replacing CNNs by splitting images into patches and applying self-attention."
    ],
    resources: [
      { type: "official", title: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762" },
      { type: "video_en", title: "Transformers Explained (Andrej Karpathy)", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { type: "video_hi", title: "Transformers Architecture Hindi", url: "https://www.youtube.com/watch?v=X3cFiJnxUBY" },
      { type: "article", title: "The Illustrated Transformer (Jay Alammar)", url: "https://jalammar.github.io/illustrated-transformer/" },
      { type: "github", title: "Annotated Transformer (Code Walkthrough)", url: "https://github.com/harvardnlp/annotated-transformer" },
      { type: "cheat_sheet", title: "Transformer Architecture Diagram", url: "https://arxiv.org/abs/1810.04805" },
      { type: "deep_dive", title: "Stanford CS224N: Transformers", url: "https://web.stanford.edu/class/cs224n/" }
    ]
  },
  "n_nlp_3": {
    whyLearnThis: "Hugging Face is the GitHub of AI. It provides an open-source hub of pre-trained models, massive datasets, and the `transformers` library, which is the standard API for using, fine-tuning, and deploying modern AI models.",
    whenIsItUsed: "Downloading open-source LLMs, loading datasets for fine-tuning, and implementing inference pipelines in just a few lines of code.",
    whereIsItUsed: "Hugging Face Hub, `transformers` library, `datasets` library.",
    whatComesNext: "Prompt Engineering",
    learningOutcomes: [
      "Navigate the Hugging Face Model Hub and evaluate model cards.",
      "Use the `pipeline` API to run inference for sentiment analysis, summarization, and generation.",
      "Load and preprocess datasets using the `datasets` library.",
      "Initialize models and tokenizers (e.g., `AutoModelForCausalLM`, `AutoTokenizer`).",
      "Understand the difference between base models and instruction-tuned models."
    ],
    commonMistakes: [
      "Using the wrong tokenizer for a model—every model has a specific tokenizer, and mismatching them produces garbage output.",
      "Downloading 100GB models to a local laptop without checking system requirements.",
      "Trying to use a base model (e.g., Llama-2) as a chatbot without realizing it needs the chat/instruct version."
    ],
    realWorldApplications: [
      "Writing 5 lines of Python using the `transformers` pipeline to deploy a state-of-sart French-to-English translation model.",
      "Downloading the 'wikitext' dataset using the `datasets` library, which automatically handles caching and streaming.",
      "Hosting a custom fine-tuned model on the Hugging Face Hub so others can download and use it instantly."
    ],
    resources: [
      { type: "official", title: "Hugging Face Transformers Docs", url: "https://huggingface.co/docs/transformers/index" },
      { type: "video_en", title: "Hugging Face Crash Course", url: "https://www.youtube.com/watch?v=QEaBAZQCtwE" },
      { type: "video_hi", title: "Hugging Face Hindi Tutorial", url: "https://www.youtube.com/watch?v=KtmxPdcFxRQ" },
      { type: "article", title: "Hugging Face NLP Course (Official)", url: "https://huggingface.co/course/chapter1/1" },
      { type: "github", title: "Hugging Face Transformers Repo", url: "https://github.com/huggingface/transformers" },
      { type: "cheat_sheet", title: "Hugging Face Pipeline Cheat Sheet", url: "https://huggingface.co/docs/transformers/main_classes/pipelines" },
      { type: "deep_dive", title: "Under the Hood of Hugging Face Tokenizers", url: "https://huggingface.co/docs/tokenizers/index" }
    ]
  },
  "n_llm_1": {
    whyLearnThis: "LLMs are incredibly powerful, but they don't 'think'—they predict the next token based on context. Prompt engineering is the art of structuring that context to guide the model toward accurate, reasoned, and formatted outputs without fine-tuning.",
    whenIsItUsed: "Using LLM APIs (OpenAI, Anthropic), building AI agents, and improving zero-shot performance.",
    whereIsItUsed: "ChatGPT, API integrations, LangChain prompts, AI application development.",
    whatComesNext: "Fine-Tuning (LoRA/QLoRA)",
    learningOutcomes: [
      "Apply Few-Shot Prompting to provide examples of the desired output format.",
      "Implement Chain-of-Thought (CoT) prompting (`Think step-by-step`) to improve complex reasoning.",
      "Use Role Prompting (`Act as a senior software engineer`) to set tone and domain.",
      "Understand the anatomy of an API call: System prompt, User prompt, Assistant prompt, and Temperature.",
      "Prevent prompt injection and jailbreak attacks in user-facing applications."
    ],
    commonMistakes: [
      "Assuming the model can read your mind—if the prompt is vague, the output will be vague.",
      "Providing examples in a few-shot prompt that contain hidden biases, which the model will immediately copy.",
      "Setting Temperature to 1.0 for tasks requiring strict factual accuracy (it should be 0.0)."
    ],
    realWorldApplications: [
      "Using Chain-of-Thought prompting to increase an LLM's accuracy on math word problems from 40% to 80%.",
      "Structuring a prompt to strictly output valid JSON so the result can be parsed by a backend API.",
      "Using a System Prompt to constrain a customer service bot, ensuring it never promises refunds."
    ],
    resources: [
      { type: "official", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { type: "video_en", title: "Prompt Engineering Tutorial (Andrew Ng)", url: "https://www.youtube.com/watch?v=jC4v5AS4ART" },
      { type: "video_hi", title: "Prompt Engineering Hindi", url: "https://www.youtube.com/watch?v=AhyznRSDjw8" },
      { type: "article", title: "PromptingGuide.ai: Comprehensive Guide", url: "https://www.promptingguide.ai/" },
      { type: "github", title: "Awesome Prompt Engineering", url: "https://github.com/promptslab/Awesome-Prompt-Engineering" },
      { type: "cheat_sheet", title: "Prompt Engineering Cheat Sheet", url: "https://github.com/dair-ai/Prompt-Engineering-Guide" },
      { type: "deep_dive", title: "Chain-of-Thought Prompting Paper", url: "https://arxiv.org/abs/2201.11903" }
    ]
  },
  "n_llm_2": {
    whyLearnThis: "Full fine-tuning of an LLM requires massive GPU clusters. Parameter-Efficient Fine-Tuning (PEFT) methods like LoRA (Low-Rank Adaptation) allow you to train massive models (like Llama-3) on a single consumer GPU by freezing the base model and only training a tiny adapter.",
    whenIsItUsed: "Teaching an LLM a specific company tone, training on highly specialized medical/legal data, or teaching the model to output a strict custom syntax.",
    whereIsItUsed: "PEFT, LoRA, QLoRA, Hugging Face AutoTrain, Axolotl.",
    whatComesNext: "Open Source vs Closed LLMs",
    learningOutcomes: [
      "Explain the difference between full fine-tuning and PEFT (Parameter-Efficient Fine-Tuning).",
      "Understand how LoRA uses low-rank matrices to reduce trainable parameters by 99%.",
      "Explain QLoRA and how 4-bit quantization allows training a 7B model on a 16GB GPU.",
      "Format datasets into Instruction/Response pairs for supervised fine-tuning (SFT).",
      "Merge a trained LoRA adapter back into the base model."
    ],
    commonMistakes: [
      "Fine-tuning a model to teach it new facts (RAG is better for facts) instead of fine-tuning it for style, tone, or formatting.",
      "Using a learning rate that is too high, leading to catastrophic forgetting (the model forgets how to speak English).",
      "Not formatting the training data exactly how the base model's prompt template expects it."
    ],
    realWorldApplications: [
      "Using QLoRA to fine-tune Llama-3-8B on 10,000 corporate support tickets on a single RTX 4090 GPU.",
      "Training a LoRA adapter to make a model write SQL queries perfectly based on a specific company's database schema.",
      "Swapping different LoRA adapters at inference time (e.g., one adapter for Python code, one for translating French) on the same base model."
    ],
    resources: [
      { type: "official", title: "Hugging Face PEFT Documentation", url: "https://huggingface.co/docs/peft/index" },
      { type: "video_en", title: "LoRA and QLoRA Explained", url: "https://www.youtube.com/watch?v=t50ZZcjCApM" },
      { type: "video_hi", title: "Fine-Tuning LLMs Hindi", url: "https://www.youtube.com/watch?v=tIeHLnjs5U8" },
      { type: "article", title: "Understanding LoRA (Low-Rank Adaptation)", url: "https://huggingface.co/docs/peft/index" },
      { type: "github", title: "Axolotl: LLM Fine-tuning tool", url: "https://github.com/OpenAccess-AI-Collective/axolotl" },
      { type: "cheat_sheet", title: "LoRA Hyperparameters Guide", url: "https://lightning.ai/pages/community/lora-insights/" },
      { type: "deep_dive", title: "QLoRA Paper", url: "https://arxiv.org/abs/2305.14314" }
    ]
  },
  "n_llm_3": {
    whyLearnThis: "Choosing between a closed API (OpenAI GPT-4) and an open-source model (Meta Llama-3, Mistral) dictates your application's cost, privacy, latency, and operational overhead. AI engineers must evaluate these trade-offs.",
    whenIsItUsed: "Architecting an AI application, deciding deployment strategies, and managing enterprise data privacy requirements.",
    whereIsItUsed: "OpenAI, Anthropic (Closed) vs Hugging Face, vLLM, Ollama (Open).",
    whatComesNext: "Vector Databases",
    learningOutcomes: [
      "Compare the cost structures: pay-per-token (API) vs pay-per-compute (Open Source Hosting).",
      "Understand the privacy implications of sending PII/Corporate data to a third-party API.",
      "Evaluate open-weight models (Llama, Mistral) vs closed models (GPT-4, Claude).",
      "Understand local inference tools like Ollama and llama.cpp.",
      "Analyze the vendor lock-in risks of relying heavily on closed APIs."
    ],
    commonMistakes: [
      "Hosting an open-source 70B model yourself when API costs for GPT-4 would actually be cheaper given your low traffic volume.",
      "Sending sensitive patient healthcare data (HIPAA) to a consumer LLM API.",
      "Assuming open-source models are 'free'—hosting a GPU server 24/7 is expensive."
    ],
    realWorldApplications: [
      "A startup building a prototype rapidly using the OpenAI API, then switching to a self-hosted Llama-3 model to reduce costs as scale increases.",
      "A bank using a local, air-gapped open-source model to process financial documents due to strict regulatory compliance.",
      "Using Ollama to run Mistral-7B locally on an M3 Mac for offline development."
    ],
    resources: [
      { type: "official", title: "Llama 3 Official Site", url: "https://llama.meta.com/" },
      { type: "video_en", title: "Open Source vs Closed Source LLMs", url: "https://www.youtube.com/watch?v=L_Guz73e6fw" },
      { type: "video_hi", title: "LLM Options Explained Hindi", url: "https://www.youtube.com/watch?v=GNhgfuwEhCY" },
      { type: "article", title: "The Economics of Large Language Models", url: "https://a16z.com/" },
      { type: "github", title: "Ollama: Run LLMs locally", url: "https://github.com/ollama/ollama" },
      { type: "cheat_sheet", title: "LMSYS Chatbot Arena Leaderboard", url: "https://lmsys.org/blog/" },
      { type: "deep_dive", title: "Llama 3 Paper/Technical Report", url: "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/" }
    ]
  },
  "n_rag_1": {
    whyLearnThis: "Traditional databases search for exact keyword matches. Vector databases store high-dimensional embeddings and perform semantic search (nearest neighbor). They are the storage engine for Retrieval Augmented Generation (RAG).",
    whenIsItUsed: "Building semantic search engines, RAG systems, and recommendation systems.",
    whereIsItUsed: "Pinecone, Milvus, Weaviate, Qdrant, pgvector (PostgreSQL).",
    whatComesNext: "Retrieval Augmented Generation",
    learningOutcomes: [
      "Understand how a vector database stores dense vectors and metadata.",
      "Explain similarity search metrics: Cosine Similarity, Dot Product, Euclidean Distance.",
      "Understand the HNSW (Hierarchical Navigable Small World) index for fast approximate nearest neighbor (ANN) search.",
      "Implement a basic CRUD pipeline with a vector database (upsert vectors, query vectors).",
      "Compare dedicated vector DBs (Pinecone) with vector extensions (pgvector)."
    ],
    commonMistakes: [
      "Using a vector database without attaching metadata—you almost always need metadata (like `document_id` or `date`) to filter results.",
      "Re-embedding the entire database every time the embedding model changes (which is required, but often forgotten).",
      "Performing exact nearest neighbor search (k-NN) on massive datasets instead of Approximate Nearest Neighbor (ANN), causing slow queries."
    ],
    realWorldApplications: [
      "Storing 1 million Wikipedia article embeddings in Pinecone to allow users to search concepts rather than exact words.",
      "Using pgvector in a PostgreSQL database to add semantic search capabilities to an existing user application.",
      "Filtering a vector search in Weaviate by metadata (e.g., `similarity > 0.8 AND category == 'finance'`)."
    ],
    resources: [
      { type: "official", title: "Pinecone: What is a Vector Database?", url: "https://www.pinecone.io/learn/vector-database/" },
      { type: "video_en", title: "Vector Databases Explained", url: "https://www.youtube.com/watch?v=klTvEwg3oJ4" },
      { type: "video_hi", title: "Vector Databases Hindi", url: "https://www.youtube.com/watch?v=bFnxq1lLjOo" },
      { type: "article", title: "Comprehensive Guide to ANN algorithms", url: "https://towardsdatascience.com/comprehensive-guide-to-approximate-nearest-neighbors-algorithms-8b94f057d6b6" },
      { type: "github", title: "pgvector: Vector similarity search for Postgres", url: "https://github.com/pgvector/pgvector" },
      { type: "cheat_sheet", title: "Vector DB Comparison", url: "https://github.com/milvus-io/milvus" },
      { type: "deep_dive", title: "HNSW Algorithm Deep Dive", url: "https://www.pinecone.io/learn/series/faiss/hnsw/" }
    ]
  },
  "n_rag_2": {
    whyLearnThis: "LLMs hallucinate and their knowledge is frozen in time. Retrieval Augmented Generation (RAG) solves this by fetching relevant, private, or up-to-date documents from a vector database and injecting them into the LLM's prompt. It is the dominant architecture for enterprise AI.",
    whenIsItUsed: "Building 'Chat with your PDF' apps, corporate knowledge base chatbots, and customer support AI.",
    whereIsItUsed: "Enterprise AI chatbots, LangChain, LlamaIndex, OpenAI Assistants.",
    whatComesNext: "LangChain & LlamaIndex",
    learningOutcomes: [
      "Explain the RAG pipeline: Ingestion (Chunk -> Embed -> Store) and Retrieval (Query -> Embed -> Search -> Generate).",
      "Implement chunking strategies (fixed size, sentence-based, semantic) to break down large documents.",
      "Understand why naive RAG fails (bad retrieval) and implement advanced retrieval (Re-ranking).",
      "Design a prompt that forces the LLM to answer *only* using the provided context.",
      "Evaluate RAG systems using frameworks like RAGAS (Faithfulness, Answer Relevance)."
    ],
    commonMistakes: [
      "Chunking documents arbitrarily (e.g., exactly 500 characters) which cuts sentences in half and destroys semantic meaning.",
      "Blaming the LLM for hallucinations when the real problem is that the vector database retrieved irrelevant chunks.",
      "Not using a Re-ranker model after the initial vector search, leading to poor context quality."
    ],
    realWorldApplications: [
      "A law firm using RAG to allow lawyers to ask questions against thousands of previous case files.",
      "An internal HR chatbot that reads the company's private Notion wiki to answer employee policy questions.",
      "Using a Cohere Re-rank API to take the top 20 results from Pinecone, re-sort them for relevance, and pass the top 3 to GPT-4."
    ],
    resources: [
      { type: "official", title: "OpenAI: RAG Strategy", url: "https://platform.openai.com/docs/tutorials/meeting-minutes" },
      { type: "video_en", title: "RAG Architecture Explained", url: "https://www.youtube.com/watch?v=T-D1OfcDW1M" },
      { type: "video_hi", title: "RAG Tutorial Hindi", url: "https://www.youtube.com/watch?v=4B5FbZWZK4o" },
      { type: "article", title: "Advanced RAG Techniques", url: "https://python.langchain.com/docs/concepts/rag/" },
      { type: "github", title: "Ragas: Evaluation framework for RAG", url: "https://github.com/explodinggradients/ragas" },
      { type: "cheat_sheet", title: "RAG Architecture Cheat Sheet", url: "https://github.com/langchain-ai/langchain" },
      { type: "deep_dive", title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Original Paper)", url: "https://arxiv.org/abs/2005.11401" }
    ]
  },
  "n_rag_3": {
    whyLearnThis: "LangChain and LlamaIndex are the two most popular orchestration frameworks for building AI apps. They provide pre-built abstractions for connecting LLMs to data sources, vector databases, APIs, and memory.",
    whenIsItUsed: "Building complex RAG systems, AI agents with tools, and chatbots with conversational memory.",
    whereIsItUsed: "Python and TypeScript AI backends.",
    whatComesNext: "Model Tracking (MLflow/W&B)",
    learningOutcomes: [
      "Use LangChain's LCEL (LangChain Expression Language) to chain prompts, models, and output parsers.",
      "Implement conversation memory (Buffer, Summary) in a LangChain chatbot.",
      "Use LlamaIndex to easily ingest, parse, and query diverse document formats (PDFs, Notion, SQL).",
      "Create AI Agents that can use tools (e.g., search the web, execute Python code).",
      "Understand when to use LangChain (Agents/Chains) vs LlamaIndex (Data Ingestion/RAG)."
    ],
    commonMistakes: [
      "Over-relying on heavy framework abstractions instead of understanding the underlying API calls, making debugging a nightmare.",
      "Using LangChain for a simple 1-step API call where the standard OpenAI SDK would be much cleaner and faster.",
      "Failing to track prompt costs and token usage when building complex chains with multiple LLM calls."
    ],
    realWorldApplications: [
      "Using LlamaIndex to ingest a directory of 100 PDFs and create a query engine in 5 lines of code.",
      "Building a LangChain ReAct agent that has access to a Calculator tool and a Wikipedia search tool to answer complex questions.",
      "Using LangChain's Output Parsers to guarantee an LLM responds in a Pydantic-validated JSON format."
    ],
    resources: [
      { type: "official", title: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
      { type: "video_en", title: "LangChain Crash Course", url: "https://www.youtube.com/watch?v=aywZrzNaKjs" },
      { type: "video_hi", title: "LangChain Tutorial Hindi", url: "https://www.youtube.com/watch?v=PaFPbb66DxQ" },
      { type: "article", title: "LlamaIndex vs LangChain", url: "https://docs.llamaindex.ai/en/stable/" },
      { type: "github", title: "LlamaIndex Repository", url: "https://github.com/run-llama/llama_index" },
      { type: "cheat_sheet", title: "LangChain Expression Language (LCEL) Cheat Sheet", url: "https://python.langchain.com/docs/expression_language/" },
      { type: "deep_dive", title: "ReAct: Synergizing Reasoning and Acting in LLMs", url: "https://arxiv.org/abs/2210.03629" }
    ]
  },
  "n_ops_1": {
    whyLearnThis: "Machine learning involves hundreds of experiments (changing learning rates, architectures, datasets). Without tracking tools, you will lose track of which model produced which result. MLOps starts with tracking.",
    whenIsItUsed: "During the entire model development and training lifecycle.",
    whereIsItUsed: "Weights & Biases (W&B), MLflow, TensorBoard, Neptune.ai.",
    whatComesNext: "Model Serving (vLLM/TGI)",
    learningOutcomes: [
      "Integrate Weights & Biases or MLflow into a PyTorch training loop.",
      "Track hyperparameters, training loss, and validation metrics over time.",
      "Log artifacts (model weights, dataset versions) to ensure full reproducibility.",
      "Compare multiple experimental runs visually using dashboards.",
      "Understand the concept of a Model Registry for staging models before production."
    ],
    commonMistakes: [
      "Tracking experiments in a spreadsheet or a text file, which inevitably gets out of sync.",
      "Saving the model weights but failing to log the exact data version or code commit used to generate them.",
      "Not logging system metrics (GPU utilization, memory), making it hard to diagnose hardware bottlenecks."
    ],
    realWorldApplications: [
      "A team of 5 AI engineers using W&B to share and compare their hyperparameter tuning experiments in a centralized dashboard.",
      "Using MLflow Model Registry to promote a newly trained model from 'Staging' to 'Production'.",
      "Logging sample image predictions during training to visually inspect if the model is learning."
    ],
    resources: [
      { type: "official", title: "Weights & Biases Documentation", url: "https://docs.wandb.ai/" },
      { type: "video_en", title: "MLflow Crash Course", url: "https://www.youtube.com/watch?v=7h2A9u-P0E4" },
      { type: "video_hi", title: "MLOps and MLflow Hindi", url: "https://www.youtube.com/watch?v=Kdsp6soqA7o" },
      { type: "article", title: "Why You Need Experiment Tracking", url: "https://mlflow.org/docs/latest/tracking.html" },
      { type: "github", title: "MLflow Source Code", url: "https://github.com/mlflow/mlflow" },
      { type: "cheat_sheet", title: "W&B Quickstart Code", url: "https://wandb.ai/quickstart" },
      { type: "deep_dive", title: "Hidden Technical Debt in ML Systems (Google Paper)", url: "https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf" }
    ]
  },
  "n_ops_2": {
    whyLearnThis: "Deploying a 70-billion parameter LLM isn't like deploying a standard web app. Text generation is memory-heavy and slow. Advanced serving engines like vLLM and TGI use techniques like PagedAttention to maximize GPU throughput and reduce latency.",
    whenIsItUsed: "Taking a trained model or downloaded open-source LLM and hosting it as a production API.",
    whereIsItUsed: "vLLM, Text Generation Inference (TGI), TensorRT-LLM, Ray Serve, FastAPI.",
    whatComesNext: "AI Ethics & Safety",
    learningOutcomes: [
      "Understand the memory bottleneck of LLM inference (the KV Cache).",
      "Explain how PagedAttention (used in vLLM) solves memory fragmentation and dramatically increases throughput.",
      "Deploy an open-source model using the vLLM Docker container with an OpenAI-compatible API.",
      "Understand continuous batching vs static batching for handling concurrent requests.",
      "Optimize models for inference using Quantization (AWQ, GPTQ) to run on smaller GPUs."
    ],
    commonMistakes: [
      "Using standard Hugging Face `pipeline` in a production API (FastAPI) instead of a dedicated serving engine, resulting in terrible concurrency.",
      "Not understanding GPU VRAM requirements—a 70B model needs ~140GB of VRAM in fp16 just to load, requiring multi-GPU tensor parallelism.",
      "Deploying without setting max sequence lengths, allowing a single massive user prompt to cause an Out-Of-Memory (OOM) error."
    ],
    realWorldApplications: [
      "Using vLLM to serve Llama-3-8B, achieving 10x the throughput of standard Hugging Face inference due to PagedAttention and continuous batching.",
      "Deploying a model across 4 GPUs using Tensor Parallelism so a single huge model can fit in memory.",
      "Quantizing a model with AWQ to reduce its memory footprint by 50% with negligible accuracy loss."
    ],
    resources: [
      { type: "official", title: "vLLM Documentation", url: "https://docs.vllm.ai/en/latest/" },
      { type: "video_en", title: "Optimizing LLM Inference (vLLM & PagedAttention)", url: "https://www.youtube.com/watch?v=5ZlakKIbqZk" },
      { type: "video_hi", title: "LLM Deployment in Hindi", url: "https://www.youtube.com/watch?v=nFTQ7kHQWtc" },
      { type: "article", title: "Understanding PagedAttention", url: "https://blog.vllm.ai/2023/06/20/vllm.html" },
      { type: "github", title: "Text Generation Inference (Hugging Face)", url: "https://github.com/huggingface/text-generation-inference" },
      { type: "cheat_sheet", title: "LLM Memory Requirements Calculator", url: "https://huggingface.co/spaces/hf-accelerate/model-memory-usage" },
      { type: "deep_dive", title: "PagedAttention Paper", url: "https://arxiv.org/abs/2309.06180" }
    ]
  },
  "n_ops_3": {
    whyLearnThis: "AI models amplify the biases in their training data and can generate harmful, toxic, or dangerous content. As an AI Engineer, you are responsible for implementing guardrails, red-teaming, and ensuring your systems behave safely in production.",
    whenIsItUsed: "During data collection, model evaluation, and deployment of user-facing AI applications.",
    whereIsItUsed: "Llama Guard, NeMo Guardrails, OpenAI Moderation API, RLHF.",
    whatComesNext: "AI Engineer Complete",
    learningOutcomes: [
      "Understand algorithmic bias and how imbalanced training data impacts minority groups.",
      "Implement prompt guardrails (e.g., NeMo Guardrails) to prevent chatbots from answering off-topic or harmful queries.",
      "Understand the concept of Red Teaming to proactively find vulnerabilities in AI systems.",
      "Explain how Reinforcement Learning from Human Feedback (RLHF) aligns models to human values.",
      "Familiarize with data privacy laws (GDPR) and copyright implications regarding AI training data."
    ],
    commonMistakes: [
      "Assuming a model is unbiased because 'math isn't biased'—the math optimizes for the biased human data it was fed.",
      "Deploying an open-source base model to a public chatbot without applying safety guardrails or alignment.",
      "Logging sensitive user inputs (PII) to an external LLM API without anonymization."
    ],
    realWorldApplications: [
      "Using the OpenAI Moderation API as a filter to block toxic user inputs before they reach the main LLM.",
      "Red teaming a financial chatbot to ensure it cannot be tricked into giving personalized investment advice (which is illegal).",
      "Using Meta's Llama Guard to classify the safety of both user inputs and LLM outputs in real-time."
    ],
    resources: [
      { type: "official", title: "NVIDIA NeMo Guardrails", url: "https://github.com/NVIDIA/NeMo-Guardrails" },
      { type: "video_en", title: "AI Safety and Alignment (Computerphile)", url: "https://www.youtube.com/watch?v=gT5N_Y_vLwI" },
      { type: "video_hi", title: "AI Ethics and Bias Hindi", url: "https://www.youtube.com/watch?v=VriqpZSHBd8" },
      { type: "article", title: "Anthropic: Constitutional AI", url: "https://www.anthropic.com/index/constitutional-ai-harmlessness-from-ai-feedback" },
      { type: "github", title: "Awesome AI Guidelines", url: "https://github.com/EthicalML/awesome-artificial-intelligence-guidelines" },
      { type: "cheat_sheet", title: "OWASP Top 10 for LLMs", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { type: "deep_dive", title: "Llama 2: Responsible Use Guide", url: "https://ai.meta.com/llama/responsible-use-guide/" }
    ]
  }
};
