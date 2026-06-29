import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "sre",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "sre"
    }
  },
  {
    "id": "sre_principles",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "SRE Principles",
      "color": "blue"
    }
  },
  {
    "id": "slis_slos_slas",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "SLIs, SLOs, & SLAs",
      "color": "blue"
    }
  },
  {
    "id": "error_budgets",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "Error Budgets",
      "color": "blue"
    }
  },
  {
    "id": "toil_reduction",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Toil Reduction",
      "color": "blue"
    }
  },
  {
    "id": "linux_networking",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Linux & Networking",
      "color": "purple"
    }
  },
  {
    "id": "linux_internals",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Linux Internals",
      "color": "purple"
    }
  },
  {
    "id": "tcp_ip_dns",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "TCP/IP & DNS",
      "color": "purple"
    }
  },
  {
    "id": "troubleshooting_tools",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Troubleshooting Tools",
      "color": "purple"
    }
  },
  {
    "id": "monitoring",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Monitoring & Observability",
      "color": "green"
    }
  },
  {
    "id": "metrics_logs_traces",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Metrics, Logs, Traces",
      "color": "green"
    }
  },
  {
    "id": "prometheus",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Prometheus",
      "color": "green"
    }
  },
  {
    "id": "opentelemetry",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "OpenTelemetry",
      "color": "green"
    }
  },
  {
    "id": "incident_response",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Incident Response",
      "color": "orange"
    }
  },
  {
    "id": "on_call_routing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "On-Call & Routing",
      "color": "orange"
    }
  },
  {
    "id": "blameless_postmortems",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Blameless Postmortems",
      "color": "orange"
    }
  },
  {
    "id": "pagerduty",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "PagerDuty",
      "color": "orange"
    }
  },
  {
    "id": "chaos_engineering",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Chaos Engineering",
      "color": "red"
    }
  },
  {
    "id": "chaos_mesh",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Chaos Mesh",
      "color": "red"
    }
  },
  {
    "id": "gremlin",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Gremlin",
      "color": "red"
    }
  },
  {
    "id": "fault_injection",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Fault Injection",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-sre-sre_principles",
    "source": "sre",
    "target": "sre_principles",
    "animated": true
  },
  {
    "id": "e-sre_principles-slis_slos_slas",
    "source": "sre_principles",
    "target": "slis_slos_slas"
  },
  {
    "id": "e-sre_principles-error_budgets",
    "source": "sre_principles",
    "target": "error_budgets"
  },
  {
    "id": "e-sre_principles-toil_reduction",
    "source": "sre_principles",
    "target": "toil_reduction"
  },
  {
    "id": "e-sre_principles-linux_networking",
    "source": "sre_principles",
    "target": "linux_networking",
    "animated": true
  },
  {
    "id": "e-linux_networking-linux_internals",
    "source": "linux_networking",
    "target": "linux_internals"
  },
  {
    "id": "e-linux_networking-tcp_ip_dns",
    "source": "linux_networking",
    "target": "tcp_ip_dns"
  },
  {
    "id": "e-linux_networking-troubleshooting_tools",
    "source": "linux_networking",
    "target": "troubleshooting_tools"
  },
  {
    "id": "e-linux_networking-monitoring",
    "source": "linux_networking",
    "target": "monitoring",
    "animated": true
  },
  {
    "id": "e-monitoring-metrics_logs_traces",
    "source": "monitoring",
    "target": "metrics_logs_traces"
  },
  {
    "id": "e-monitoring-prometheus",
    "source": "monitoring",
    "target": "prometheus"
  },
  {
    "id": "e-monitoring-opentelemetry",
    "source": "monitoring",
    "target": "opentelemetry"
  },
  {
    "id": "e-monitoring-incident_response",
    "source": "monitoring",
    "target": "incident_response",
    "animated": true
  },
  {
    "id": "e-incident_response-on_call_routing",
    "source": "incident_response",
    "target": "on_call_routing"
  },
  {
    "id": "e-incident_response-blameless_postmortems",
    "source": "incident_response",
    "target": "blameless_postmortems"
  },
  {
    "id": "e-incident_response-pagerduty",
    "source": "incident_response",
    "target": "pagerduty"
  },
  {
    "id": "e-incident_response-chaos_engineering",
    "source": "incident_response",
    "target": "chaos_engineering",
    "animated": true
  },
  {
    "id": "e-chaos_engineering-chaos_mesh",
    "source": "chaos_engineering",
    "target": "chaos_mesh"
  },
  {
    "id": "e-chaos_engineering-gremlin",
    "source": "chaos_engineering",
    "target": "gremlin"
  },
  {
    "id": "e-chaos_engineering-fault_injection",
    "source": "chaos_engineering",
    "target": "fault_injection"
  }
];
