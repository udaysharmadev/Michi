import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_mlm_1": {
    whyLearnThis: "Linear algebra is the mathematical backbone of machine learning. Matrices represent datasets, vectors represent data points, and matrix operations are how neural networks transform inputs to outputs. You cannot understand what's happening inside an ML model without it.",
    whenIsItUsed: "Understanding how neural network layers apply transformations, implementing PCA, working with embedding spaces, and optimizing models.",
    whereIsItUsed: "NumPy, PyTorch, TensorFlow, scikit-learn — every ML library is built on linear algebra operations.",
    whatComesNext: "Calculus & Optimization",
    learningOutcomes: [
      "Perform matrix multiplication, transposition, and inversion by hand and in NumPy.",
      "Understand vectors, dot products, and their geometric interpretation.",
      "Compute eigenvalues and eigenvectors and explain their significance for PCA.",
      "Apply SVD (Singular Value Decomposition) for dimensionality reduction.",
      "Explain how neural network weight matrices transform input data."
    ],
    commonMistakes: [
      "Treating linear algebra as abstract math rather than connecting it to ML operations.",
      "Ignoring broadcasting rules in NumPy, causing subtle shape errors in matrix operations.",
      "Not understanding that many 'advanced' ML concepts are just linear algebra in disguise."
    ],
    realWorldApplications: [
      "PCA reducing a 1000-feature dataset to 50 principal components while retaining 95% of variance.",
      "Word embeddings: each word is a 768-dimensional vector, and similarity is computed via dot products.",
      "Matrix factorization powering Netflix-style collaborative filtering recommendation systems."
    ],
    resources: [
      { type: "official", title: "NumPy Linear Algebra Documentation", url: "https://numpy.org/doc/stable/reference/routines.linalg.html" },
      { type: "video_en", title: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs" },
      { type: "video_hi", title: "Linear Algebra in Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=mTmqgR9M_vg" },
      { type: "article", title: "A Beginner's Guide to the Mathematics of Neural Networks", url: "https://numpy.org/doc/stable/user/quickstart.html" },
      { type: "github", title: "fastai/numerical-linear-algebra: Applied Linear Algebra course", url: "https://github.com/fastai/numerical-linear-algebra" },
      { type: "cheat_sheet", title: "Linear Algebra Cheat Sheet for Deep Learning", url: "https://ml-cheatsheet.readthedocs.io/en/latest/linear_algebra.html" },
      { type: "deep_dive", title: "Gilbert Strang: Linear Algebra MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" }
    ]
  },
  "n_mlm_2": {
    whyLearnThis: "Calculus is how machine learning models learn. Gradient descent — the algorithm that trains every neural network — is a direct application of differential calculus. Understanding derivatives lets you understand why models converge, diverge, or get stuck.",
    whenIsItUsed: "Understanding backpropagation, choosing learning rates, implementing custom loss functions, and debugging training instability.",
    whereIsItUsed: "PyTorch autograd, TensorFlow gradients, custom optimizer implementations.",
    whatComesNext: "Probability Theory",
    learningOutcomes: [
      "Compute partial derivatives and understand the chain rule.",
      "Explain gradient descent and how the learning rate affects convergence.",
      "Understand backpropagation as repeated application of the chain rule.",
      "Explain why convex optimization is easier than non-convex.",
      "Use PyTorch's autograd to compute gradients automatically."
    ],
    commonMistakes: [
      "Treating backpropagation as a black box — understanding it is essential for debugging training issues.",
      "Using too high a learning rate, causing training loss to diverge.",
      "Not understanding saddle points and local minima in non-convex optimization."
    ],
    realWorldApplications: [
      "Gradient descent minimizing cross-entropy loss as a neural network learns to classify images.",
      "Adam optimizer adapting the learning rate per parameter based on gradient moments.",
      "Learning rate schedulers reducing the learning rate when validation loss plateaus."
    ],
    resources: [
      { type: "official", title: "PyTorch Autograd Documentation", url: "https://pytorch.org/docs/stable/autograd.html" },
      { type: "video_en", title: "Essence of Calculus (3Blue1Brown)", url: "https://www.youtube.com/watch?v=WUvTyaaNkzM" },
      { type: "video_hi", title: "Calculus for ML in Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=sxQaBpKfDRk" },
      { type: "article", title: "Calculus for Machine Learning (Towards Data Science)", url: "https://www.khanacademy.org/math/calculus-1" },
      { type: "github", title: "karpathy/micrograd: Tiny scalar autograd engine", url: "https://github.com/karpathy/micrograd" },
      { type: "cheat_sheet", title: "ML Calculus Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io/en/latest/calculus.html" },
      { type: "deep_dive", title: "The Matrix Calculus You Need For Deep Learning", url: "https://explained.ai/matrix-calculus/" }
    ]
  },
  "n_mlm_3": {
    whyLearnThis: "Probability theory is how ML models represent uncertainty. Bayesian inference, probabilistic graphical models, and the theoretical foundations of regularization all come from probability. Without it, you're treating ML as a black box.",
    whenIsItUsed: "Evaluating model confidence, understanding Bayesian inference, implementing probabilistic models, and interpreting statistical tests.",
    whereIsItUsed: "Probabilistic ML frameworks (PyMC, Stan), scikit-learn's BayesianRidge, uncertainty quantification in medical AI.",
    whatComesNext: "Pandas & NumPy",
    learningOutcomes: [
      "Apply Bayes' theorem to update probabilities given new evidence.",
      "Explain probability distributions: Gaussian, Bernoulli, Binomial, Poisson.",
      "Compute conditional probability, joint probability, and marginal probability.",
      "Understand Maximum Likelihood Estimation (MLE) and Maximum a Posteriori (MAP).",
      "Calculate and interpret confidence intervals and p-values."
    ],
    commonMistakes: [
      "Confusing correlation and causation in statistical analyses.",
      "Interpreting a p-value as the probability that the null hypothesis is true (it is not).",
      "Assuming data is normally distributed without testing — many real-world distributions are not."
    ],
    realWorldApplications: [
      "Naive Bayes spam classifier computing P(spam | words in email) using Bayes' theorem.",
      "A/B testing using hypothesis testing to determine if a new feature increases conversion rate.",
      "Uncertainty quantification in medical AI — not just 'tumor detected' but 'tumor detected with 78% confidence'."
    ],
    resources: [
      { type: "official", title: "SciPy Statistics Documentation", url: "https://docs.scipy.org/doc/scipy/reference/stats.html" },
      { type: "video_en", title: "Statistics and Probability (StatQuest)", url: "https://www.youtube.com/watch?v=vYimHJMuTa0" },
      { type: "video_hi", title: "Probability and Statistics Hindi (NPTEL)", url: "https://www.youtube.com/watch?v=KzfWUEJjG18" },
      { type: "article", title: "Probability for Machine Learning (Towards Data Science)", url: "https://www.khanacademy.org/math/statistics-probability" },
      { type: "github", title: "probml/pml-book: Probabilistic Machine Learning", url: "https://github.com/probml/pml-book" },
      { type: "cheat_sheet", title: "Probability Cheat Sheet for ML", url: "https://ml-cheatsheet.readthedocs.io/en/latest/math_notation.html" },
      { type: "deep_dive", title: "Think Stats: Exploratory Data Analysis (free book)", url: "https://greenteapress.com/wp/think-stats-2e/" }
    ]
  },
  "n_mlp_1": {
    whyLearnThis: "Pandas and NumPy are the two foundational libraries for data manipulation in Python. Every ML project begins with loading, cleaning, and exploring data — and these libraries are how you do it.",
    whenIsItUsed: "Loading datasets (CSV, JSON, Parquet), cleaning messy data, transforming features, and doing exploratory data analysis.",
    whereIsItUsed: "Data preprocessing pipelines, Jupyter notebooks, scikit-learn preprocessing, and data validation.",
    whatComesNext: "Data Cleaning & Preprocessing",
    learningOutcomes: [
      "Load, filter, group, merge, and aggregate DataFrames in Pandas.",
      "Use NumPy for vectorized math operations, broadcasting, and array manipulation.",
      "Handle missing values: detect, impute, and drop appropriately.",
      "Use Pandas groupby, pivot_table, and merge for complex data transformations.",
      "Profile datasets with .describe(), .info(), and .value_counts()."
    ],
    commonMistakes: [
      "Using Python loops over DataFrames instead of vectorized Pandas operations — 100x slower.",
      "Modifying DataFrames in-place without understanding the SettingWithCopyWarning.",
      "Not resetting the index after filtering, causing misaligned indices."
    ],
    realWorldApplications: [
      "Merging sales and customer DataFrames to compute revenue per customer segment.",
      "Using NumPy to normalize a 100,000-row feature matrix for ML training in milliseconds.",
      "Detecting and imputing missing values in a medical dataset before training a model."
    ],
    resources: [
      { type: "official", title: "Pandas User Guide", url: "https://pandas.pydata.org/docs/user_guide/index.html" },
      { type: "video_en", title: "Pandas Full Course (Keith Galli)", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
      { type: "video_hi", title: "Pandas and NumPy in Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=CmorAWRsCAw" },
      { type: "article", title: "10 Minutes to Pandas (official)", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
      { type: "github", title: "jvns/pandas-cookbook: Recipes for using Pandas", url: "https://github.com/jvns/pandas-cookbook" },
      { type: "cheat_sheet", title: "Pandas Cheat Sheet (official PDF)", url: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf" },
      { type: "deep_dive", title: "Python for Data Analysis (Wes McKinney — free sample)", url: "https://wesmckinney.com/book/" }
    ]
  },
  "n_mlp_2": {
    whyLearnThis: "Real-world data is messy — missing values, outliers, inconsistent formats, and duplicate records. ML models learn from what you give them; garbage in, garbage out. Data cleaning is where 80% of a data scientist's time is spent.",
    whenIsItUsed: "Before any model training — data cleaning is the first and most important step in any ML pipeline.",
    whereIsItUsed: "Scikit-learn preprocessing, Pandas, OpenRefine, data validation with Pydantic or Great Expectations.",
    whatComesNext: "Feature Engineering",
    learningOutcomes: [
      "Detect and handle missing values with appropriate strategies (mean imputation, forward fill, model-based).",
      "Identify and handle outliers using IQR, Z-scores, and domain knowledge.",
      "Standardize and normalize features using StandardScaler and MinMaxScaler.",
      "Encode categorical variables with LabelEncoder and OneHotEncoder.",
      "Split data properly into train/validation/test sets without data leakage."
    ],
    commonMistakes: [
      "Fitting the scaler on the entire dataset instead of only the training data — this causes data leakage.",
      "Dropping all rows with missing values when a small percentage of rows have most missing values.",
      "Encoding categorical variables with Label Encoding when ordinal relationship doesn't exist."
    ],
    realWorldApplications: [
      "A scikit-learn Pipeline combining imputation, scaling, and encoding to prevent data leakage.",
      "Detecting outliers in a manufacturing sensor dataset using IQR and investigating root causes.",
      "Great Expectations validating that production data matches the statistical profile of training data."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Preprocessing Documentation", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
      { type: "video_en", title: "Data Cleaning with Python (Corey Schafer)", url: "https://www.youtube.com/watch?v=xi0vhXFPegw" },
      { type: "video_hi", title: "Data Preprocessing Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=7uwa9aPbBRU" },
      { type: "article", title: "Towards Data Science: Data Cleaning Techniques", url: "https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4" },
      { type: "github", title: "ResidentMario/missingno: Missing data visualization", url: "https://github.com/ResidentMario/missingno" },
      { type: "cheat_sheet", title: "Scikit-learn Preprocessing Cheat Sheet", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
      { type: "deep_dive", title: "Data Quality: The Foundation of ML", url: "https://www.deeplearning.ai/the-batch/" }
    ]
  },
  "n_mlp_3": {
    whyLearnThis: "Raw features are rarely in the best form for a model. Feature engineering — creating new features from existing data, encoding domain knowledge, and selecting the most predictive variables — often has more impact on model performance than algorithm choice.",
    whenIsItUsed: "After data cleaning and before model training. Feature engineering is an iterative process informed by model performance and domain expertise.",
    whereIsItUsed: "Kaggle competitions, production ML pipelines, time series forecasting, NLP preprocessing.",
    whatComesNext: "Linear & Logistic Regression",
    learningOutcomes: [
      "Create interaction features, polynomial features, and log transformations.",
      "Encode cyclic features (hour of day, day of week) using sin/cos encoding.",
      "Apply target encoding and frequency encoding for high-cardinality categoricals.",
      "Use feature selection: SelectKBest, recursive feature elimination (RFE), feature importance from trees.",
      "Build reusable feature pipelines with scikit-learn's Pipeline and FeatureUnion."
    ],
    commonMistakes: [
      "Creating features before splitting train/test data — this leaks information about the test set into training.",
      "Adding too many features without regularization, causing overfitting.",
      "Not using domain knowledge — the best features come from understanding the problem, not just correlations."
    ],
    realWorldApplications: [
      "Adding 'day_of_week' and 'is_holiday' features to a demand forecasting model, improving RMSE by 20%.",
      "Using word count, sentiment score, and reading level as features for a document classification task.",
      "Kaggle grandmaster winning a competition through feature engineering, not a better model."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Feature Engineering Documentation", url: "https://scikit-learn.org/stable/modules/feature_extraction.html" },
      { type: "video_en", title: "Feature Engineering for ML (StatQuest)", url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
      { type: "video_hi", title: "Feature Engineering Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=DKSZHN7jLmI" },
      { type: "article", title: "Feature Engineering Techniques (Towards Data Science)", url: "https://towardsdatascience.com/feature-engineering-for-machine-learning-3a5e293a5114" },
      { type: "github", title: "feature-engine/feature_engine: Feature engineering library", url: "https://github.com/feature-engine/feature_engine" },
      { type: "cheat_sheet", title: "Feature Engineering Cheat Sheet", url: "https://www.kaggle.com/learn/feature-engineering" },
      { type: "deep_dive", title: "Applied Machine Learning: Feature Engineering", url: "https://madewithml.com/courses/mlops/feature-store/" }
    ]
  },
  "n_sup_1": {
    whyLearnThis: "Linear and logistic regression are the simplest and most interpretable supervised learning models. They form the baseline that every more complex model must beat. Understanding them deeply — the math, assumptions, and diagnostics — is fundamental.",
    whenIsItUsed: "Predicting continuous values (linear regression) or binary outcomes (logistic regression). Always start with these as your baseline model.",
    whereIsItUsed: "Finance (predicting stock returns), healthcare (predicting disease risk), marketing (predicting customer churn).",
    whatComesNext: "Decision Trees & Random Forests",
    learningOutcomes: [
      "Fit a linear regression model and interpret coefficients, R², and residual plots.",
      "Identify and handle violations of linear regression assumptions (normality, homoscedasticity, multicollinearity).",
      "Use logistic regression for binary classification and interpret log-odds and probabilities.",
      "Apply L1 (Lasso) and L2 (Ridge) regularization to prevent overfitting.",
      "Use cross-validation to get unbiased performance estimates."
    ],
    commonMistakes: [
      "Not checking linear regression assumptions before interpreting results.",
      "Using linear regression for bounded outputs (probabilities, counts) instead of appropriate GLMs.",
      "Forgetting to scale features before applying regularization — Lasso/Ridge are sensitive to feature scale."
    ],
    realWorldApplications: [
      "Predicting house prices using linear regression with 20 features.",
      "Logistic regression predicting customer churn probability for a telecom company.",
      "Ridge regression preventing overfitting on a dataset with 500 features and only 200 samples."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Linear Model Documentation", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
      { type: "video_en", title: "Linear Regression (StatQuest)", url: "https://www.youtube.com/watch?v=7ArmBVF2dCs" },
      { type: "video_hi", title: "Regression Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=3uPYrJalmEI" },
      { type: "article", title: "Towards Data Science: Ridge and Lasso Regression", url: "https://towardsdatascience.com/ridge-and-lasso-regression-a-complete-guide-with-python-scikit-learn-e20e34bcbf0b" },
      { type: "github", title: "eriklindernoren/ML-From-Scratch: Linear Regression from scratch", url: "https://github.com/eriklindernoren/ML-From-Scratch" },
      { type: "cheat_sheet", title: "ML Algorithms Cheat Sheet (scikit-learn)", url: "https://scikit-learn.org/stable/tutorial/machine_learning_map/" },
      { type: "deep_dive", title: "StatQuest: Statistical Learning Playlist", url: "https://www.youtube.com/watch?v=i_LwzRVP7bg" }
    ]
  },
  "n_sup_2": {
    whyLearnThis: "Decision trees are the building block of the most powerful tabular ML models (Random Forests, XGBoost, LightGBM). Understanding how a single tree works — splits, impurity measures, depth — is essential to understanding ensemble methods that win most Kaggle competitions.",
    whenIsItUsed: "Tabular data classification and regression, when you need interpretable models, or as base learners for ensembles.",
    whereIsItUsed: "Credit scoring, fraud detection, medical diagnosis, and virtually every tabular ML competition.",
    whatComesNext: "Support Vector Machines (SVM)",
    learningOutcomes: [
      "Explain how decision trees split data using Gini impurity and information gain.",
      "Control overfitting with max_depth, min_samples_leaf, and pruning.",
      "Train a Random Forest and understand how bagging reduces variance.",
      "Use feature importances from tree models for feature selection.",
      "Train XGBoost/LightGBM and understand gradient boosting vs bagging."
    ],
    commonMistakes: [
      "Growing trees without depth limits — an unpruned decision tree memorizes training data perfectly (overfitting).",
      "Treating feature importance from tree models as causal rather than correlational.",
      "Not tuning n_estimators for Random Forests — more trees always helps until diminishing returns."
    ],
    realWorldApplications: [
      "Random Forest model detecting credit card fraud, achieving 99.2% precision.",
      "XGBoost model winning the $1.7M Heritage Health Prize competition.",
      "Decision tree providing an interpretable model for medical diagnosis that doctors can audit."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Decision Trees", url: "https://scikit-learn.org/stable/modules/tree.html" },
      { type: "video_en", title: "Random Forests (StatQuest)", url: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" },
      { type: "video_hi", title: "Decision Trees Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=i_LwzRVP7bg" },
      { type: "article", title: "An Introduction to Random Forests", url: "https://www.stat.berkeley.edu/~breiman/RandomForests/cc_home.htm" },
      { type: "github", title: "dmlc/xgboost: Gradient Boosted Trees", url: "https://github.com/dmlc/xgboost" },
      { type: "cheat_sheet", title: "XGBoost Parameters Cheat Sheet", url: "https://xgboost.readthedocs.io/en/stable/parameter.html" },
      { type: "deep_dive", title: "Understanding Gradient Boosting at Theory Level", url: "https://explained.ai/gradient-boosting/" }
    ]
  },
  "n_sup_3": {
    whyLearnThis: "SVMs are powerful classifiers that find the optimal hyperplane separating classes with maximum margin. They excel in high-dimensional spaces and with small datasets where neural networks would overfit. The kernel trick allows SVMs to handle non-linearly separable data.",
    whenIsItUsed: "Text classification, image classification (before deep learning took over), bioinformatics with small high-dimensional datasets.",
    whereIsItUsed: "Spam filtering, face detection research, cancer classification in genomics.",
    whatComesNext: "K-Means Clustering",
    learningOutcomes: [
      "Explain the concept of a maximum-margin hyperplane and support vectors.",
      "Apply the kernel trick (RBF, polynomial, linear) to handle non-linear boundaries.",
      "Tune C (regularization) and kernel parameters using GridSearchCV.",
      "Use SVM for multi-class classification with one-vs-rest or one-vs-one strategies.",
      "Understand when SVMs outperform neural networks (small data, high dimensions)."
    ],
    commonMistakes: [
      "Not scaling features before applying SVM — it is extremely sensitive to feature magnitude.",
      "Using RBF kernel as default without testing — linear kernel is often better for text classification.",
      "Applying SVM to large datasets without considering that training is O(n²) to O(n³)."
    ],
    realWorldApplications: [
      "SVM classifying spam vs. ham emails using TF-IDF features.",
      "SVM in bioinformatics classifying cancer subtypes from gene expression data (thousands of features, hundreds of samples).",
      "Historical face detection systems using SVMs on HOG features before CNNs."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: SVM Documentation", url: "https://scikit-learn.org/stable/modules/svm.html" },
      { type: "video_en", title: "Support Vector Machines (StatQuest)", url: "https://www.youtube.com/watch?v=efR1C6CvhmE" },
      { type: "video_hi", title: "SVM Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=3uPYrJalmEI" },
      { type: "article", title: "Understanding the Mathematics Behind SVMs", url: "https://towardsdatascience.com/understanding-support-vector-machine-part-1-lagrange-multipliers-5c24a52ffc5e" },
      { type: "github", title: "eriklindernoren/ML-From-Scratch: SVM from scratch", url: "https://github.com/eriklindernoren/ML-From-Scratch#support-vector-machine" },
      { type: "cheat_sheet", title: "SVM Parameters Reference", url: "https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html" },
      { type: "deep_dive", title: "Distill: Understanding SVMs and the Kernel Trick", url: "https://distill.pub/2020/circuits/" }
    ]
  },
  "n_unsup_1": {
    whyLearnThis: "K-Means is the most widely used clustering algorithm. It groups unlabeled data into k clusters, enabling customer segmentation, anomaly detection, and data exploration when you don't know the structure in advance.",
    whenIsItUsed: "Customer segmentation, document clustering, image compression, and as a preprocessing step to discover latent structure in data.",
    whereIsItUsed: "CRM systems (customer segments), content recommendation, genomics (gene expression clustering).",
    whatComesNext: "PCA & Dimensionality Reduction",
    learningOutcomes: [
      "Implement K-Means and explain the algorithm: initialize centroids, assign points, update centroids, repeat.",
      "Choose k using the elbow method and silhouette score.",
      "Handle the sensitivity to initialization using k-means++ seeding.",
      "Apply K-Means to segment customers by purchase behavior.",
      "Understand K-Means limitations: assumes spherical clusters, sensitive to outliers."
    ],
    commonMistakes: [
      "Choosing k arbitrarily without using the elbow method or domain knowledge.",
      "Applying K-Means to high-dimensional data without first reducing dimensions — the curse of dimensionality makes distance metrics meaningless.",
      "Not scaling features before clustering — K-Means is distance-based and sensitive to scale."
    ],
    realWorldApplications: [
      "An e-commerce company segmenting 2 million customers into 8 behavioral clusters for targeted marketing.",
      "K-Means compressing an image by replacing each pixel with the nearest centroid color.",
      "Clustering support tickets into categories to prioritize and route them automatically."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: K-Means Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html#k-means" },
      { type: "video_en", title: "K-Means Clustering (StatQuest)", url: "https://www.youtube.com/watch?v=4b5d3muPQmA" },
      { type: "video_hi", title: "K-Means Clustering Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=Aa4MACKaDC0" },
      { type: "article", title: "K-Means Clustering Explained (Towards Data Science)", url: "https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1" },
      { type: "github", title: "eriklindernoren/ML-From-Scratch: K-Means from scratch", url: "https://github.com/eriklindernoren/ML-From-Scratch#k-means" },
      { type: "cheat_sheet", title: "Clustering Algorithms Comparison", url: "https://scikit-learn.org/stable/auto_examples/cluster/plot_cluster_comparison.html" },
      { type: "deep_dive", title: "Visualizing K-Means Clustering", url: "https://www.naftaliharris.com/blog/visualizing-k-means-clustering/" }
    ]
  },
  "n_unsup_2": {
    whyLearnThis: "PCA reduces the number of features while retaining the most information, making models faster, preventing overfitting, and enabling visualization of high-dimensional data in 2D or 3D. It's the most used dimensionality reduction technique.",
    whenIsItUsed: "Visualizing high-dimensional datasets, reducing feature count before training, removing noise from data, and compressing images.",
    whereIsItUsed: "Face recognition (Eigenfaces), visualization of word embeddings, genome analysis, image compression.",
    whatComesNext: "Anomaly Detection",
    learningOutcomes: [
      "Explain PCA geometrically: finding directions of maximum variance (principal components).",
      "Apply PCA in scikit-learn and choose the number of components using explained variance ratio.",
      "Visualize 100-dimensional data in 2D using PCA and t-SNE.",
      "Understand when PCA is appropriate (linear relationships) vs. when to use non-linear methods (UMAP, t-SNE).",
      "Apply PCA as a preprocessing step before logistic regression or K-Means."
    ],
    commonMistakes: [
      "Applying PCA to features without standardizing them first — PCA is sensitive to feature scale.",
      "Choosing components to retain based on a fixed 95% variance threshold without questioning if it's appropriate.",
      "Using PCA for categorical data — it requires numerical features with linear relationships."
    ],
    realWorldApplications: [
      "Reducing a 50,000-word bag-of-words matrix to 200 principal components for a text classifier.",
      "Visualizing customer clusters in 2D after reducing 30 behavioral features to 2 components.",
      "Eigenfaces: representing 10,000 face images as linear combinations of 150 'basis' faces."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: PCA Documentation", url: "https://scikit-learn.org/stable/modules/decomposition.html#pca" },
      { type: "video_en", title: "Principal Component Analysis (StatQuest)", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ" },
      { type: "video_hi", title: "PCA Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=r8d8s-gPNwY" },
      { type: "article", title: "A Step-by-Step Explanation of PCA", url: "https://builtin.com/data-science/step-step-explanation-principal-component-analysis" },
      { type: "github", title: "lmcinnes/umap: UMAP dimension reduction", url: "https://github.com/lmcinnes/umap" },
      { type: "cheat_sheet", title: "Dimensionality Reduction Techniques Comparison", url: "https://scikit-learn.org/stable/modules/manifold.html" },
      { type: "deep_dive", title: "Visualizing High-Dimensional Data with t-SNE", url: "https://distill.pub/2016/misread-tsne/" }
    ]
  },
  "n_unsup_3": {
    whyLearnThis: "Anomaly detection identifies data points that deviate significantly from expected patterns — fraud, equipment failures, cyber intrusions — without requiring labeled examples of anomalies, which are rare by definition.",
    whenIsItUsed: "Fraud detection in financial transactions, predictive maintenance in manufacturing, intrusion detection in cybersecurity, and quality control.",
    whereIsItUsed: "Stripe/PayPal fraud detection, AWS GuardDuty (network anomaly detection), industrial IoT sensor monitoring.",
    whatComesNext: "Perceptrons & Activation Functions",
    learningOutcomes: [
      "Apply Isolation Forest for unsupervised anomaly detection and tune the contamination parameter.",
      "Use Local Outlier Factor (LOF) to detect density-based anomalies.",
      "Set statistical thresholds using Z-scores and IQR for univariate outlier detection.",
      "Evaluate anomaly detectors when true labels are unavailable.",
      "Apply autoencoders for deep learning-based anomaly detection."
    ],
    commonMistakes: [
      "Treating all anomalies as errors — some anomalies are valid edge cases that require investigation, not deletion.",
      "Not defining what 'anomaly' means in the domain context before choosing an algorithm.",
      "Evaluating anomaly detection on highly imbalanced test sets using accuracy — use precision-recall instead."
    ],
    realWorldApplications: [
      "Isolation Forest detecting fraudulent transactions that differ from normal spending patterns.",
      "Autoencoder trained on normal machine sensor data flagging unusual vibration patterns indicating a bearing failure.",
      "Time series anomaly detection identifying unusual traffic spikes in a website analytics stream."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Novelty and Outlier Detection", url: "https://scikit-learn.org/stable/modules/outlier_detection.html" },
      { type: "video_en", title: "Anomaly Detection (Andrew Ng — Coursera)", url: "https://www.youtube.com/watch?v=ZjaBn93YPWo" },
      { type: "video_hi", title: "Anomaly Detection Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=GNhgfuwEhCY" },
      { type: "article", title: "Introduction to Anomaly Detection (Towards Data Science)", url: "https://scikit-learn.org/stable/modules/outlier_detection.html" },
      { type: "github", title: "yzhao062/pyod: Python Outlier Detection library", url: "https://github.com/yzhao062/pyod" },
      { type: "cheat_sheet", title: "Outlier Detection Algorithms Comparison", url: "https://scikit-learn.org/stable/auto_examples/miscellaneous/plot_anomaly_comparison.html" },
      { type: "deep_dive", title: "Deep Learning for Anomaly Detection", url: "https://arxiv.org/abs/1901.03407" }
    ]
  },
  "n_mldl_1": {
    whyLearnThis: "Perceptrons are the basic building blocks of neural networks. Understanding how a single neuron works — inputs, weights, bias, activation function — gives you the mental model needed to understand the entire deep learning stack.",
    whenIsItUsed: "Building neural network architectures from scratch, debugging training issues, and understanding why certain activation functions are used where.",
    whereIsItUsed: "PyTorch and TensorFlow neural network layers, custom neural network implementations.",
    whatComesNext: "PyTorch / TensorFlow Basics",
    learningOutcomes: [
      "Explain the perceptron: weighted sum of inputs + bias, passed through an activation function.",
      "Implement a single neuron in Python from scratch.",
      "Compare activation functions: ReLU, sigmoid, tanh, softmax — and when to use each.",
      "Understand the vanishing gradient problem and why ReLU solves it.",
      "Build a simple multi-layer perceptron (MLP) for binary classification."
    ],
    commonMistakes: [
      "Using sigmoid or tanh in hidden layers — they cause vanishing gradients; use ReLU instead.",
      "Not using softmax in the output layer for multi-class classification.",
      "Initializing all weights to zero — this causes symmetric neurons that all learn the same thing."
    ],
    realWorldApplications: [
      "An MLP classifying handwritten MNIST digits with 98% accuracy.",
      "ReLU activation enabling deep networks (50+ layers) to be trained without vanishing gradients.",
      "Sigmoid activation in the output layer giving probability output for binary classification."
    ],
    resources: [
      { type: "official", title: "PyTorch: Neural Networks Tutorial", url: "https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html" },
      { type: "video_en", title: "Neural Networks (3Blue1Brown)", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { type: "video_hi", title: "Neural Networks Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=tIeHLnjs5U8" },
      { type: "article", title: "A Visual and Interactive Guide to Neural Networks", url: "https://jalammar.github.io/visual-interactive-guide-basics-neural-networks/" },
      { type: "github", title: "karpathy/nn-zero-to-hero: Neural Networks from scratch", url: "https://github.com/karpathy/nn-zero-to-hero" },
      { type: "cheat_sheet", title: "Activation Functions Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html" },
      { type: "deep_dive", title: "Andrej Karpathy: Building makemore (neural net from scratch)", url: "https://www.youtube.com/watch?v=PaCmpygFfXo" }
    ]
  },
  "n_mldl_2": {
    whyLearnThis: "PyTorch and TensorFlow are the two dominant deep learning frameworks. PyTorch is the choice of researchers and most modern ML engineers for its dynamic computation graph and Pythonic API. TensorFlow is dominant in production deployment via TensorFlow Serving and TFLite.",
    whenIsItUsed: "Training neural networks, fine-tuning pre-trained models, building custom architectures, and deploying models to production.",
    whereIsItUsed: "PyTorch: OpenAI, Meta AI, Hugging Face. TensorFlow: Google, Twitter, Airbnb.",
    whatComesNext: "CNNs & Image Classification",
    learningOutcomes: [
      "Define a neural network in PyTorch using nn.Module and implement the forward pass.",
      "Write a training loop with loss computation, backward pass, and optimizer step.",
      "Use PyTorch DataLoader to batch and shuffle training data efficiently.",
      "Save and load model weights with torch.save and torch.load.",
      "Use GPU acceleration with .to('cuda') and verify with torch.cuda.is_available()."
    ],
    commonMistakes: [
      "Forgetting to call optimizer.zero_grad() before each backward pass, causing gradient accumulation.",
      "Not setting model.eval() during inference, causing dropout and batch norm to behave differently.",
      "Not moving both model and data to the same device (CPU vs GPU), causing device mismatch errors."
    ],
    realWorldApplications: [
      "Training a PyTorch ResNet-50 model on a custom image dataset with transfer learning.",
      "Fine-tuning a Hugging Face BERT model for sentiment analysis using PyTorch.",
      "Using TensorFlow Lite to deploy a model to an Android app that runs offline."
    ],
    resources: [
      { type: "official", title: "PyTorch Documentation: Getting Started", url: "https://pytorch.org/docs/stable/index.html" },
      { type: "video_en", title: "PyTorch for Deep Learning (freeCodeCamp)", url: "https://www.youtube.com/watch?v=c36lUUr864M" },
      { type: "video_hi", title: "PyTorch Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=EMXfZB8FVUA" },
      { type: "article", title: "PyTorch in 60 Minutes Blitz (official)", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" },
      { type: "github", title: "pytorch/examples: Official PyTorch examples", url: "https://github.com/pytorch/examples" },
      { type: "cheat_sheet", title: "PyTorch Cheat Sheet (official)", url: "https://pytorch.org/tutorials/beginner/ptcheat.html" },
      { type: "deep_dive", title: "Andrej Karpathy: Neural Nets from scratch in Python", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" }
    ]
  },
  "n_mldl_3": {
    whyLearnThis: "Convolutional Neural Networks revolutionized computer vision. They learn spatial hierarchies of features — edges → shapes → objects — making them far superior to fully connected networks for images. CNNs underpin everything from face detection to medical image analysis.",
    whenIsItUsed: "Image classification, object detection, image segmentation, medical imaging, and any task with spatial data.",
    whereIsItUsed: "Google Photos (object recognition), Tesla Autopilot (perception), medical AI (radiology), Instagram (content moderation).",
    whatComesNext: "Cross-Validation",
    learningOutcomes: [
      "Explain convolution, feature maps, padding, stride, and pooling layers.",
      "Build and train a CNN in PyTorch for image classification.",
      "Apply transfer learning using pre-trained models (ResNet, VGG, EfficientNet) with fine-tuning.",
      "Use data augmentation (random flips, rotations, cropping) to reduce overfitting.",
      "Visualize CNN feature maps to understand what the network has learned."
    ],
    commonMistakes: [
      "Training from scratch when pre-trained models are available — transfer learning almost always outperforms.",
      "Not using data augmentation for small image datasets, causing massive overfitting.",
      "Using too many fully connected layers after convolutions — Global Average Pooling is more efficient."
    ],
    realWorldApplications: [
      "EfficientNet classifying skin lesions as malignant/benign with dermatologist-level accuracy.",
      "YOLO detecting and localizing objects in real-time video streams for autonomous vehicles.",
      "ResNet fine-tuned with 500 images to classify defects in manufacturing parts."
    ],
    resources: [
      { type: "official", title: "PyTorch: Training a Classifier", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" },
      { type: "video_en", title: "Convolutional Neural Networks (3Blue1Brown)", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { type: "video_hi", title: "CNN Tutorial Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=4B5FbZWZK4o" },
      { type: "article", title: "CS231n: Convolutional Neural Networks", url: "https://cs231n.github.io/convolutional-networks/" },
      { type: "github", title: "pytorch/vision: PyTorch Computer Vision library", url: "https://github.com/pytorch/vision" },
      { type: "cheat_sheet", title: "CNN Architecture Comparison (parameters, accuracy)", url: "https://pytorch.org/hub/research-models/compact" },
      { type: "deep_dive", title: "CS231n: Image Recognition Deep Dive (Stanford)", url: "https://cs231n.github.io/" }
    ]
  },
  "n_eval_1": {
    whyLearnThis: "A model tested on data it was trained on always appears better than it is. Cross-validation gives an honest estimate of how the model will perform on new, unseen data by rotating which part of the data is held out for testing.",
    whenIsItUsed: "Every time you train a model — always use cross-validation for model selection and hyperparameter tuning.",
    whereIsItUsed: "All ML projects. GridSearchCV and RandomizedSearchCV in scikit-learn use cross-validation internally.",
    whatComesNext: "Precision, Recall, ROC-AUC",
    learningOutcomes: [
      "Implement k-fold cross-validation and explain why k=5 or k=10 is standard.",
      "Use Stratified K-Fold for imbalanced datasets to maintain class distribution in each fold.",
      "Apply cross_val_score in scikit-learn with appropriate scoring metrics.",
      "Understand and prevent data leakage — preprocessing must be fitted inside the cross-validation loop.",
      "Use Group K-Fold when data has grouped observations (e.g., multiple samples from same patient)."
    ],
    commonMistakes: [
      "Fitting preprocessing (scalers, encoders) on the full dataset before cross-validation — this leaks test data into training.",
      "Using regular K-Fold for imbalanced classification — always use Stratified K-Fold.",
      "Confusing test set (held out from all model development) with validation fold (used for model selection)."
    ],
    realWorldApplications: [
      "Using 5-fold cross-validation to compare 3 models and select the one with the best average AUC.",
      "Nested cross-validation estimating the true generalization error while also tuning hyperparameters.",
      "Group K-Fold preventing patient data leakage when samples from the same patient appear in the dataset."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Cross-Validation Documentation", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
      { type: "video_en", title: "Cross Validation (StatQuest)", url: "https://www.youtube.com/watch?v=fSytzGwwBVw" },
      { type: "video_hi", title: "Cross Validation Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=LbX4X71-TFI" },
      { type: "article", title: "Towards Data Science: K-Fold Cross Validation", url: "https://towardsdatascience.com/cross-validation-in-machine-learning-72924a69872f" },
      { type: "github", title: "scikit-learn/scikit-learn: Cross validation examples", url: "https://github.com/scikit-learn/scikit-learn/tree/main/examples" },
      { type: "cheat_sheet", title: "Cross-Validation Strategies Reference", url: "https://scikit-learn.org/stable/model_selection.html" },
      { type: "deep_dive", title: "The Bias-Variance Tradeoff and Cross-Validation", url: "https://scott.fortmann-roe.com/docs/BiasVariance.html" }
    ]
  },
  "n_eval_2": {
    whyLearnThis: "Accuracy is a useless metric for imbalanced datasets. When 99% of credit card transactions are legitimate, predicting 'legitimate' every time gives 99% accuracy but catches 0% of fraud. Precision, recall, F1, and ROC-AUC tell the complete story.",
    whenIsItUsed: "Evaluating any classification model — especially for medical diagnosis, fraud detection, and any imbalanced dataset.",
    whereIsItUsed: "Every ML classification project. Presented in model cards, research papers, and production monitoring dashboards.",
    whatComesNext: "Hyperparameter Tuning",
    learningOutcomes: [
      "Compute precision, recall, F1-score, and specificity from a confusion matrix.",
      "Explain the precision-recall tradeoff and when to optimize each.",
      "Compute and interpret the ROC curve and AUC score.",
      "Choose the right metric for the problem: recall for disease detection, precision for spam detection.",
      "Use classification_report in scikit-learn to get a complete evaluation summary."
    ],
    commonMistakes: [
      "Using accuracy as the primary metric for imbalanced datasets.",
      "Maximizing AUC without considering the operating point (threshold) needed in production.",
      "Not computing separate precision/recall by class for multi-class problems."
    ],
    realWorldApplications: [
      "A cancer detection model optimized for recall (missing a cancer is worse than a false alarm) at 95% recall, 60% precision.",
      "A spam filter optimized for precision (false positives are more annoying than spam getting through).",
      "ROC curve comparison showing that XGBoost (AUC=0.94) outperforms logistic regression (AUC=0.85) on a fraud detection task."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Model Evaluation Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
      { type: "video_en", title: "Precision, Recall, ROC (StatQuest)", url: "https://www.youtube.com/watch?v=4jRBRDbJemM" },
      { type: "video_hi", title: "Classification Metrics Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=LbX4X71-TFI" },
      { type: "article", title: "Towards Data Science: Classification Evaluation", url: "https://towardsdatascience.com/20-popular-machine-learning-metrics-part-1-classification-regression-evaluation-metrics-1ca3e282a2ce" },
      { type: "github", title: "eriklindernoren/ML-From-Scratch: Evaluation metrics", url: "https://github.com/eriklindernoren/ML-From-Scratch" },
      { type: "cheat_sheet", title: "Classification Metrics Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html" },
      { type: "deep_dive", title: "Beyond Accuracy: Behavioral Testing of NLP Models", url: "https://arxiv.org/abs/2005.04118" }
    ]
  },
  "n_eval_3": {
    whyLearnThis: "Every ML algorithm has hyperparameters (learning rate, max_depth, n_estimators) that you set before training. Finding the optimal combination is hyperparameter tuning. Automated tuning — GridSearchCV, RandomizedSearchCV, Optuna — can yield 5-20% performance gains.",
    whenIsItUsed: "After selecting the best model architecture through cross-validation, and before final evaluation on the held-out test set.",
    whereIsItUsed: "Every production ML pipeline. Optuna and Ray Tune are the standard tools for large-scale hyperparameter optimization.",
    whatComesNext: "Machine Learning Complete",
    learningOutcomes: [
      "Use GridSearchCV and RandomizedSearchCV with cross-validation for hyperparameter tuning.",
      "Set up Optuna for efficient Bayesian hyperparameter optimization.",
      "Understand the bias-variance tradeoff and how it guides hyperparameter choices.",
      "Use early stopping in gradient boosting models to prevent overfitting.",
      "Avoid the trap of tuning on the test set — always tune on validation data only."
    ],
    commonMistakes: [
      "Using the test set for hyperparameter tuning — this leaks test information and leads to overoptimistic results.",
      "Tuning too many hyperparameters simultaneously without guidance — start with the most impactful ones.",
      "Running Grid Search on a large hyperparameter space — use Randomized Search or Bayesian Optimization instead."
    ],
    realWorldApplications: [
      "Optuna finding the optimal learning rate, depth, and regularization for an XGBoost model, improving AUC from 0.91 to 0.94.",
      "Automated Machine Learning (AutoML) tools like H2O or AutoSklearn running hyperparameter search automatically.",
      "Weight & Biases hyperparameter sweeps documenting all experiments for a team training a large model."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Hyperparameter Tuning", url: "https://scikit-learn.org/stable/modules/grid_search.html" },
      { type: "video_en", title: "Hyperparameter Tuning (StatQuest)", url: "https://www.youtube.com/watch?v=Aa4MACKaDC0" },
      { type: "video_hi", title: "Hyperparameter Tuning Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=LbX4X71-TFI" },
      { type: "article", title: "A Conceptual Explanation of Bayesian Hyperparameter Optimization", url: "https://towardsdatascience.com/a-conceptual-explanation-of-bayesian-model-based-hyperparameter-optimization-for-machine-learning-b8172278050f" },
      { type: "github", title: "optuna/optuna: Hyperparameter Optimization Framework", url: "https://github.com/optuna/optuna" },
      { type: "cheat_sheet", title: "Optuna Quick Start", url: "https://optuna.readthedocs.io/en/stable/tutorial/10_key_features/001_first.html" },
      { type: "deep_dive", title: "Beyond Grid Search: Smarter Hyperparameter Optimization", url: "https://wandb.ai/fully-connected/blog/hyperparameter-tuning-strategies" }
    ]
  }
};
