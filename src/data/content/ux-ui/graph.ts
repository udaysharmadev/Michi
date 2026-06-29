import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "ux-ui",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "uxUiDesigner"
    }
  },
  {
    "id": "ux_fundamentals",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "UX Fundamentals",
      "color": "blue"
    }
  },
  {
    "id": "design_thinking",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "Design Thinking",
      "color": "blue"
    }
  },
  {
    "id": "user_research",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "User Research",
      "color": "blue"
    }
  },
  {
    "id": "personas_journey_maps",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Personas & Journey Maps",
      "color": "blue"
    }
  },
  {
    "id": "information_architecture",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Information Architecture",
      "color": "purple"
    }
  },
  {
    "id": "card_sorting",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Card Sorting",
      "color": "purple"
    }
  },
  {
    "id": "sitemaps",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Sitemaps",
      "color": "purple"
    }
  },
  {
    "id": "wireframing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Wireframing",
      "color": "purple"
    }
  },
  {
    "id": "ui_design",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "UI Design",
      "color": "green"
    }
  },
  {
    "id": "color_theory",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Color Theory",
      "color": "green"
    }
  },
  {
    "id": "typography",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Typography",
      "color": "green"
    }
  },
  {
    "id": "layout_grids",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Layout & Grids",
      "color": "green"
    }
  },
  {
    "id": "prototyping",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Prototyping & Tools",
      "color": "orange"
    }
  },
  {
    "id": "figma_basics",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Figma Basics",
      "color": "orange"
    }
  },
  {
    "id": "advanced_prototyping",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Advanced Prototyping",
      "color": "orange"
    }
  },
  {
    "id": "design_systems",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Design Systems",
      "color": "orange"
    }
  },
  {
    "id": "usability",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Usability & Handoff",
      "color": "red"
    }
  },
  {
    "id": "usability_testing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Usability Testing",
      "color": "red"
    }
  },
  {
    "id": "accessibility_a11y",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Accessibility (a11y)",
      "color": "red"
    }
  },
  {
    "id": "dev_handoff",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Developer Handoff",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-ux-ui-ux_fundamentals",
    "source": "ux-ui",
    "target": "ux_fundamentals",
    "animated": true
  },
  {
    "id": "e-ux_fundamentals-design_thinking",
    "source": "ux_fundamentals",
    "target": "design_thinking"
  },
  {
    "id": "e-ux_fundamentals-user_research",
    "source": "ux_fundamentals",
    "target": "user_research"
  },
  {
    "id": "e-ux_fundamentals-personas_journey_maps",
    "source": "ux_fundamentals",
    "target": "personas_journey_maps"
  },
  {
    "id": "e-ux_fundamentals-information_architecture",
    "source": "ux_fundamentals",
    "target": "information_architecture",
    "animated": true
  },
  {
    "id": "e-information_architecture-card_sorting",
    "source": "information_architecture",
    "target": "card_sorting"
  },
  {
    "id": "e-information_architecture-sitemaps",
    "source": "information_architecture",
    "target": "sitemaps"
  },
  {
    "id": "e-information_architecture-wireframing",
    "source": "information_architecture",
    "target": "wireframing"
  },
  {
    "id": "e-information_architecture-ui_design",
    "source": "information_architecture",
    "target": "ui_design",
    "animated": true
  },
  {
    "id": "e-ui_design-color_theory",
    "source": "ui_design",
    "target": "color_theory"
  },
  {
    "id": "e-ui_design-typography",
    "source": "ui_design",
    "target": "typography"
  },
  {
    "id": "e-ui_design-layout_grids",
    "source": "ui_design",
    "target": "layout_grids"
  },
  {
    "id": "e-ui_design-prototyping",
    "source": "ui_design",
    "target": "prototyping",
    "animated": true
  },
  {
    "id": "e-prototyping-figma_basics",
    "source": "prototyping",
    "target": "figma_basics"
  },
  {
    "id": "e-prototyping-advanced_prototyping",
    "source": "prototyping",
    "target": "advanced_prototyping"
  },
  {
    "id": "e-prototyping-design_systems",
    "source": "prototyping",
    "target": "design_systems"
  },
  {
    "id": "e-prototyping-usability",
    "source": "prototyping",
    "target": "usability",
    "animated": true
  },
  {
    "id": "e-usability-usability_testing",
    "source": "usability",
    "target": "usability_testing"
  },
  {
    "id": "e-usability-accessibility_a11y",
    "source": "usability",
    "target": "accessibility_a11y"
  },
  {
    "id": "e-usability-dev_handoff",
    "source": "usability",
    "target": "dev_handoff"
  }
];
