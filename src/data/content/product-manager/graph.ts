import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "product-manager",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "productManager"
    }
  },
  {
    "id": "pm_fundamentals",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Product Management 101",
      "color": "blue"
    }
  },
  {
    "id": "product_lifecycle",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "Product Lifecycle",
      "color": "blue"
    }
  },
  {
    "id": "user_empathy",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "User Empathy & Discovery",
      "color": "blue"
    }
  },
  {
    "id": "market_research",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Market Research",
      "color": "blue"
    }
  },
  {
    "id": "strategy_vision",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Strategy & Vision",
      "color": "purple"
    }
  },
  {
    "id": "okrs_kpis",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "OKRs & KPIs",
      "color": "purple"
    }
  },
  {
    "id": "product_roadmap",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Product Roadmap",
      "color": "purple"
    }
  },
  {
    "id": "competitive_analysis",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Competitive Analysis",
      "color": "purple"
    }
  },
  {
    "id": "execution",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Execution & Agile",
      "color": "green"
    }
  },
  {
    "id": "user_stories_epics",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "User Stories & Epics",
      "color": "green"
    }
  },
  {
    "id": "sprint_planning",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Sprint Planning",
      "color": "green"
    }
  },
  {
    "id": "prioritization_frameworks",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Prioritization (RICE, MoSCoW)",
      "color": "green"
    }
  },
  {
    "id": "design_tech",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Design & Tech for PMs",
      "color": "orange"
    }
  },
  {
    "id": "wireframing_for_pms",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Wireframing for PMs",
      "color": "orange"
    }
  },
  {
    "id": "tech_stack_basics",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Tech Stack Basics for PMs",
      "color": "orange"
    }
  },
  {
    "id": "data_driven_decisions",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Data-Driven Decisions",
      "color": "orange"
    }
  },
  {
    "id": "go_to_market",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Go-to-Market (GTM)",
      "color": "red"
    }
  },
  {
    "id": "pricing_strategy",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Pricing Strategy",
      "color": "red"
    }
  },
  {
    "id": "product_launch",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Product Launch Strategy",
      "color": "red"
    }
  },
  {
    "id": "growth_metrics",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Growth & Retention Metrics",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-product-manager-pm_fundamentals",
    "source": "product-manager",
    "target": "pm_fundamentals",
    "animated": true
  },
  {
    "id": "e-pm_fundamentals-product_lifecycle",
    "source": "pm_fundamentals",
    "target": "product_lifecycle"
  },
  {
    "id": "e-pm_fundamentals-user_empathy",
    "source": "pm_fundamentals",
    "target": "user_empathy"
  },
  {
    "id": "e-pm_fundamentals-market_research",
    "source": "pm_fundamentals",
    "target": "market_research"
  },
  {
    "id": "e-pm_fundamentals-strategy_vision",
    "source": "pm_fundamentals",
    "target": "strategy_vision",
    "animated": true
  },
  {
    "id": "e-strategy_vision-okrs_kpis",
    "source": "strategy_vision",
    "target": "okrs_kpis"
  },
  {
    "id": "e-strategy_vision-product_roadmap",
    "source": "strategy_vision",
    "target": "product_roadmap"
  },
  {
    "id": "e-strategy_vision-competitive_analysis",
    "source": "strategy_vision",
    "target": "competitive_analysis"
  },
  {
    "id": "e-strategy_vision-execution",
    "source": "strategy_vision",
    "target": "execution",
    "animated": true
  },
  {
    "id": "e-execution-user_stories_epics",
    "source": "execution",
    "target": "user_stories_epics"
  },
  {
    "id": "e-execution-sprint_planning",
    "source": "execution",
    "target": "sprint_planning"
  },
  {
    "id": "e-execution-prioritization_frameworks",
    "source": "execution",
    "target": "prioritization_frameworks"
  },
  {
    "id": "e-execution-design_tech",
    "source": "execution",
    "target": "design_tech",
    "animated": true
  },
  {
    "id": "e-design_tech-wireframing_for_pms",
    "source": "design_tech",
    "target": "wireframing_for_pms"
  },
  {
    "id": "e-design_tech-tech_stack_basics",
    "source": "design_tech",
    "target": "tech_stack_basics"
  },
  {
    "id": "e-design_tech-data_driven_decisions",
    "source": "design_tech",
    "target": "data_driven_decisions"
  },
  {
    "id": "e-design_tech-go_to_market",
    "source": "design_tech",
    "target": "go_to_market",
    "animated": true
  },
  {
    "id": "e-go_to_market-pricing_strategy",
    "source": "go_to_market",
    "target": "pricing_strategy"
  },
  {
    "id": "e-go_to_market-product_launch",
    "source": "go_to_market",
    "target": "product_launch"
  },
  {
    "id": "e-go_to_market-growth_metrics",
    "source": "go_to_market",
    "target": "growth_metrics"
  }
];
