import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "mlops",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "mlops"
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
      "label": "MLOps Foundations",
      "color": "blue"
    }
  },
  {
    "id": "ml_lifecycle",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "ML Lifecycle",
      "color": "blue"
    }
  },
  {
    "id": "version_control_data",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "Data & Model Versioning (DVC)",
      "color": "blue"
    }
  },
  {
    "id": "ci_cd_ml",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "CI/CD for ML",
      "color": "blue"
    }
  },
  {
    "id": "model_training",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Model Training & Tracking",
      "color": "purple"
    }
  },
  {
    "id": "mlflow",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "MLflow",
      "color": "purple"
    }
  },
  {
    "id": "weights_biases",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Weights & Biases",
      "color": "purple"
    }
  },
  {
    "id": "kubeflow",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Kubeflow",
      "color": "purple"
    }
  },
  {
    "id": "model_deployment",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Model Deployment",
      "color": "green"
    }
  },
  {
    "id": "docker_kubernetes_ml",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Docker & K8s for ML",
      "color": "green"
    }
  },
  {
    "id": "tf_serving",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "TensorFlow Serving",
      "color": "green"
    }
  },
  {
    "id": "torchserve",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "TorchServe",
      "color": "green"
    }
  },
  {
    "id": "monitoring",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Monitoring & Maintenance",
      "color": "orange"
    }
  },
  {
    "id": "model_drift",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Model Drift",
      "color": "orange"
    }
  },
  {
    "id": "data_drift",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Data Drift",
      "color": "orange"
    }
  },
  {
    "id": "prometheus_grafana_ml",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Monitoring with Prometheus/Grafana",
      "color": "orange"
    }
  },
  {
    "id": "cloud_ml",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Cloud ML Platforms",
      "color": "red"
    }
  },
  {
    "id": "sagemaker",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "AWS SageMaker",
      "color": "red"
    }
  },
  {
    "id": "vertex_ai",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "GCP Vertex AI",
      "color": "red"
    }
  },
  {
    "id": "azure_ml",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Azure ML",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-mlops-foundations",
    "source": "mlops",
    "target": "foundations",
    "animated": true
  },
  {
    "id": "e-foundations-ml_lifecycle",
    "source": "foundations",
    "target": "ml_lifecycle"
  },
  {
    "id": "e-foundations-version_control_data",
    "source": "foundations",
    "target": "version_control_data"
  },
  {
    "id": "e-foundations-ci_cd_ml",
    "source": "foundations",
    "target": "ci_cd_ml"
  },
  {
    "id": "e-foundations-model_training",
    "source": "foundations",
    "target": "model_training",
    "animated": true
  },
  {
    "id": "e-model_training-mlflow",
    "source": "model_training",
    "target": "mlflow"
  },
  {
    "id": "e-model_training-weights_biases",
    "source": "model_training",
    "target": "weights_biases"
  },
  {
    "id": "e-model_training-kubeflow",
    "source": "model_training",
    "target": "kubeflow"
  },
  {
    "id": "e-model_training-model_deployment",
    "source": "model_training",
    "target": "model_deployment",
    "animated": true
  },
  {
    "id": "e-model_deployment-docker_kubernetes_ml",
    "source": "model_deployment",
    "target": "docker_kubernetes_ml"
  },
  {
    "id": "e-model_deployment-tf_serving",
    "source": "model_deployment",
    "target": "tf_serving"
  },
  {
    "id": "e-model_deployment-torchserve",
    "source": "model_deployment",
    "target": "torchserve"
  },
  {
    "id": "e-model_deployment-monitoring",
    "source": "model_deployment",
    "target": "monitoring",
    "animated": true
  },
  {
    "id": "e-monitoring-model_drift",
    "source": "monitoring",
    "target": "model_drift"
  },
  {
    "id": "e-monitoring-data_drift",
    "source": "monitoring",
    "target": "data_drift"
  },
  {
    "id": "e-monitoring-prometheus_grafana_ml",
    "source": "monitoring",
    "target": "prometheus_grafana_ml"
  },
  {
    "id": "e-monitoring-cloud_ml",
    "source": "monitoring",
    "target": "cloud_ml",
    "animated": true
  },
  {
    "id": "e-cloud_ml-sagemaker",
    "source": "cloud_ml",
    "target": "sagemaker"
  },
  {
    "id": "e-cloud_ml-vertex_ai",
    "source": "cloud_ml",
    "target": "vertex_ai"
  },
  {
    "id": "e-cloud_ml-azure_ml",
    "source": "cloud_ml",
    "target": "azure_ml"
  }
];
