import { TopicData } from '../../types';

export const topics: Record<string, TopicData> = {
  "sdlc_stlc": {
    title: "SDLC & STLC",
    whyLearnThis: "Understanding the Software Development and Testing Life Cycles ensures QA is integrated into every phase of product delivery.",
    whenIsItUsed: "From project initiation through requirements gathering, test execution, and release sign-off.",
    whereIsItUsed: "All software engineering teams and agile delivery pipelines.",
    learningOutcomes: [
      "Explain every phase of SDLC (Planning, Analysis, Design, Implementation, Testing, Maintenance).",
      "Master the STLC phases (Requirement Analysis, Test Planning, Test Case Development, Environment Setup, Execution, Closure).",
      "Align QA milestones with sprint cycles."
    ],
    commonMistakes: [
      "Treating QA as an afterthought after development completes instead of shifting left.",
      "Conflating SDLC with STLC."
    ],
    realWorldApplications: [
      "Drafting a master test strategy document during product discovery.",
      "Participating in sprint grooming to identify edge cases early."
    ],
    resources: [
      { title: "SDLC vs STLC Explained (Software Testing Help)", type: "video_en", url: "https://www.youtube.com/watch?v=kSU2MPeptpM" },
      { title: "SDLC & STLC in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=3-M1D2K4M2I" },
      { title: "Guru99: STLC Phases Guide", type: "official", url: "https://www.guru99.com/stlc-software-testing-life-cycle.html" }
    ]
  },
  "types_of_testing": {
    title: "Types of Testing",
    whyLearnThis: "Knowing when to use functional vs non-functional testing ensures complete coverage without redundant testing effort.",
    whenIsItUsed: "When designing test plans and choosing automation strategies.",
    whereIsItUsed: "Manual and automated QA environments.",
    learningOutcomes: [
      "Categorize Functional Testing (Unit, Integration, System, Acceptance, Smoke, Regression).",
      "Understand Non-Functional Testing (Performance, Security, Usability, Accessibility, Compatibility).",
      "Implement the Testing Pyramid effectively."
    ],
    commonMistakes: [
      "Over-relying on UI end-to-end tests while neglecting fast unit and integration tests.",
      "Confusing Regression Testing with Re-testing."
    ],
    realWorldApplications: [
      "Executing smoke tests before deploying a release candidate to staging.",
      "Running regression test suites after merging pull requests."
    ],
    resources: [
      { title: "Software Testing Types (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=sbW4RThXNL8" },
      { title: "Types of Testing in Hindi (Testing Academy)", type: "video_hi", url: "https://www.youtube.com/watch?v=k2UWrEEd-lY" },
      { title: "Atlassian: Testing Types Guide", type: "official", url: "https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing" }
    ]
  },
  "test_cases_plans": {
    title: "Test Cases & Plans",
    whyLearnThis: "Well-structured test cases and test plans provide repeatable proof of software quality and prevent missed bugs.",
    whenIsItUsed: "Written during sprint planning and executed during testing cycles.",
    whereIsItUsed: "TestRail, Jira, Xray, Zephyr.",
    learningOutcomes: [
      "Write clear, actionable test steps with preconditions and expected results.",
      "Master boundary value analysis and equivalence partitioning.",
      "Structure a formal Test Plan document."
    ],
    commonMistakes: [
      "Writing vague test cases that only the author can execute.",
      "Failing to update test suites when feature requirements change."
    ],
    realWorldApplications: [
      "Creating test cases for an e-commerce checkout flow.",
      "Mapping test cases to user stories in Jira."
    ],
    resources: [
      { title: "How to Write Test Cases (Software Testing Material)", type: "video_en", url: "https://www.youtube.com/watch?v=aOZPLQth6zE" },
      { title: "Writing Test Cases in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=9ZPVAQit8Sc" },
      { title: "TestRail: Writing Efficient Test Cases", type: "official", url: "https://www.gurock.com/testrail/docs/test-cases/" }
    ]
  },
  "exploratory_testing": {
    title: "Exploratory Testing",
    whyLearnThis: "Exploratory testing leverages human intuition and domain knowledge to uncover unexpected bugs that scripted tests miss.",
    whenIsItUsed: "Used during new feature verification and risk-based testing sessions.",
    whereIsItUsed: "Agile testing charters and bug-bash sessions.",
    learningOutcomes: [
      "Create focused testing charters with defined scope and time-boxes.",
      "Combine simultaneous learning, test design, and test execution.",
      "Document unscripted defect paths systematically."
    ],
    commonMistakes: [
      "Confusing exploratory testing with unstructured ad-hoc testing.",
      "Not recording reproduction steps while exploring edge cases."
    ],
    realWorldApplications: [
      "Conducting a 60-minute bug bash before major product launches.",
      "Testing complex user workflows with unexpected input sequences."
    ],
    resources: [
      { title: "Exploratory Testing Basics (Ministry of Testing)", type: "video_en", url: "https://www.youtube.com/watch?v=dlbkG5keG1g" },
      { title: "Exploratory Testing in Hindi (Testing Academy)", type: "video_hi", url: "https://www.youtube.com/watch?v=FIorjhXKuRw" },
      { title: "Tricentis: What is Exploratory Testing?", type: "official", url: "https://www.tricentis.com/resources/exploratory-testing-guide" }
    ]
  },
  "bug_reporting": {
    title: "Bug Reporting & Jira",
    whyLearnThis: "A clear bug report enables developers to reproduce and fix defects without unnecessary back-and-forth communication.",
    whenIsItUsed: "Whenever a defect or variance from specification is discovered.",
    whereIsItUsed: "Jira, GitHub Issues, Linear, Bugzilla.",
    learningOutcomes: [
      "Structure high-quality bug reports (Title, Steps to Reproduce, Expected vs Actual, Severity/Priority, Logs/Screenshots).",
      "Classify Severity (technical impact) vs Priority (business urgency).",
      "Manage defect lifecycles in Jira workflows."
    ],
    commonMistakes: [
      "Writing generic titles like 'Button broken'.",
      "Omitting environment details (OS, browser version, device model)."
    ],
    realWorldApplications: [
      "Logging critical payment gateway failures in Jira with network payloads.",
      "Triaging daily bug backlogs with engineering managers."
    ],
    resources: [
      { title: "How to Write a Great Bug Report (Jira)", type: "video_en", url: "https://www.youtube.com/watch?v=43p8cZ3a3Ww" },
      { title: "Bug Reporting & Jira in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=gwWKnnCMQ5c" },
      { title: "Atlassian: Jira Bug Tracking Guide", type: "official", url: "https://www.atlassian.com/software/jira/use-cases/bug-tracking" }
    ]
  },
  "agile_scrum_qa": {
    title: "Agile & Scrum for QA",
    whyLearnThis: "QA engineers in Agile work embedded alongside developers, attending standups, sprint planning, and retrospectives.",
    whenIsItUsed: "Daily in cross-functional Agile team operations.",
    whereIsItUsed: "Scrum teams, Kanban boards.",
    learningOutcomes: [
      "Understand the QA role in Sprint Planning, Standups, Demos, and Retrospectives.",
      "Define Definition of Ready (DoR) and Definition of Done (DoD).",
      "Participate in Three Amigos sessions (Product Owner, Dev, QA)."
    ],
    commonMistakes: [
      "Waiting until the end of a sprint to start testing.",
      "Failing to advocate for quality during acceptance criteria definition."
    ],
    realWorldApplications: [
      "Refining acceptance criteria during sprint grooming.",
      "Providing QA sign-off before stories move to Done."
    ],
    resources: [
      { title: "Agile QA Testing (Software Testing Help)", type: "video_en", url: "https://www.youtube.com/watch?v=srvUrASNj0s" },
      { title: "Agile & Scrum in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
      { title: "Scrum.org: Quality in Scrum", type: "official", url: "https://www.scrum.org/resources/blog/quality-scrum" }
    ]
  },
  "programming_for_qa": {
    title: "Programming for QA (Java/Python/JS)",
    whyLearnThis: "Programming skills are required to transition from manual testing to Test Automation Engineering.",
    whenIsItUsed: "When writing automated test scripts, utility functions, and test frameworks.",
    whereIsItUsed: "VS Code, IntelliJ IDEA, PyCharm.",
    learningOutcomes: [
      "Master core programming concepts (Data structures, OOP, Async execution).",
      "Use assertion libraries (JUnit, PyTest, Jest).",
      "Handle files, JSON parsing, and environment variables in code."
    ],
    commonMistakes: [
      "Writing unmaintainable test code without using design patterns like Page Object Model (POM).",
      "Hardcoding test data inside test scripts."
    ],
    realWorldApplications: [
      "Writing reusable helper functions to generate dynamic test users.",
      "Building modular automated test suites."
    ],
    resources: [
      { title: "Python for Automation (Programming with Mosh)", type: "video_en", url: "https://www.youtube.com/watch?v=kEEwTin0MRU" },
      { title: "Java for Automation in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=hKB-YGF14SY" },
      { title: "FreeCodeCamp: Programming Basics", type: "official", url: "https://www.freecodecamp.org/news/learn-coding-for-beginners/" }
    ]
  },
  "selenium_webdriver": {
    title: "Selenium WebDriver",
    whyLearnThis: "Selenium is the standard browser automation framework supporting multiple browsers and languages.",
    whenIsItUsed: "When building cross-browser automated UI test suites for web applications.",
    whereIsItUsed: "Java, Python, C#, JS with Selenium Grid.",
    learningOutcomes: [
      "Locate elements using XPath, CSS Selectors, ID, and Name.",
      "Master explicit and implicit waits to handle dynamic DOM elements.",
      "Implement the Page Object Model (POM) design pattern."
    ],
    commonMistakes: [
      "Overusing Thread.sleep() causing slow, flaky tests instead of explicit waits.",
      "Writing brittle absolute XPath selectors."
    ],
    realWorldApplications: [
      "Automating cross-browser login and checkout validation on Chrome, Firefox, and Safari.",
      "Running parallel tests across Selenium Grid infrastructure."
    ],
    resources: [
      { title: "Selenium WebDriver Full Course (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=FRn5J31eGow" },
      { title: "Selenium Tutorial in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=kiHu0-Z6xHI" },
      { title: "Selenium Official Documentation", type: "official", url: "https://www.selenium.dev/documentation/" }
    ]
  },
  "cypress_playwright": {
    title: "Cypress & Playwright",
    whyLearnThis: "Modern JavaScript end-to-end testing frameworks offer faster execution, automatic waiting, and superior developer debugging tools.",
    whenIsItUsed: "Used for modern web app end-to-end (E2E) and component testing.",
    whereIsItUsed: "Node.js, React, Next.js, Vue, Angular projects.",
    learningOutcomes: [
      "Write Playwright & Cypress test suites in TypeScript.",
      "Use automatic waiting, network interception (mocking), and visual snapshot testing.",
      "Execute multi-browser tests in headful and headless modes."
    ],
    commonMistakes: [
      "Using Cypress/Playwright like Selenium without taking advantage of native API interception.",
      "Not cleaning up database state between test runs."
    ],
    realWorldApplications: [
      "Testing complex single-page app (SPA) user flows in Playwright.",
      "Running headless Playwright tests inside GitHub Actions CI."
    ],
    resources: [
      { title: "Playwright Beginner Course (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=Xz6lhE3y5pQ" },
      { title: "Cypress Tutorial in Hindi (Code Step By Step)", type: "video_hi", url: "https://www.youtube.com/watch?v=0h5U39O8Z9E" },
      { title: "Playwright Docs", type: "official", url: "https://playwright.dev/" }
    ]
  },
  "postman_basics": {
    title: "Postman Basics",
    whyLearnThis: "Postman is the essential tool for inspecting, testing, documenting, and automating REST and GraphQL APIs.",
    whenIsItUsed: "During API development, manual API verification, and collection test automation.",
    whereIsItUsed: "Backend and integration testing.",
    learningOutcomes: [
      "Construct GET, POST, PUT, DELETE requests with headers, query params, and body data.",
      "Write test assertions in Postman using JavaScript (pm.test).",
      "Organize environment variables and run collection suites using Newman CLI."
    ],
    commonMistakes: [
      "Hardcoding authentication tokens instead of using Postman environment variables.",
      "Not writing assertions to validate HTTP status codes and JSON schema."
    ],
    realWorldApplications: [
      "Automating regression test runs for REST APIs in Newman.",
      "Sharing API collection specifications with frontend developers."
    ],
    resources: [
      { title: "Postman Complete Course (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4" },
      { title: "Postman Tutorial in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { title: "Postman Learning Center", type: "official", url: "https://learning.postman.com/docs/getting-started/introduction/" }
    ]
  },
  "rest_assured": {
    title: "REST Assured",
    whyLearnThis: "REST Assured simplifies automated testing of RESTful APIs in Java with a fluent given-when-then syntax.",
    whenIsItUsed: "When building Java-based API test automation frameworks.",
    whereIsItUsed: "Java test suites with TestNG or JUnit.",
    learningOutcomes: [
      "Use Given-When-Then syntax for API requests.",
      "Perform JSON and XML schema validation.",
      "Deserialize API JSON responses directly into Java POJO objects."
    ],
    commonMistakes: [
      "Failing to log response details when assertions fail.",
      "Not handling OAuth2 bearer token refreshes within framework hooks."
    ],
    realWorldApplications: [
      "Testing microservice REST endpoints in Java CI/CD pipelines.",
      "Validating complex payload schemas automatically."
    ],
    resources: [
      { title: "REST Assured API Automation (Testing Academy)", type: "video_en", url: "https://www.youtube.com/watch?v=JJW2V1k4XmQ" },
      { title: "REST Assured in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=9ZPVAQit8Sc" },
      { title: "REST Assured Official Usage Guide", type: "official", url: "https://github.com/rest-assured/rest-assured/wiki/Usage" }
    ]
  },
  "graphql_testing": {
    title: "GraphQL Testing",
    whyLearnThis: "GraphQL APIs require specialized testing strategies for queries, mutations, subscriptions, and schema validations.",
    whenIsItUsed: "When working with applications backed by GraphQL endpoints.",
    whereIsItUsed: "Postman, Insomnia, Playwright, Apollo Client testing utilities.",
    learningOutcomes: [
      "Construct GraphQL Queries, Mutations, and Variables payloads.",
      "Validate response structures and data types.",
      "Test field-level authorization and error arrays."
    ],
    commonMistakes: [
      "Assuming a 200 OK HTTP status code means no GraphQL errors occurred.",
      "Ignoring deep query performance and N+1 resolver issues."
    ],
    realWorldApplications: [
      "Testing GraphQL user mutations and checking error payload structures.",
      "Automating GraphQL schema validation in CI pipeline checks."
    ],
    resources: [
      { title: "GraphQL Testing Course (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=eIQh02xuVw4" },
      { title: "GraphQL Explained in Hindi (Thapa Technical)", type: "video_hi", url: "https://www.youtube.com/watch?v=U3xXpQk4vF0" },
      { title: "GraphQL Official Docs", type: "official", url: "https://graphql.org/learn/" }
    ]
  },
  "ci_cd_integration": {
    title: "CI/CD Integration",
    whyLearnThis: "Integrating automated tests into CI/CD pipelines guarantees that broken code is caught before reaching production.",
    whenIsItUsed: "Configured during project setup and executed on every git push or pull request.",
    whereIsItUsed: "GitHub Actions, GitLab CI, Jenkins, CircleCI.",
    learningOutcomes: [
      "Write YAML pipeline configurations for running tests automatically.",
      "Publish HTML test reports (Allure, JUnit XML) as pipeline artifacts.",
      "Block pull request merges when test suites fail."
    ],
    commonMistakes: [
      "Running long, slow E2E test suites on every minor commit instead of staging triggers.",
      "Not caching dependencies (npm node_modules, maven repo), making CI slow."
    ],
    realWorldApplications: [
      "Configuring GitHub Actions to run Cypress tests on PR creation.",
      "Generating automated test coverage reports after builds."
    ],
    resources: [
      { title: "GitHub Actions for QA (TechWorld with Nana)", type: "video_en", url: "https://www.youtube.com/watch?v=R8_veQiYBjU" },
      { title: "Jenkins & CI/CD in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=d83eSnlJlNc" },
      { title: "GitHub Actions Docs", type: "official", url: "https://docs.github.com/en/actions" }
    ]
  },
  "performance_testing": {
    title: "Performance Testing (JMeter)",
    whyLearnThis: "Performance testing measures responsiveness, throughput, and stability of systems under heavy user workloads.",
    whenIsItUsed: "Before major feature launches, marketing campaigns, or architecture redesigns.",
    whereIsItUsed: "Apache JMeter, k6, Gatling.",
    learningOutcomes: [
      "Differentiate Load Testing, Stress Testing, Endurance Testing, and Spike Testing.",
      "Build JMeter Test Plans with Thread Groups, HTTP Samplers, and Listeners.",
      "Analyze response times, throughput (TPS), error rates, and resource utilization."
    ],
    commonMistakes: [
      "Running load tests from a single machine without distributed load generation.",
      "Testing against non-production-like database sizes."
    ],
    realWorldApplications: [
      "Simulating 10,000 concurrent users buying tickets during a flash sale.",
      "Identifying memory leaks during 24-hour endurance testing."
    ],
    resources: [
      { title: "JMeter Tutorial for Beginners (Software Testing Material)", type: "video_en", url: "https://www.youtube.com/watch?v=mDydFkg24kU" },
      { title: "JMeter in Hindi (Testing Academy)", type: "video_hi", url: "https://www.youtube.com/watch?v=k2UWrEEd-lY" },
      { title: "Apache JMeter User Manual", type: "official", url: "https://jmeter.apache.org/usermanual/index.html" }
    ]
  },
  "mobile_testing": {
    title: "Mobile Testing (Appium)",
    whyLearnThis: "Mobile testing validates native Android and iOS application behavior across fragmented device models and screen sizes.",
    whenIsItUsed: "During mobile application development and regression cycles.",
    whereIsItUsed: "Appium, BrowserStack, AWS Device Farm, Xcode Simulator, Android Emulator.",
    learningOutcomes: [
      "Set up Appium Server and Desired Capabilities for Android and iOS.",
      "Inspect mobile UI elements using Appium Inspector.",
      "Automate mobile gestures (swiping, scrolling, pinching, device rotation)."
    ],
    commonMistakes: [
      "Relying solely on emulators without testing on real physical devices.",
      "Not handling permission popups and network condition variations."
    ],
    realWorldApplications: [
      "Automating user onboarding tests across 50 mobile device profiles on BrowserStack.",
      "Validating offline mode behavior in mobile banking apps."
    ],
    resources: [
      { title: "Appium Mobile Automation Course (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=1J0A4a_uG3w" },
      { title: "Appium Tutorial in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=ada99UCvELI" },
      { title: "Appium Official Documentation", type: "official", url: "http://appium.io/docs/en/about-appium/intro/" }
    ]
  }
};
