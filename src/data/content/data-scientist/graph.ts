import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "data-scientist",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "dataScientist"
    }
  },
  {
    "id": "math_stats",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Math & Statistics",
      "color": "blue"
    }
  },
  {
    "id": "linear_algebra",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "Linear Algebra",
      "color": "blue"
    }
  },
  {
    "id": "calculus",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "Calculus",
      "color": "blue"
    }
  },
  {
    "id": "probability",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Probability",
      "color": "blue"
    }
  },
  {
    "id": "statistics",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 400
    },
    "data": {
      "label": "Statistics",
      "color": "blue"
    }
  },
  {
    "id": "programming",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Programming for Data",
      "color": "purple"
    }
  },
  {
    "id": "python_r",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Python / R",
      "color": "purple"
    }
  },
  {
    "id": "pandas_numpy",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Pandas & NumPy",
      "color": "purple"
    }
  },
  {
    "id": "data_structures",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Data Structures",
      "color": "purple"
    }
  },
  {
    "id": "data_viz",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Data Visualization",
      "color": "green"
    }
  },
  {
    "id": "matplotlib_seaborn",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Matplotlib & Seaborn",
      "color": "green"
    }
  },
  {
    "id": "tableau_powerbi",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Tableau & PowerBI",
      "color": "green"
    }
  },
  {
    "id": "dashboards",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Dashboards",
      "color": "green"
    }
  },
  {
    "id": "machine_learning",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Machine Learning",
      "color": "orange"
    }
  },
  {
    "id": "regression_classification",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Regression & Classification",
      "color": "orange"
    }
  },
  {
    "id": "clustering",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Clustering Algorithms",
      "color": "orange"
    }
  },
  {
    "id": "model_evaluation",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Model Evaluation",
      "color": "orange"
    }
  },
  {
    "id": "advanced_topics",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Advanced Topics",
      "color": "red"
    }
  },
  {
    "id": "deep_learning_intro",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Intro to Deep Learning",
      "color": "red"
    }
  },
  {
    "id": "time_series",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Time Series Analysis",
      "color": "red"
    }
  },
  {
    "id": "nlp_basics",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "NLP Basics",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-data-scientist-math_stats",
    "source": "data-scientist",
    "target": "math_stats",
    "animated": true
  },
  {
    "id": "e-math_stats-linear_algebra",
    "source": "math_stats",
    "target": "linear_algebra"
  },
  {
    "id": "e-math_stats-calculus",
    "source": "math_stats",
    "target": "calculus"
  },
  {
    "id": "e-math_stats-probability",
    "source": "math_stats",
    "target": "probability"
  },
  {
    "id": "e-math_stats-statistics",
    "source": "math_stats",
    "target": "statistics"
  },
  {
    "id": "e-math_stats-programming",
    "source": "math_stats",
    "target": "programming",
    "animated": true
  },
  {
    "id": "e-programming-python_r",
    "source": "programming",
    "target": "python_r"
  },
  {
    "id": "e-programming-pandas_numpy",
    "source": "programming",
    "target": "pandas_numpy"
  },
  {
    "id": "e-programming-data_structures",
    "source": "programming",
    "target": "data_structures"
  },
  {
    "id": "e-programming-data_viz",
    "source": "programming",
    "target": "data_viz",
    "animated": true
  },
  {
    "id": "e-data_viz-matplotlib_seaborn",
    "source": "data_viz",
    "target": "matplotlib_seaborn"
  },
  {
    "id": "e-data_viz-tableau_powerbi",
    "source": "data_viz",
    "target": "tableau_powerbi"
  },
  {
    "id": "e-data_viz-dashboards",
    "source": "data_viz",
    "target": "dashboards"
  },
  {
    "id": "e-data_viz-machine_learning",
    "source": "data_viz",
    "target": "machine_learning",
    "animated": true
  },
  {
    "id": "e-machine_learning-regression_classification",
    "source": "machine_learning",
    "target": "regression_classification"
  },
  {
    "id": "e-machine_learning-clustering",
    "source": "machine_learning",
    "target": "clustering"
  },
  {
    "id": "e-machine_learning-model_evaluation",
    "source": "machine_learning",
    "target": "model_evaluation"
  },
  {
    "id": "e-machine_learning-advanced_topics",
    "source": "machine_learning",
    "target": "advanced_topics",
    "animated": true
  },
  {
    "id": "e-advanced_topics-deep_learning_intro",
    "source": "advanced_topics",
    "target": "deep_learning_intro"
  },
  {
    "id": "e-advanced_topics-time_series",
    "source": "advanced_topics",
    "target": "time_series"
  },
  {
    "id": "e-advanced_topics-nlp_basics",
    "source": "advanced_topics",
    "target": "nlp_basics"
  }
];
