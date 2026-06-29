import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "math",
    "type": "section",
    "position": {
      "x": 50,
      "y": 50
    },
    "data": {
      "title": "1. Math & Statistics",
      "color": "blue"
    }
  },
  {
    "id": "n_mlm_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 150
    },
    "data": {
      "title": "Linear Algebra",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "math"
    }
  },
  {
    "id": "n_mlm_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 250
    },
    "data": {
      "title": "Calculus & Optimization",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "math"
    }
  },
  {
    "id": "n_mlm_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 350
    },
    "data": {
      "title": "Probability Theory",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "math"
    }
  },
  {
    "id": "python",
    "type": "section",
    "position": {
      "x": 50,
      "y": 550
    },
    "data": {
      "title": "2. Data Processing (Python)",
      "color": "purple"
    }
  },
  {
    "id": "n_mlp_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 650
    },
    "data": {
      "title": "Pandas & NumPy",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "python"
    }
  },
  {
    "id": "n_mlp_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 750
    },
    "data": {
      "title": "Data Cleaning & Preprocessing",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "python"
    }
  },
  {
    "id": "n_mlp_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 850
    },
    "data": {
      "title": "Feature Engineering",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "python"
    }
  },
  {
    "id": "supervised",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1050
    },
    "data": {
      "title": "3. Supervised Learning",
      "color": "green"
    }
  },
  {
    "id": "n_sup_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1150
    },
    "data": {
      "title": "Linear & Logistic Regression",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "supervised"
    }
  },
  {
    "id": "n_sup_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1250
    },
    "data": {
      "title": "Decision Trees & Random Forests",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "supervised"
    }
  },
  {
    "id": "n_sup_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1350
    },
    "data": {
      "title": "Support Vector Machines (SVM)",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "supervised"
    }
  },
  {
    "id": "unsupervised",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1550
    },
    "data": {
      "title": "4. Unsupervised Learning",
      "color": "yellow"
    }
  },
  {
    "id": "n_unsup_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1650
    },
    "data": {
      "title": "K-Means Clustering",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "unsupervised"
    }
  },
  {
    "id": "n_unsup_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1750
    },
    "data": {
      "title": "PCA & Dimensionality Reduction",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "unsupervised"
    }
  },
  {
    "id": "n_unsup_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1850
    },
    "data": {
      "title": "Anomaly Detection",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "unsupervised"
    }
  },
  {
    "id": "deep",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2050
    },
    "data": {
      "title": "5. Deep Learning & NNs",
      "color": "red"
    }
  },
  {
    "id": "n_mldl_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2150
    },
    "data": {
      "title": "Perceptrons & Activation Functions",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "deep"
    }
  },
  {
    "id": "n_mldl_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2250
    },
    "data": {
      "title": "PyTorch / TensorFlow Basics",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "deep"
    }
  },
  {
    "id": "n_mldl_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2350
    },
    "data": {
      "title": "CNNs & Image Classification",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "deep"
    }
  },
  {
    "id": "eval",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2550
    },
    "data": {
      "title": "6. Model Evaluation",
      "color": "orange"
    }
  },
  {
    "id": "n_eval_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2650
    },
    "data": {
      "title": "Cross-Validation",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "eval"
    }
  },
  {
    "id": "n_eval_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2750
    },
    "data": {
      "title": "Precision, Recall, ROC-AUC",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "eval"
    }
  },
  {
    "id": "n_eval_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2850
    },
    "data": {
      "title": "Hyperparameter Tuning",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "eval"
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_mlm_1-n_mlm_2",
    "source": "n_mlm_1",
    "target": "n_mlm_2"
  },
  {
    "id": "e_n_mlm_2-n_mlm_3",
    "source": "n_mlm_2",
    "target": "n_mlm_3"
  },
  {
    "id": "e_n_mlp_1-n_mlp_2",
    "source": "n_mlp_1",
    "target": "n_mlp_2"
  },
  {
    "id": "e_n_mlp_2-n_mlp_3",
    "source": "n_mlp_2",
    "target": "n_mlp_3"
  },
  {
    "id": "e_n_mlm_3-n_mlp_1",
    "source": "n_mlm_3",
    "target": "n_mlp_1"
  },
  {
    "id": "e_n_sup_1-n_sup_2",
    "source": "n_sup_1",
    "target": "n_sup_2"
  },
  {
    "id": "e_n_sup_2-n_sup_3",
    "source": "n_sup_2",
    "target": "n_sup_3"
  },
  {
    "id": "e_n_mlp_3-n_sup_1",
    "source": "n_mlp_3",
    "target": "n_sup_1"
  },
  {
    "id": "e_n_unsup_1-n_unsup_2",
    "source": "n_unsup_1",
    "target": "n_unsup_2"
  },
  {
    "id": "e_n_unsup_2-n_unsup_3",
    "source": "n_unsup_2",
    "target": "n_unsup_3"
  },
  {
    "id": "e_n_sup_3-n_unsup_1",
    "source": "n_sup_3",
    "target": "n_unsup_1"
  },
  {
    "id": "e_n_mldl_1-n_mldl_2",
    "source": "n_mldl_1",
    "target": "n_mldl_2"
  },
  {
    "id": "e_n_mldl_2-n_mldl_3",
    "source": "n_mldl_2",
    "target": "n_mldl_3"
  },
  {
    "id": "e_n_unsup_3-n_mldl_1",
    "source": "n_unsup_3",
    "target": "n_mldl_1"
  },
  {
    "id": "e_n_eval_1-n_eval_2",
    "source": "n_eval_1",
    "target": "n_eval_2"
  },
  {
    "id": "e_n_eval_2-n_eval_3",
    "source": "n_eval_2",
    "target": "n_eval_3"
  },
  {
    "id": "e_n_mldl_3-n_eval_1",
    "source": "n_mldl_3",
    "target": "n_eval_1"
  }
] as RoadmapContentEdge[];
