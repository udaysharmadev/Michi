import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "qa-engineer",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "qaEngineer"
    }
  },
  {
    "id": "testing_fundamentals",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Testing Fundamentals",
      "color": "blue"
    }
  },
  {
    "id": "sdlc_stlc",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "SDLC & STLC",
      "color": "blue"
    }
  },
  {
    "id": "types_of_testing",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "Types of Testing",
      "color": "blue"
    }
  },
  {
    "id": "test_cases_plans",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Test Cases & Plans",
      "color": "blue"
    }
  },
  {
    "id": "manual_testing",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Manual Testing",
      "color": "purple"
    }
  },
  {
    "id": "exploratory_testing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Exploratory Testing",
      "color": "purple"
    }
  },
  {
    "id": "bug_reporting",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Bug Reporting & Jira",
      "color": "purple"
    }
  },
  {
    "id": "agile_scrum_qa",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Agile & Scrum for QA",
      "color": "purple"
    }
  },
  {
    "id": "automation_basics",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Automation Basics",
      "color": "green"
    }
  },
  {
    "id": "programming_for_qa",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Programming for QA (Java/Python/JS)",
      "color": "green"
    }
  },
  {
    "id": "selenium_webdriver",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Selenium WebDriver",
      "color": "green"
    }
  },
  {
    "id": "cypress_playwright",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Cypress & Playwright",
      "color": "green"
    }
  },
  {
    "id": "api_testing",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "API Testing",
      "color": "orange"
    }
  },
  {
    "id": "postman_basics",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Postman Basics",
      "color": "orange"
    }
  },
  {
    "id": "rest_assured",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "REST Assured",
      "color": "orange"
    }
  },
  {
    "id": "graphql_testing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "GraphQL Testing",
      "color": "orange"
    }
  },
  {
    "id": "advanced_qa",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Advanced QA",
      "color": "red"
    }
  },
  {
    "id": "ci_cd_integration",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "CI/CD Integration",
      "color": "red"
    }
  },
  {
    "id": "performance_testing",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Performance Testing (JMeter)",
      "color": "red"
    }
  },
  {
    "id": "mobile_testing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Mobile Testing (Appium)",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-qa-engineer-testing_fundamentals",
    "source": "qa-engineer",
    "target": "testing_fundamentals",
    "animated": true
  },
  {
    "id": "e-testing_fundamentals-sdlc_stlc",
    "source": "testing_fundamentals",
    "target": "sdlc_stlc"
  },
  {
    "id": "e-testing_fundamentals-types_of_testing",
    "source": "testing_fundamentals",
    "target": "types_of_testing"
  },
  {
    "id": "e-testing_fundamentals-test_cases_plans",
    "source": "testing_fundamentals",
    "target": "test_cases_plans"
  },
  {
    "id": "e-testing_fundamentals-manual_testing",
    "source": "testing_fundamentals",
    "target": "manual_testing",
    "animated": true
  },
  {
    "id": "e-manual_testing-exploratory_testing",
    "source": "manual_testing",
    "target": "exploratory_testing"
  },
  {
    "id": "e-manual_testing-bug_reporting",
    "source": "manual_testing",
    "target": "bug_reporting"
  },
  {
    "id": "e-manual_testing-agile_scrum_qa",
    "source": "manual_testing",
    "target": "agile_scrum_qa"
  },
  {
    "id": "e-manual_testing-automation_basics",
    "source": "manual_testing",
    "target": "automation_basics",
    "animated": true
  },
  {
    "id": "e-automation_basics-programming_for_qa",
    "source": "automation_basics",
    "target": "programming_for_qa"
  },
  {
    "id": "e-automation_basics-selenium_webdriver",
    "source": "automation_basics",
    "target": "selenium_webdriver"
  },
  {
    "id": "e-automation_basics-cypress_playwright",
    "source": "automation_basics",
    "target": "cypress_playwright"
  },
  {
    "id": "e-automation_basics-api_testing",
    "source": "automation_basics",
    "target": "api_testing",
    "animated": true
  },
  {
    "id": "e-api_testing-postman_basics",
    "source": "api_testing",
    "target": "postman_basics"
  },
  {
    "id": "e-api_testing-rest_assured",
    "source": "api_testing",
    "target": "rest_assured"
  },
  {
    "id": "e-api_testing-graphql_testing",
    "source": "api_testing",
    "target": "graphql_testing"
  },
  {
    "id": "e-api_testing-advanced_qa",
    "source": "api_testing",
    "target": "advanced_qa",
    "animated": true
  },
  {
    "id": "e-advanced_qa-ci_cd_integration",
    "source": "advanced_qa",
    "target": "ci_cd_integration"
  },
  {
    "id": "e-advanced_qa-performance_testing",
    "source": "advanced_qa",
    "target": "performance_testing"
  },
  {
    "id": "e-advanced_qa-mobile_testing",
    "source": "advanced_qa",
    "target": "mobile_testing"
  }
];
