import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "linear_algebra": {
    whyLearnThis: "Linear algebra is the language of data. Every dataset is a matrix, every data point is a vector. To understand how algorithms like PCA or neural networks process data, you must understand linear algebra.",
    whenIsItUsed: "Dimensionality reduction (PCA), recommendation systems (Singular Value Decomposition), and deep learning.",
    whereIsItUsed: "NumPy under the hood, scikit-learn models, TensorFlow/PyTorch.",
    whatComesNext: "Calculus",
    learningOutcomes: [
      "Understand vectors, matrices, and tensors.",
      "Perform matrix multiplication and understand its geometric intuition.",
      "Understand Eigenvectors and Eigenvalues.",
      "Apply Singular Value Decomposition (SVD).",
      "Translate linear algebra equations into NumPy code."
    ],
    commonMistakes: [
      "Memorizing formulas without understanding the geometric intuition behind them.",
      "Ignoring broadcasting rules in NumPy, leading to silent bugs in matrix math."
    ],
    realWorldApplications: [
      "Compressing a 1000-feature dataset down to 50 principal components using PCA (based on eigenvectors).",
      "Building a collaborative filtering recommendation engine using Matrix Factorization."
    ],
    resources: [
      { type: "official", title: "NumPy Linear Algebra", url: "https://numpy.org/doc/stable/reference/routines.linalg.html" },
      { type: "video_en", title: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs" },
      { type: "video_hi", title: "Linear Algebra Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Linear Algebra for Data Science", url: "https://numpy.org/doc/stable/user/quickstart.html" },
      { type: "github", title: "Math for ML Notes", url: "https://github.com/probml/pml-book" },
      { type: "cheat_sheet", title: "Linear Algebra Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io/en/latest/linear_algebra.html" },
      { type: "deep_dive", title: "MIT OpenCourseWare: Linear Algebra", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" }
    ]
  },
  "calculus": {
    whyLearnThis: "Calculus is the mathematics of change and optimization. Gradient descent, the algorithm that trains almost all machine learning models, is a direct application of derivatives.",
    whenIsItUsed: "Understanding how models learn, optimizing custom loss functions, and debugging training convergence issues.",
    whereIsItUsed: "Optimization algorithms (Adam, SGD), Backpropagation.",
    whatComesNext: "Probability",
    learningOutcomes: [
      "Understand the concept of a derivative as a rate of change.",
      "Compute partial derivatives for multivariable functions.",
      "Understand the Chain Rule (the foundation of backpropagation).",
      "Explain the concept of Gradient Descent and local minima.",
      "Understand integrals in the context of probability density functions."
    ],
    commonMistakes: [
      "Focusing on manually calculating complex derivatives instead of understanding what the gradient actually points to (the direction of steepest ascent).",
      "Not understanding the impact of the learning rate on the gradient descent steps."
    ],
    realWorldApplications: [
      "Gradient descent minimizing the Mean Squared Error in a linear regression model.",
      "Using partial derivatives to find the optimal weights that minimize loss in a neural network."
    ],
    resources: [
      { type: "official", title: "SciPy Optimize", url: "https://docs.scipy.org/doc/scipy/reference/optimize.html" },
      { type: "video_en", title: "Essence of Calculus (3Blue1Brown)", url: "https://www.youtube.com/watch?v=WUvTyaaNkzM" },
      { type: "video_hi", title: "Calculus for ML Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Calculus in Machine Learning", url: "https://towardsdatascience.com/calculus-in-machine-learning-2e7cddafa21f" },
      { type: "github", title: "Micrograd (Calculus in Code)", url: "https://github.com/karpathy/micrograd" },
      { type: "cheat_sheet", title: "Derivatives Cheat Sheet", url: "https://tutorial.math.lamar.edu/pdf/calculus_cheat_sheet_derivatives.pdf" },
      { type: "deep_dive", title: "Matrix Calculus for Deep Learning", url: "https://explained.ai/matrix-calculus/" }
    ]
  },
  "probability": {
    whyLearnThis: "Data is inherently noisy. Probability gives us a framework to quantify uncertainty. Every classification model outputs probabilities, not absolute certainties.",
    whenIsItUsed: "Building probabilistic models (Naive Bayes), understanding model confidence, and handling missing or noisy data.",
    whereIsItUsed: "Classification algorithms, Bayesian inference, A/B testing frameworks.",
    whatComesNext: "Statistics",
    learningOutcomes: [
      "Understand Random Variables (Discrete vs Continuous).",
      "Calculate Conditional Probability.",
      "Apply Bayes' Theorem to update beliefs based on new evidence.",
      "Recognize common probability distributions (Normal, Poisson, Binomial).",
      "Understand Expected Value and Variance."
    ],
    commonMistakes: [
      "Confusing conditional probability $P(A|B)$ with $P(B|A)$.",
      "Assuming independent events when they are actually correlated.",
      "Treating model confidence scores as true probabilities without calibration."
    ],
    realWorldApplications: [
      "A spam filter using Naive Bayes to calculate the probability an email is spam given the words it contains.",
      "Using the Poisson distribution to model and predict the number of customer arrivals at a store in an hour."
    ],
    resources: [
      { type: "official", title: "SciPy Stats", url: "https://docs.scipy.org/doc/scipy/reference/stats.html" },
      { type: "video_en", title: "Probability Explained (StatQuest)", url: "https://www.youtube.com/watch?v=vYimHJMuTa0" },
      { type: "video_hi", title: "Probability Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Probability for Data Science", url: "https://www.khanacademy.org/math/statistics-probability" },
      { type: "github", title: "Probabilistic Programming", url: "https://github.com/pymc-devs/pymc" },
      { type: "cheat_sheet", title: "Probability Cheat Sheet", url: "https://www.probabilitycourse.com/" },
      { type: "deep_dive", title: "Bayesian Methods for Hackers", url: "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers" }
    ]
  },
  "statistics": {
    whyLearnThis: "Statistics is how we make inferences about a population from a sample. Without statistics, you can't tell if an increase in a metric is a real change or just random noise.",
    whenIsItUsed: "A/B testing, hypothesis testing, survey analysis, and exploratory data analysis.",
    whereIsItUsed: "Product analytics, clinical trials, business intelligence.",
    whatComesNext: "Python & R",
    learningOutcomes: [
      "Understand descriptive statistics (Mean, Median, Mode, Variance, Skewness).",
      "Explain the Central Limit Theorem and its importance.",
      "Perform Hypothesis Testing (Null vs Alternative Hypothesis).",
      "Calculate and interpret p-values and confidence intervals.",
      "Avoid common statistical fallacies (p-hacking, survivorship bias)."
    ],
    commonMistakes: [
      "Misinterpreting a p-value as the probability that the null hypothesis is true.",
      "Stopping an A/B test early just because it temporarily reaches statistical significance (peeking).",
      "Using the mean instead of the median when analyzing highly skewed data (like income)."
    ],
    realWorldApplications: [
      "Running an A/B test to determine if a green 'Buy' button actually increases conversion rates compared to a red button.",
      "Using confidence intervals to report that a political candidate is leading by 5% with a ±2% margin of error.",
      "Identifying bias in a dataset caused by non-random sampling."
    ],
    resources: [
      { type: "official", title: "Statsmodels Documentation", url: "https://www.statsmodels.org/stable/index.html" },
      { type: "video_en", title: "Statistics Crash Course (StatQuest)", url: "https://www.youtube.com/watch?v=qBigTkGbj9E" },
      { type: "video_hi", title: "Statistics in Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Central Limit Theorem Explained", url: "https://www.khanacademy.org/math/statistics-probability/sampling-distributions-library/sample-means/v/central-limit-theorem" },
      { type: "github", title: "Think Stats (Book Repository)", url: "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers" },
      { type: "cheat_sheet", title: "Hypothesis Testing Cheat Sheet", url: "https://stats.stackexchange.com/questions/tagged/hypothesis-testing" },
      { type: "deep_dive", title: "How Not to Be Wrong: The Power of Mathematical Thinking", url: "https://www.jordanellenberg.com/book/how-not-to-be-wrong/" }
    ]
  },
  "python_r": {
    whyLearnThis: "Python and R are the dominant languages in Data Science. Python is the industry standard for production ML, deep learning, and engineering. R is preferred in academia, biostatistics, and complex statistical analysis.",
    whenIsItUsed: "Writing data pipelines, analyzing datasets, building models, and deploying algorithms.",
    whereIsItUsed: "Jupyter Notebooks, RStudio, production APIs, automated scripts.",
    whatComesNext: "Pandas & NumPy",
    learningOutcomes: [
      "Write idiomatic Python (list comprehensions, lambda functions, generators).",
      "Understand Python's object-oriented and functional programming features.",
      "Set up virtual environments (venv, conda) for dependency management.",
      "Perform basic data manipulation in R using `dplyr`.",
      "Choose between Python and R based on project requirements."
    ],
    commonMistakes: [
      "Using global environments instead of virtual environments, leading to 'dependency hell'.",
      "Writing 'C-style' Python with heavily nested loops instead of using vectorized library functions.",
      "Starting a deep learning project in R (Python has vastly superior deep learning ecosystem support)."
    ],
    realWorldApplications: [
      "Writing a Python script that scrapes web data, cleans it, and inserts it into a database.",
      "Using R's `ggplot2` to generate highly complex, publication-ready statistical plots for a research paper.",
      "Creating an automated Jupyter Notebook report that emails weekly metrics to stakeholders."
    ],
    resources: [
      { type: "official", title: "Python Official Docs", url: "https://docs.python.org/3/library/" },
      { type: "video_en", title: "Python for Data Science (freeCodeCamp)", url: "https://www.youtube.com/watch?v=9yl6-HEY7_s" },
      { type: "video_hi", title: "Python Hindi Tutorial (CodeWithHarry)", url: "https://www.youtube.com/watch?v=4pNSPBfJpKw" },
      { type: "article", title: "Python vs R for Data Science", url: "https://www.r-project.org/about.html" },
      { type: "github", title: "Awesome Python for Data Science", url: "https://github.com/r0f1/datascience" },
      { type: "cheat_sheet", title: "Python Data Science Cheat Sheet", url: "https://ehmatthes.github.io/pcc_2e/cheat_sheets/cheat_sheets/" },
      { type: "deep_dive", title: "Fluent Python (Book Reference)", url: "https://fluentpython.com/" }
    ]
  },
  "pandas_numpy": {
    whyLearnThis: "Pandas and NumPy are the core of the Python data ecosystem. NumPy provides lightning-fast array operations via C-extensions. Pandas provides the DataFrame, making tabular data manipulation intuitive and powerful.",
    whenIsItUsed: "During 80% of a Data Scientist's job: loading, cleaning, filtering, merging, and exploring data.",
    whereIsItUsed: "Data preprocessing, feature engineering, exploratory data analysis (EDA).",
    whatComesNext: "Data Structures",
    learningOutcomes: [
      "Use NumPy arrays, broadcasting, and vectorized operations.",
      "Load CSV, Excel, and SQL data into Pandas DataFrames.",
      "Perform SQL-like operations in Pandas: groupby, join, merge, and pivot.",
      "Handle missing data (NaN) and duplicated rows efficiently.",
      "Use `.apply()` and `.map()` for custom column transformations."
    ],
    commonMistakes: [
      "Iterating over DataFrame rows with `iterrows()` instead of using vectorized operations (which are 100x slower).",
      "Misunderstanding how Pandas indices work, leading to misaligned data during merges.",
      "Loading massive datasets entirely into memory instead of chunking or using Dask/Polars."
    ],
    realWorldApplications: [
      "Grouping a dataset of 5 million sales records by `store_id` and `month` to calculate total revenue in milliseconds.",
      "Using NumPy to perform element-wise normalization on a matrix of image pixels.",
      "Cleaning a messy dataset by filling missing age values with the median age of specific demographic groups."
    ],
    resources: [
      { type: "official", title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
      { type: "video_en", title: "Pandas Data Analysis (Keith Galli)", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
      { type: "video_hi", title: "Pandas Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "10 Minutes to Pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
      { type: "github", title: "Pandas Cookbook", url: "https://github.com/jvns/pandas-cookbook" },
      { type: "cheat_sheet", title: "Pandas Cheat Sheet (PDF)", url: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf" },
      { type: "deep_dive", title: "Python for Data Analysis (Wes McKinney)", url: "https://wesmckinney.com/book/" }
    ]
  },
  "data_structures": {
    whyLearnThis: "Writing efficient code requires understanding how data is stored in memory and accessed. While Data Scientists don't write low-level algorithms as often as Software Engineers, using the wrong data structure in Python can cause your data pipeline to take days instead of minutes.",
    whenIsItUsed: "Optimizing code execution speed, parsing complex JSON APIs, and writing custom algorithms.",
    whereIsItUsed: "Python built-ins, Pandas internals, custom data processing scripts.",
    whatComesNext: "Matplotlib & Seaborn",
    learningOutcomes: [
      "Understand Big O Notation (Time and Space complexity).",
      "Explain the performance differences between Lists, Sets, and Dictionaries in Python.",
      "Understand Trees and Graphs (essential for understanding Decision Trees and Graph Neural Networks).",
      "Implement Hash Tables (Dictionaries) and understand collision resolution.",
      "Use Stacks and Queues for processing sequential tasks."
    ],
    commonMistakes: [
      "Checking for existence in a List (`if item in my_list`) which is O(N), instead of a Set (`if item in my_set`) which is O(1).",
      "Appending to a Pandas DataFrame inside a loop instead of appending to a list and creating the DataFrame once at the end.",
      "Ignoring memory constraints when working with massive nested dictionaries."
    ],
    realWorldApplications: [
      "Using a Python Set to instantly find the intersection of 100,000 customers from Campaign A and 50,000 customers from Campaign B.",
      "Understanding Graph data structures to analyze a social network's 'friends of friends' connections.",
      "Optimizing a string parsing script from O(N^2) to O(N), reducing runtime from 2 hours to 5 seconds."
    ],
    resources: [
      { type: "official", title: "Python Data Structures", url: "https://docs.python.org/3/tutorial/datastructures.html" },
      { type: "video_en", title: "Data Structures & Algorithms (freeCodeCamp)", url: "https://www.youtube.com/watch?v=8hly31xKli0" },
      { type: "video_hi", title: "DSA in Hindi", url: "https://www.youtube.com/watch?v=5_5oE5lgrhw" },
      { type: "article", title: "Time Complexity in Python", url: "https://wiki.python.org/moin/TimeComplexity" },
      { type: "github", title: "Interactive Coding Challenges", url: "https://github.com/donnemartin/interactive-coding-challenges" },
      { type: "cheat_sheet", title: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
      { type: "deep_dive", title: "Grokking Algorithms (Book Reference)", url: "https://www.manning.com/books/grokking-algorithms" }
    ]
  },
  "matplotlib_seaborn": {
    whyLearnThis: "Numbers alone rarely tell a compelling story. Data visualization is how you communicate findings to stakeholders, spot outliers, and understand distributions. Matplotlib is the foundation, and Seaborn makes it beautiful.",
    whenIsItUsed: "Exploratory Data Analysis (EDA), generating reports, and communicating model results.",
    whereIsItUsed: "Jupyter Notebooks, static reports, research papers.",
    whatComesNext: "Tableau & PowerBI",
    learningOutcomes: [
      "Create basic plots (line, scatter, bar, histogram) in Matplotlib.",
      "Customize plots: labels, titles, legends, colors, and subplots.",
      "Use Seaborn to easily plot statistical relationships and distributions.",
      "Create complex plots like heatmaps, violin plots, and pairplots in 1 line of code.",
      "Choose the right type of chart for the data being presented."
    ],
    commonMistakes: [
      "Creating 'spaghetti plots' with too many lines, making them unreadable.",
      "Using pie charts for data with many categories (bar charts are almost always better for human perception).",
      "Failing to label axes or provide a legend, making the chart useless to anyone else."
    ],
    realWorldApplications: [
      "Generating a Seaborn heatmap of a correlation matrix to identify which features are highly correlated before training a model.",
      "Creating a scatter plot to visually identify outliers in a dataset of house prices vs square footage.",
      "Using a facet grid to compare the distribution of salaries across 5 different job titles simultaneously."
    ],
    resources: [
      { type: "official", title: "Seaborn Documentation", url: "https://seaborn.pydata.org/" },
      { type: "video_en", title: "Matplotlib Tutorial (Corey Schafer)", url: "https://www.youtube.com/watch?v=UO98lJQ3QGI" },
      { type: "video_hi", title: "Matplotlib Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Python Data Visualization Guide", url: "https://towardsdatascience.com/the-next-level-of-data-visualization-in-python-dd6e99039d5e" },
      { type: "github", title: "Python Graph Gallery", url: "https://github.com/holtzy/The-Python-Graph-Gallery" },
      { type: "cheat_sheet", title: "Seaborn Cheat Sheet", url: "https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf" },
      { type: "deep_dive", title: "Storytelling with Data (Book Reference)", url: "https://www.storytellingwithdata.com/" }
    ]
  },
  "tableau_powerbi": {
    whyLearnThis: "While Python is great for static charts, business stakeholders need interactive dashboards they can filter and explore themselves. Tableau and PowerBI are the industry standards for Business Intelligence (BI).",
    whenIsItUsed: "Building automated executive dashboards, democratizing data access for non-technical teams.",
    whereIsItUsed: "Corporate reporting, KPIs, business analytics teams.",
    whatComesNext: "Dashboards",
    learningOutcomes: [
      "Connect BI tools to diverse data sources (SQL, Excel, Cloud DWs).",
      "Create interactive dashboards with calculated fields and parameters.",
      "Understand the difference between dimensions (categorical) and measures (numerical).",
      "Use PowerBI's DAX language or Tableau's LOD calculations for advanced logic.",
      "Publish and schedule data refreshes for automated reporting."
    ],
    commonMistakes: [
      "Putting too many charts on a single dashboard, overwhelming the user.",
      "Using complex calculations in the BI tool that should have been handled upstream in the SQL database.",
      "Failing to design for the end-user's actual questions (building a data dump instead of a targeted tool)."
    ],
    realWorldApplications: [
      "A Tableau dashboard showing real-time sales across different regions, allowing the VP of Sales to drill down into specific stores.",
      "A PowerBI report connecting directly to Snowflake, updating daily with customer churn metrics.",
      "Creating an interactive map visualization to track logistics and delivery delays globally."
    ],
    resources: [
      { type: "official", title: "Tableau Free Training", url: "https://www.tableau.com/learn/training" },
      { type: "video_en", title: "Power BI Full Course (Kevin Stratvert)", url: "https://www.youtube.com/watch?v=TmhQCQr_DCA" },
      { type: "video_hi", title: "Power BI Tutorial Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Tableau vs Power BI: Which to choose?", url: "https://www.tableau.com/learn/articles/data-visualization" },
      { type: "github", title: "Awesome Power BI", url: "https://github.com/NajiElKotob/Awesome-Power-BI" },
      { type: "cheat_sheet", title: "DAX Cheat Sheet", url: "https://learn.microsoft.com/en-us/dax/dax-function-reference" },
      { type: "deep_dive", title: "Information Dashboard Design (Stephen Few)", url: "https://www.perceptualedge.com/library.php" }
    ]
  },
  "dashboards": {
    whyLearnThis: "Sometimes BI tools are too restrictive, or you need to embed an ML model directly into an interactive web app. Python dashboarding frameworks like Streamlit and Dash allow Data Scientists to build full-stack web apps in pure Python.",
    whenIsItUsed: "Prototyping ML models, building internal tools, and creating custom data apps that BI tools can't handle.",
    whereIsItUsed: "Streamlit, Plotly Dash, Gradio (for ML prototypes).",
    whatComesNext: "Regression & Classification",
    learningOutcomes: [
      "Build an interactive web application entirely in Python using Streamlit.",
      "Understand reactive programming concepts (how inputs trigger UI updates).",
      "Integrate Matplotlib/Plotly charts directly into a web interface.",
      "Deploy a Streamlit or Dash app using Heroku, Streamlit Cloud, or Docker.",
      "Build a Gradio interface to quickly demo a trained machine learning model."
    ],
    commonMistakes: [
      "Running heavy data processing or model training inside the UI render loop, causing the app to freeze.",
      "Failing to use caching (`@st.cache_data`) for large datasets, making the app incredibly slow on every click.",
      "Trying to build a complex, multi-page enterprise web app in Streamlit instead of handing it off to frontend engineers (React)."
    ],
    realWorldApplications: [
      "Building a Streamlit app where users upload a CSV, and the app runs a pre-trained ML model to return predictions.",
      "A Gradio app allowing users to upload an image and instantly see the output of a deep learning object detection model.",
      "A Dash application for financial analysts to simulate different portfolio allocations interactively."
    ],
    resources: [
      { type: "official", title: "Streamlit Documentation", url: "https://docs.streamlit.io/" },
      { type: "video_en", title: "Streamlit Tutorial (Data Professor)", url: "https://www.youtube.com/watch?v=ZZ4B0ZUzy1Y" },
      { type: "video_hi", title: "Streamlit in Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Dash vs Streamlit", url: "https://streamlit.io/" },
      { type: "github", title: "Awesome Streamlit", url: "https://github.com/MarcSkovMadsen/awesome-streamlit" },
      { type: "cheat_sheet", title: "Streamlit Cheat Sheet", url: "https://docs.streamlit.io/library/cheatsheet" },
      { type: "deep_dive", title: "Building Data Web Apps with Plotly Dash", url: "https://dash.plotly.com/" }
    ]
  },
  "regression_classification": {
    whyLearnThis: "These are the two pillars of supervised machine learning. Regression predicts a number (price, temperature); Classification predicts a category (spam, fraud, disease). Mastering these solves 70% of business ML problems.",
    whenIsItUsed: "Predicting customer churn, forecasting sales, classifying images, and determining loan approvals.",
    whereIsItUsed: "Scikit-learn, XGBoost, Statsmodels.",
    whatComesNext: "Clustering",
    learningOutcomes: [
      "Implement Linear and Logistic Regression.",
      "Understand the bias-variance tradeoff and how regularization (Lasso/Ridge) prevents overfitting.",
      "Train tree-based models: Decision Trees, Random Forests, and Gradient Boosting (XGBoost).",
      "Understand Support Vector Machines (SVM) and the Kernel trick.",
      "Apply cross-validation for hyperparameter tuning (GridSearchCV)."
    ],
    commonMistakes: [
      "Using Linear Regression on data with extreme outliers without transforming the data or using robust regression.",
      "Not scaling features before applying models like SVM or Logistic Regression with penalty.",
      "Overfitting a Random Forest by letting it grow to unlimited depth."
    ],
    realWorldApplications: [
      "Logistic regression classifying emails as spam or not spam based on word frequencies.",
      "An XGBoost model predicting the exact lifetime value ($) of a new customer (Regression).",
      "A Random Forest model predicting whether a bank transaction is fraudulent based on location and amount."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Supervised Learning", url: "https://scikit-learn.org/stable/unsupervised_learning.html" },
      { type: "video_en", title: "Machine Learning Full Course", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "video_hi", title: "Regression & Classification Hindi (Krish Naik)", url: "https://www.youtube.com/watch?v=DKSZHN7jLmI" },
      { type: "article", title: "XGBoost Algorithm Explained", url: "https://towardsdatascience.com/https-medium-com-vishalmorde-xgboost-algorithm-long-she-may-rein-edd9f99be63d" },
      { type: "github", title: "Hands-on ML Code", url: "https://github.com/jakevdp/PythonDataScienceHandbook" },
      { type: "cheat_sheet", title: "ML Algorithms Overview", url: "https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html" },
      { type: "deep_dive", title: "Introduction to Statistical Learning", url: "https://www.statlearning.com/" }
    ]
  },
  "clustering": {
    whyLearnThis: "Clustering is the primary unsupervised learning technique. When you have terabytes of data but no labels, clustering algorithms discover the natural groupings, patterns, and anomalies hidden within.",
    whenIsItUsed: "Customer segmentation, document grouping, image compression, and anomaly detection.",
    whereIsItUsed: "K-Means, DBSCAN, Hierarchical Clustering.",
    whatComesNext: "Model Evaluation",
    learningOutcomes: [
      "Implement K-Means clustering and find optimal 'k' using the Elbow Method and Silhouette Score.",
      "Understand when K-Means fails (non-spherical clusters) and when to use DBSCAN (density-based).",
      "Implement Hierarchical Clustering and interpret Dendrograms.",
      "Use Principal Component Analysis (PCA) to visualize clusters in 2D space.",
      "Handle the 'curse of dimensionality' in clustering."
    ],
    commonMistakes: [
      "Forgetting to standardize numerical features before clustering—distance algorithms will heavily bias toward variables with larger ranges.",
      "Forcing K-Means on data that is clearly not spherically distributed.",
      "Choosing 'k' arbitrarily without using domain knowledge or evaluation metrics."
    ],
    realWorldApplications: [
      "Marketing team using K-Means to segment 1 million users into 5 distinct personas based on purchasing behavior.",
      "Using DBSCAN to identify fraudulent, anomalous credit card transactions that lie in low-density regions.",
      "Clustering news articles into topics automatically based on their TF-IDF word vectors."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html" },
      { type: "video_en", title: "K-Means Explained (StatQuest)", url: "https://www.youtube.com/watch?v=4b5d3muPQmA" },
      { type: "video_hi", title: "Clustering Hindi Tutorial", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "DBSCAN Clustering Tutorial", url: "https://scikit-learn.org/stable/modules/clustering.html#dbscan" },
      { type: "github", title: "Scikit-learn Clustering Examples", url: "https://github.com/scikit-learn/scikit-learn/tree/main/examples/cluster" },
      { type: "cheat_sheet", title: "Clustering Comparison Visual", url: "https://scikit-learn.org/stable/auto_examples/cluster/plot_cluster_comparison.html" },
      { type: "deep_dive", title: "Understanding the Curse of Dimensionality", url: "https://en.wikipedia.org/wiki/Curse_of_dimensionality" }
    ]
  },
  "model_evaluation": {
    whyLearnThis: "A model is useless if you can't prove it works. Evaluation metrics tell you how wrong your model is, and more importantly, in what way it is wrong. Optimizing for the wrong metric can ruin a business.",
    whenIsItUsed: "Every time a model is trained, tuned, or deployed to production.",
    whereIsItUsed: "Cross-validation, A/B testing, ML monitoring.",
    whatComesNext: "Deep Learning Intro",
    learningOutcomes: [
      "Interpret a Confusion Matrix (True Positives, False Negatives, etc.).",
      "Differentiate between Precision, Recall, and F1-Score.",
      "Understand the ROC Curve and AUC metric.",
      "Use regression metrics: MAE, MSE, RMSE, R-squared.",
      "Implement K-Fold Cross-Validation to ensure models generalize to unseen data."
    ],
    commonMistakes: [
      "Reporting 99% accuracy on an imbalanced dataset where the model just predicts the majority class every time.",
      "Testing the model on the same data it was trained on, leading to severe overfitting illusions.",
      "Not understanding the business context (e.g., in medical testing, high recall is usually more important than high precision)."
    ],
    realWorldApplications: [
      "Tuning a fraud detection model to maximize AUC rather than accuracy, ensuring it separates fraud from normal behavior effectively.",
      "Using cross-validation to prove that a model's performance isn't just a lucky artifact of a specific train/test split.",
      "Choosing MAE over RMSE when you want to evaluate predictions without heavily penalizing a few massive outliers."
    ],
    resources: [
      { type: "official", title: "Scikit-learn: Evaluation Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
      { type: "video_en", title: "ROC and AUC Explained", url: "https://www.youtube.com/watch?v=4jRBRDbJemM" },
      { type: "video_hi", title: "Metrics Hindi Tutorial (Krish Naik)", url: "https://www.youtube.com/watch?v=DKSZHN7jLmI" },
      { type: "article", title: "Beyond Accuracy: Precision and Recall", url: "https://towardsdatascience.com/beyond-accuracy-precision-and-recall-3da06bea9f6c" },
      { type: "github", title: "Model Evaluation Code Examples", url: "https://github.com/fastai/fastbook" },
      { type: "cheat_sheet", title: "Classification Metrics Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html" },
      { type: "deep_dive", title: "The Bias-Variance Tradeoff", url: "https://scott.fortmann-roe.com/docs/BiasVariance.html" }
    ]
  },
  "deep_learning_intro": {
    whyLearnThis: "Deep Learning uses neural networks to learn representations of data. It represents the state-of-the-art in image recognition, natural language processing, and audio generation, replacing traditional ML in these domains.",
    whenIsItUsed: "Working with unstructured data (images, text, audio) or extremely large tabular datasets.",
    whereIsItUsed: "PyTorch, TensorFlow, Keras.",
    whatComesNext: "Time Series",
    learningOutcomes: [
      "Understand the architecture of a Perceptron and a Multi-Layer Neural Network.",
      "Explain the Forward Pass and Backpropagation.",
      "Understand Activation Functions (ReLU, Sigmoid, Softmax).",
      "Build a simple neural network using PyTorch or Keras.",
      "Understand the difference between DNNs, CNNs (images), and RNNs (sequences)."
    ],
    commonMistakes: [
      "Using deep learning for a simple, small CSV dataset where a Random Forest would be faster and more accurate.",
      "Forgetting to normalize inputs, causing gradients to explode or vanish during training.",
      "Building a deep network without non-linear activation functions."
    ],
    realWorldApplications: [
      "Training a Convolutional Neural Network (CNN) to detect tumors in MRI scans.",
      "Building a simple neural network in PyTorch to classify handwritten digits (MNIST dataset).",
      "Using transfer learning to fine-tune a pre-trained image classification model on a custom dataset of factory defects."
    ],
    resources: [
      { type: "official", title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
      { type: "video_en", title: "Neural Networks (3Blue1Brown)", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { type: "video_hi", title: "Deep Learning Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "A Visual Guide to Neural Networks", url: "https://jalammar.github.io/visual-interactive-guide-basics-neural-networks/" },
      { type: "github", title: "Fast.ai Course Notebooks", url: "https://github.com/fastai/fastbook" },
      { type: "cheat_sheet", title: "Deep Learning Cheat Sheet", url: "https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-deep-learning-tips-and-tricks" },
      { type: "deep_dive", title: "Deep Learning Book (Goodfellow)", url: "https://www.deeplearningbook.org/" }
    ]
  },
  "time_series": {
    whyLearnThis: "Time Series data introduces the dimension of time, violating the standard ML assumption that data points are independent. Forecasting sales, weather, or stock prices requires specialized algorithms that understand trends and seasonality.",
    whenIsItUsed: "Demand forecasting, financial market analysis, server load prediction, and sensor data analysis.",
    whereIsItUsed: "ARIMA, Prophet, LSTMs, Pandas time-series functions.",
    whatComesNext: "NLP Basics",
    learningOutcomes: [
      "Decompose a time series into Trend, Seasonality, and Residuals.",
      "Understand Stationarity and the Augmented Dickey-Fuller test.",
      "Use classical methods like ARIMA, SARIMA, and Exponential Smoothing.",
      "Use modern tools like Facebook Prophet for forecasting.",
      "Evaluate time series models using MAPE and walk-forward validation (not random cross-validation)."
    ],
    commonMistakes: [
      "Using standard K-Fold cross-validation, which leaks future data into the past training set. Always use Time Series Split (Walk-Forward).",
      "Failing to make data stationary before applying ARIMA models.",
      "Assuming complex deep learning models (LSTMs) will always beat simple statistical models (often they don't on small datasets)."
    ],
    realWorldApplications: [
      "An airline using SARIMA to forecast passenger demand for the next 12 months based on 10 years of historical data.",
      "Using Facebook Prophet to predict daily active users for a social media app, easily accounting for weekend vs weekday trends.",
      "Predicting CPU usage on a server cluster to trigger auto-scaling before a traffic spike occurs."
    ],
    resources: [
      { type: "official", title: "Statsmodels: Time Series Analysis", url: "https://www.statsmodels.org/stable/tsa.html" },
      { type: "video_en", title: "Time Series Forecasting in Python", url: "https://www.youtube.com/watch?v=vV12dGe_Fho" },
      { type: "video_hi", title: "Time Series Hindi Tutorial", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "A Comprehensive Guide to Time Series", url: "https://towardsdatascience.com/the-complete-guide-to-time-series-analysis-and-forecasting-70d476bfe775" },
      { type: "github", title: "Facebook Prophet", url: "https://github.com/facebook/prophet" },
      { type: "cheat_sheet", title: "Pandas Time Series Functions", url: "https://pandas.pydata.org/docs/user_guide/timeseries.html" },
      { type: "deep_dive", title: "Forecasting: Principles and Practice", url: "https://otexts.com/fpp2/" }
    ]
  },
  "nlp_basics": {
    whyLearnThis: "Natural Language Processing (NLP) bridges the gap between human communication and computer understanding. Before jumping to large language models, you must understand how text is tokenized, vectorized, and processed.",
    whenIsItUsed: "Sentiment analysis, spam detection, text classification, and extracting entities from documents.",
    whereIsItUsed: "NLTK, spaCy, TF-IDF, Hugging Face (modern NLP).",
    whatComesNext: "Data Scientist Complete",
    learningOutcomes: [
      "Perform text preprocessing: tokenization, stemming, lemmatization, and stop-word removal.",
      "Convert text to numbers using Bag of Words and TF-IDF (Term Frequency-Inverse Document Frequency).",
      "Use regular expressions (Regex) to extract patterns from raw text.",
      "Perform Named Entity Recognition (NER) using spaCy.",
      "Understand the transition from sparse vectors (TF-IDF) to dense word embeddings (Word2Vec)."
    ],
    commonMistakes: [
      "Stemming text too aggressively, reducing words to meaningless roots, instead of using lemmatization.",
      "Failing to handle case sensitivity and punctuation before vectorizing text.",
      "Using complex deep learning models for a simple text classification task where TF-IDF + Logistic Regression would achieve 95% accuracy in 1/10th the time."
    ],
    realWorldApplications: [
      "Building a sentiment analysis model to classify movie reviews as positive or negative using TF-IDF and Naive Bayes.",
      "Using spaCy NER to extract names, dates, and company locations from thousands of news articles automatically.",
      "Cleaning a dataset of messy tweets by using Regex to remove URLs, hashtags, and mentions."
    ],
    resources: [
      { type: "official", title: "spaCy Documentation", url: "https://spacy.io/usage" },
      { type: "video_en", title: "NLP Tutorial with Python", url: "https://www.youtube.com/watch?v=xvqsFTUsOmc" },
      { type: "video_hi", title: "NLP Basics in Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "A Gentle Introduction to TF-IDF", url: "https://towardsdatascience.com/tf-idf-for-document-ranking-from-scratch-in-python-on-real-world-dataset-796d339a4089" },
      { type: "github", title: "NLTK Source", url: "https://github.com/nltk/nltk" },
      { type: "cheat_sheet", title: "Regex Cheat Sheet", url: "https://regexr.com/" },
      { type: "deep_dive", title: "Speech and Language Processing (Jurafsky & Martin)", url: "https://web.stanford.edu/~jurafsky/slp3/" }
    ]
  }
};
