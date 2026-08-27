import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "sdlc_stlc": {
    whyLearnThis: "Software testing doesn't happen in a vacuum. To effectively test software, you must understand how it is built. The Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) provide the structured processes that turn ideas into reliable products.",
    whenIsItUsed: "Guiding the entire testing process from requirements analysis to deployment.",
    whereIsItUsed: "Enterprise software development, Agile/Waterfall methodologies.",
    whatComesNext: "Types of Testing",
    learningOutcomes: [
      "Understand the phases of the SDLC (Planning, Design, Implementation, Testing, Deployment, Maintenance).",
      "Understand the phases of the STLC (Requirement Analysis, Test Planning, Test Case Development, Environment Setup, Execution, Closure).",
      "Explain the concept of 'Shift-Left Testing' (testing early in the SDLC).",
      "Identify the roles of QA in different SDLC phases.",
      "Understand the V-Model of testing."
    ],
    commonMistakes: [
      "Believing QA only happens at the very end of the SDLC (which leads to expensive, late-stage bug discoveries).",
      "Starting to write test cases without fully understanding the requirements analysis phase.",
      "Ignoring the Test Closure phase, failing to document lessons learned for the next sprint."
    ],
    realWorldApplications: [
      "A QA Engineer joining a sprint planning meeting (Shift-Left) to identify edge cases in the requirements before developers write a single line of code.",
      "Creating a Test Plan document during the STLC phase to allocate resources and timelines for a major release.",
      "Conducting a retrospective (STLC Closure) to analyze why a production bug slipped through testing."
    ],
    resources: [
      { type: "official", title: "ISTQB Glossary (SDLC/STLC terms)", url: "https://glossary.istqb.org/" },
      { type: "video_en", title: "SDLC & STLC Explained", url: "https://www.youtube.com/watch?v=qMmVND62EKE" },
      { type: "video_hi", title: "SDLC and STLC in Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "What is Shift Left Testing?", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
      { type: "github", title: "Awesome Software Quality", url: "https://github.com/ligurio/awesome-software-quality" },
      { type: "cheat_sheet", title: "STLC Phases Cheat Sheet", url: "https://www.guru99.com/software-testing-life-cycle.html" },
      { type: "deep_dive", title: "Lessons Learned in Software Testing (Book)", url: "https://martinfowler.com/articles/practical-test-pyramid.html" }
    ]
  },
  "types_of_testing": {
    whyLearnThis: "Not all bugs are functional. A website might work perfectly but crash under load (Performance), or look terrible on an iPhone (UI/UX), or expose user passwords (Security). A QA must know which type of testing to apply.",
    whenIsItUsed: "Categorizing test coverage and designing comprehensive test strategies.",
    whereIsItUsed: "Unit, Integration, System, Acceptance testing (The Testing Pyramid).",
    whatComesNext: "Test Cases & Plans",
    learningOutcomes: [
      "Differentiate between Functional and Non-Functional testing.",
      "Understand the Testing Pyramid: Unit, Integration, and E2E (End-to-End).",
      "Explain Black Box, White Box, and Grey Box testing.",
      "Define Smoke Testing vs Regression Testing.",
      "Understand User Acceptance Testing (UAT)."
    ],
    commonMistakes: [
      "Creating an 'Ice Cream Cone' testing strategy (thousands of slow, flaky E2E tests and very few fast unit tests).",
      "Confusing Smoke Testing (checking if the build is basically alive) with Regression Testing (checking if new code broke old features).",
      "Only focusing on Functional testing while completely ignoring Non-Functional requirements like accessibility and performance."
    ],
    realWorldApplications: [
      "Running a 5-minute Smoke Test automatically when a new build is deployed to staging, aborting the deployment if the login page fails to load.",
      "Running a massive Regression suite over the weekend to ensure refactored database code didn't break existing UI workflows.",
      "A developer writing Unit tests for a specific algorithm (White Box), while the QA performs E2E tests via the UI (Black Box)."
    ],
    resources: [
      { type: "official", title: "Martin Fowler: The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
      { type: "video_en", title: "Software Testing Types (freeCodeCamp)", url: "https://www.youtube.com/watch?v=u6QfCXwuZyI" },
      { type: "video_hi", title: "Types of Software Testing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Black Box vs White Box Testing", url: "https://www.guru99.com/back-box-vs-white-box-testing.html" },
      { type: "github", title: "Software Testing Notes", url: "https://github.com/TheJambo/awesome-testing" },
      { type: "cheat_sheet", title: "Software Testing Types Mindmap", url: "https://www.softwaretestinghelp.com/types-of-software-testing/" },
      { type: "deep_dive", title: "Google Testing Blog: Just Say No to More End-to-End Tests", url: "https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html" }
    ]
  },
  "test_cases_plans": {
    whyLearnThis: "QA is an engineering discipline based on logic and evidence, not random clicking. Writing clear, reproducible test cases ensures that the software is systematically validated against business requirements.",
    whenIsItUsed: "Translating business requirements (Jira tickets) into actionable steps for manual or automated testing.",
    whereIsItUsed: "TestRail, Zephyr, Excel, Jira.",
    whatComesNext: "Exploratory Testing",
    learningOutcomes: [
      "Write effective Test Cases (Title, Preconditions, Steps, Expected Result, Actual Result).",
      "Apply Equivalence Partitioning and Boundary Value Analysis to reduce the number of test cases.",
      "Create a comprehensive Test Plan (Scope, Resources, Schedule, Risks).",
      "Implement the Requirement Traceability Matrix (RTM).",
      "Understand positive vs negative testing."
    ],
    commonMistakes: [
      "Writing test steps that are too vague (e.g., 'Click button and see if it works') instead of exact reproducible actions.",
      "Writing hundreds of test cases for a single text input instead of using Boundary Value Analysis to pick the 3 most important edge cases.",
      "Testing only the 'Happy Path' and forgetting to test invalid inputs (Negative testing)."
    ],
    realWorldApplications: [
      "Using Boundary Value Analysis to test an age input field by writing test cases for exactly 17, 18, and 19 years old.",
      "Writing a Test Plan that outlines that testing iOS Safari is 'in scope' but Internet Explorer 11 is 'out of scope'.",
      "Using a Traceability Matrix to prove to an auditor that every single line item in the compliance document has a corresponding passing test case."
    ],
    resources: [
      { type: "official", title: "IEEE 829 Standard for Software Test Documentation", url: "https://standards.ieee.org/" },
      { type: "video_en", title: "How to Write Test Cases", url: "https://www.youtube.com/watch?v=Kz69OQk0wM0" },
      { type: "video_hi", title: "Test Cases in Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Boundary Value Analysis and Equivalence Partitioning", url: "https://www.guru99.com/equivalence-partitioning-boundary-value-analysis.html" },
      { type: "github", title: "Test Case Templates", url: "https://github.com/testdouble/contributing-tests" },
      { type: "cheat_sheet", title: "Test Case Design Techniques", url: "https://www.guru99.com/software-testing.html" },
      { type: "deep_dive", title: "Agile Testing: A Practical Guide (Book)", url: "https://agiletester.ca/" }
    ]
  },
  "exploratory_testing": {
    whyLearnThis: "Automated scripts only check what they are programmed to check. Exploratory testing relies on human intuition, domain knowledge, and creativity to find complex, unforeseen bugs that scripted tests miss.",
    whenIsItUsed: "Testing complex business logic, UI edge cases, and uncovering unknown unknowns.",
    whereIsItUsed: "Agile Sprints, Bug Bashes, Usability testing.",
    whatComesNext: "Bug Reporting",
    learningOutcomes: [
      "Understand the difference between Scripted Testing and Exploratory Testing.",
      "Apply Session-Based Test Management (SBTM) to structure exploratory testing.",
      "Use heuristics and 'tours' to guide exploration.",
      "Develop a testing mindset (thinking like a malicious user or a confused user).",
      "Document exploratory findings effectively without pre-written test cases."
    ],
    commonMistakes: [
      "Confusing Exploratory Testing with 'Ad-hoc Testing' or random clicking without a clear charter or focus.",
      "Failing to take notes during exploration, resulting in a bug that is impossible to reproduce.",
      "Assuming automated tests replace the need for exploratory testing."
    ],
    realWorldApplications: [
      "Conducting a 90-minute time-boxed exploratory session focused entirely on attempting to bypass the payment gateway on an e-commerce site.",
      "A QA engineer acting like a 'confused elderly user'—clicking back buttons during form submissions, double-clicking buttons, and entering invalid data formats to break the app.",
      "Organizing a company-wide 'Bug Bash' where employees from all departments spend an hour trying to break a new feature before launch."
    ],
    resources: [
      { type: "official", title: "James Bach: What is Exploratory Testing?", url: "https://www.satisfice.com/exploratory-testing" },
      { type: "video_en", title: "Exploratory Testing Tutorial", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "Exploratory Testing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Session-Based Test Management", url: "https://www.satisfice.com/download/session-based-test-management" },
      { type: "github", title: "Exploratory Testing Heuristics", url: "https://github.com/TheJambo/awesome-testing" },
      { type: "cheat_sheet", title: "Software Testing Heuristics Cheat Sheet", url: "https://github.com/TheJambo/awesome-testing" },
      { type: "deep_dive", title: "Explore It! (Book by Elisabeth Hendrickson)", url: "https://www.ministryoftesting.com/" }
    ]
  },
  "bug_reporting": {
    whyLearnThis: "A bug report is your primary deliverable. If a developer cannot understand or reproduce the bug from your report, it will be closed as 'Cannot Reproduce' (WONTFIX), and the bug will reach production.",
    whenIsItUsed: "Every time a defect is found.",
    whereIsItUsed: "Jira, Linear, GitHub Issues, Bugzilla.",
    whatComesNext: "Agile, Scrum & QA",
    learningOutcomes: [
      "Write a clear, concise bug title.",
      "Provide exact, deterministic Steps to Reproduce.",
      "Include environment details (OS, Browser, App Version, Device).",
      "Differentiate between Bug Severity (impact on system) and Bug Priority (order of fixing).",
      "Attach actionable evidence (screenshots, screen recordings, network logs, console errors)."
    ],
    commonMistakes: [
      "Writing vague titles like 'Login is broken' instead of 'Login button is disabled when entering a 12-character password on iOS Safari'.",
      "Failing to include the Actual Result vs Expected Result.",
      "Logging multiple unrelated issues in a single bug report."
    ],
    realWorldApplications: [
      "Using Chrome DevTools to export the Network request (HAR file) and attaching it to a Jira ticket so the backend team can see exactly why an API call failed.",
      "Recording a 15-second Loom video showing a complex UI glitch that is difficult to explain in text.",
      "Classifying a typo on the 'About Us' page as Severity=Low but Priority=High because the CEO is presenting it tomorrow."
    ],
    resources: [
      { type: "official", title: "Atlassian: How to write a good bug report", url: "https://www.atlassian.com/agile/software-development/bug-tracking" },
      { type: "video_en", title: "How to write a perfect bug report", url: "https://www.youtube.com/watch?v=1FhY5XFp5Zg" },
      { type: "video_hi", title: "Bug Reporting in Jira Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Severity vs Priority in Testing", url: "https://www.guru99.com/defect-severity-in-software-testing.html" },
      { type: "github", title: "Bug Report Templates", url: "https://github.com/stevemao/github-issue-templates" },
      { type: "cheat_sheet", title: "Bug Report Checklist", url: "https://www.softwaretestinghelp.com/how-to-write-good-bug-report/" },
      { type: "deep_dive", title: "The Art of Bug Reporting", url: "https://www.joelonsoftware.com/2000/11/08/painless-bug-tracking/" }
    ]
  },
  "agile_scrum_qa": {
    whyLearnThis: "Modern QA engineers don't sit in a separate silo waiting for developers to finish. In Agile, QA is integrated into a fast-paced sprint cycle. Understanding Scrum ceremonies ensures you can advocate for quality early.",
    whenIsItUsed: "Daily workflow, Sprint Planning, Standups.",
    whereIsItUsed: "Agile Teams, Jira boards.",
    whatComesNext: "Programming for QA",
    learningOutcomes: [
      "Understand Agile principles and the Scrum framework (Sprints, Epics, Stories).",
      "Explain the QA role in Backlog Grooming and Sprint Planning.",
      "Define Acceptance Criteria and 'Definition of Done' (DoD).",
      "Understand Velocity and Story Point estimation.",
      "Participate effectively in Daily Standups and Sprint Retrospectives."
    ],
    commonMistakes: [
      "Accepting a user story into a sprint that lacks clear Acceptance Criteria, making it impossible to know when it is 'Done'.",
      "Waiting until the last day of a 2-week sprint to start testing, causing a massive bottleneck.",
      "Not speaking up in Sprint Planning when developers severely underestimate the testing effort required for a feature."
    ],
    realWorldApplications: [
      "Adding 'Automated tests must be written and passing in CI' to the team's Definition of Done for all user stories.",
      "Collaborating with a Product Owner during Backlog Grooming to define exact Acceptance Criteria using BDD (Given/When/Then) syntax.",
      "Pairing with a developer mid-sprint to test a feature locally on their machine before it even reaches the staging environment."
    ],
    resources: [
      { type: "official", title: "Scrum Guide", url: "https://scrumguides.org/" },
      { type: "video_en", title: "Agile Scrum Methodology (Simplilearn)", url: "https://www.youtube.com/watch?v=9TycLR0TqFA" },
      { type: "video_hi", title: "Agile and Scrum Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Role of QA in Agile", url: "https://www.agilealliance.org/glossary/agile-testing/" },
      { type: "github", title: "Agile Manifesto", url: "https://agilemanifesto.org/" },
      { type: "cheat_sheet", title: "Scrum Cheat Sheet", url: "https://www.scrum.org/resources/scrum-framework-poster" },
      { type: "deep_dive", title: "Agile Testing (Book by Lisa Crispin)", url: "https://agiletester.ca/" }
    ]
  },
  "programming_for_qa": {
    whyLearnThis: "Manual QA is a starting point; Automation QA is the career. To write automated tests, you must know how to code. Object-oriented programming (OOP) principles are essential for building maintainable test frameworks.",
    whenIsItUsed: "Writing automation scripts, API testing, and parsing test data.",
    whereIsItUsed: "Java, Python, JavaScript/TypeScript, Page Object Model.",
    whatComesNext: "Selenium WebDriver",
    learningOutcomes: [
      "Understand variables, loops, conditionals, and functions.",
      "Understand Object-Oriented Programming (Classes, Objects, Inheritance).",
      "Explain the Page Object Model (POM) design pattern.",
      "Understand basic Git operations (clone, commit, push, pull requests).",
      "Parse and generate JSON/XML data for API payloads."
    ],
    commonMistakes: [
      "Writing a massive procedural script of 5,000 lines of UI interactions instead of using OOP and the Page Object Model.",
      "Hardcoding test data (like usernames and passwords) directly into the test code instead of using environment variables or configuration files.",
      "Not using Git version control for automation scripts."
    ],
    realWorldApplications: [
      "Creating a `LoginPage` class with methods like `enterUsername()`, `enterPassword()`, and `clickSubmit()`, keeping the actual test script clean and readable.",
      "Writing a Python script to automatically generate 1,000 fake user profiles (using the Faker library) and insert them into a database for load testing.",
      "Using JavaScript to assert that the JSON response from a REST API contains a specific ID."
    ],
    resources: [
      { type: "official", title: "Mozilla: JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" },
      { type: "video_en", title: "Java Programming for QA Automation", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
      { type: "video_hi", title: "Python/Java for Automation Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Page Object Model Explained", url: "https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/" },
      { type: "github", title: "Clean Code JavaScript", url: "https://github.com/ryanmcdermott/clean-code-javascript" },
      { type: "cheat_sheet", title: "Git Cheat Sheet", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
      { type: "deep_dive", title: "Design Patterns for Test Automation", url: "https://testautomationu.applitools.com/" }
    ]
  },
  "selenium_webdriver": {
    whyLearnThis: "Selenium is the grandfather of web UI automation. While newer tools exist, Selenium (especially with Java or Python) remains the most widely used enterprise automation framework globally.",
    whenIsItUsed: "Automating cross-browser end-to-end (E2E) web testing.",
    whereIsItUsed: "Java, Python, C#, TestNG, JUnit.",
    whatComesNext: "Cypress & Playwright",
    learningOutcomes: [
      "Understand the WebDriver architecture.",
      "Locate web elements using ID, Name, CSS Selectors, and XPath.",
      "Handle dynamic elements, dropdowns, alerts, and multiple windows.",
      "Implement Implicit, Explicit, and Fluent Waits (abandoning `Thread.sleep()`).",
      "Build a Page Object Model (POM) framework using TestNG or PyTest."
    ],
    commonMistakes: [
      "Using `Thread.sleep(5000)` instead of Explicit Waits (`WebDriverWait`), making tests incredibly slow and flaky.",
      "Using brittle, absolute XPaths (`/html/body/div/div[2]/span`) that break every time the UI changes slightly, instead of robust CSS selectors.",
      "Failing to run `driver.quit()` in a `finally` block, leaving 'zombie' browser processes consuming memory."
    ],
    realWorldApplications: [
      "Writing an automated script that opens Chrome, logs into an e-commerce site, adds an item to the cart, and asserts the checkout total is correct.",
      "Executing a Selenium Grid test suite that runs identical tests in parallel across Chrome, Firefox, and Edge.",
      "Using an Explicit Wait to pause the test until a 'Loading...' spinner disappears before clicking a button."
    ],
    resources: [
      { type: "official", title: "Selenium WebDriver Documentation", url: "https://www.selenium.dev/documentation/webdriver/" },
      { type: "video_en", title: "Selenium Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=O15K6A8P-sM" },
      { type: "video_hi", title: "Selenium Java Hindi (Naveen AutomationLabs)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "CSS Selectors vs XPath", url: "https://www.browserstack.com/guide/css-selectors-in-selenium" },
      { type: "github", title: "Selenium Source Code", url: "https://github.com/SeleniumHQ/selenium" },
      { type: "cheat_sheet", title: "XPath Cheat Sheet", url: "https://devhints.io/xpath" },
      { type: "deep_dive", title: "Test Automation University: Selenium Java", url: "https://testautomationu.applitools.com/selenium-webdriver-tutorial-java/" }
    ]
  },
  "cypress_playwright": {
    whyLearnThis: "Selenium is powerful but architecturely old (relies on network protocols). Cypress and Playwright are modern, lightning-fast testing frameworks designed for modern JavaScript-heavy applications (React/Vue/Angular), offering features like network interception and auto-waiting.",
    whenIsItUsed: "Modern web automation, frontend E2E testing, component testing.",
    whereIsItUsed: "TypeScript/JavaScript, Node.js, Frontend CI/CD pipelines.",
    whatComesNext: "Postman Basics",
    learningOutcomes: [
      "Compare the architectural differences: Selenium (WebDriver API) vs Cypress (Runs inside browser) vs Playwright (CDP Protocol).",
      "Write Playwright tests supporting multiple contexts (tabs) natively.",
      "Understand auto-waiting mechanisms (no more Explicit Waits).",
      "Intercept and mock network requests (e.g., mocking an API returning a 500 error to test the UI).",
      "Generate tests via Record and Playback tools."
    ],
    commonMistakes: [
      "Trying to use Cypress for scenarios involving multiple browser tabs or distinct domains (Cypress struggles here; Playwright excels).",
      "Not utilizing network mocking—running an E2E test that hits a real third-party payment API instead of mocking the success response.",
      "Writing tests that depend on the state left over from the previous test (tests should be isolated)."
    ],
    realWorldApplications: [
      "Using Playwright to test an application's chat feature by opening two separate incognito browser contexts in the same test script.",
      "Using Cypress `cy.intercept()` to fake a slow network response (throttling) and verifying that the UI displays a skeleton loader.",
      "Running a Playwright test suite headlessly in a GitHub Actions pipeline across Chromium, WebKit (Safari), and Firefox simultaneously."
    ],
    resources: [
      { type: "official", title: "Playwright Documentation", url: "https://playwright.dev/docs/intro" },
      { type: "video_en", title: "Playwright Crash Course", url: "https://www.youtube.com/watch?v=e_t23L_8Oqo" },
      { type: "video_hi", title: "Playwright Tutorial Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Cypress vs Playwright", url: "https://www.browserstack.com/guide/playwright-vs-cypress" },
      { type: "github", title: "Playwright Repository", url: "https://github.com/microsoft/playwright" },
      { type: "cheat_sheet", title: "Playwright Test Runner Cheat Sheet", url: "https://playwright.dev/docs/test-cli" },
      { type: "deep_dive", title: "Playwright Network Interception", url: "https://playwright.dev/docs/network" }
    ]
  },
  "postman_basics": {
    whyLearnThis: "The UI is just a skin. 90% of business logic lives in the backend API. If you wait for the UI to be built before testing, you are testing too late. Postman allows you to test APIs directly, ensuring data integrity and security.",
    whenIsItUsed: "Manual and semi-automated API testing, exploring endpoints, and validating backend logic.",
    whereIsItUsed: "REST APIs, Postman Collections, Newman CLI.",
    whatComesNext: "REST Assured",
    learningOutcomes: [
      "Understand HTTP Methods (GET, POST, PUT, PATCH, DELETE) and Status Codes (200, 201, 400, 401, 404, 500).",
      "Construct API requests with Headers (Authorization, Content-Type) and JSON payloads.",
      "Use Postman Environments and Variables to switch between Staging and Production APIs.",
      "Write JavaScript assertions in Postman's 'Tests' tab (e.g., `pm.response.to.have.status(200)`).",
      "Run collections via the command line using Newman."
    ],
    commonMistakes: [
      "Hardcoding tokens or base URLs in every request instead of using Environment Variables.",
      "Testing only successful (200 OK) API calls and forgetting to test invalid payloads to ensure the API returns a 400 Bad Request instead of crashing (500).",
      "Copy-pasting JSON responses to check them manually instead of writing automated assertions."
    ],
    realWorldApplications: [
      "Writing a Postman test script that logs in via a POST request, extracts the JWT token from the response, and sets it as an environment variable for subsequent requests.",
      "Exporting a Postman Collection and running it automatically in a Jenkins CI pipeline using the Newman CLI.",
      "Validating that a GET request to `/users/1` returns a JSON object where `data.id` equals 1."
    ],
    resources: [
      { type: "official", title: "Postman Learning Center", url: "https://learning.postman.com/docs/getting-started/introduction/" },
      { type: "video_en", title: "Postman API Testing (freeCodeCamp)", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4" },
      { type: "video_hi", title: "Postman API Testing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "HTTP Status Codes Directory", url: "https://httpstatuses.com/" },
      { type: "github", title: "Newman CLI (Postman runner)", url: "https://github.com/postmanlabs/newman" },
      { type: "cheat_sheet", title: "Postman Test Scripts Cheat Sheet", url: "https://learning.postman.com/docs/writing-scripts/script-references/test-examples/" },
      { type: "deep_dive", title: "REST API Design Best Practices", url: "https://restfulapi.net/" }
    ]
  },
  "rest_assured": {
    whyLearnThis: "While Postman is great for manual exploration, enterprise QA teams need API tests integrated directly into their Java automation frameworks. REST Assured is a powerful Java library for testing and validating REST services.",
    whenIsItUsed: "Building robust, code-based API automation frameworks that run in CI/CD pipelines alongside Selenium E2E tests.",
    whereIsItUsed: "Java, TestNG, Maven, CI/CD.",
    whatComesNext: "GraphQL Testing",
    learningOutcomes: [
      "Understand the Given/When/Then (BDD) syntax of REST Assured.",
      "Extract values from JSON responses using JsonPath.",
      "Validate JSON schema compliance.",
      "Pass parameters, headers, and authentication (OAuth/JWT) in requests.",
      "Integrate REST Assured tests with TestNG and Allure reporting."
    ],
    commonMistakes: [
      "Writing complex JSON payloads as massive string concatenations in Java instead of mapping them to POJOs (Plain Old Java Objects) using Jackson/Gson.",
      "Failing to assert response times (e.g., ensuring an API returns within 2 seconds).",
      "Not modularizing base URLs and authentication logic, resulting in repetitive code."
    ],
    realWorldApplications: [
      "Using REST Assured in a TestNG `@BeforeSuite` hook to rapidly setup test data via API (e.g., creating 5 test users) before running slow Selenium UI tests.",
      "Asserting that an endpoint returns a strict JSON schema structure using the `JsonSchemaValidator` module.",
      "Writing a test that simulates a brute-force login attack and verifies the API correctly locks the account and returns a 429 status code."
    ],
    resources: [
      { type: "official", title: "REST Assured Documentation", url: "https://rest-assured.io/" },
      { type: "video_en", title: "REST Assured API Testing", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "REST Assured Hindi (Naveen AutomationLabs)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Parsing JSON with REST Assured JsonPath", url: "https://rest-assured.io/" },
      { type: "github", title: "REST Assured Examples Repo", url: "https://github.com/rest-assured/rest-assured/wiki/Usage" },
      { type: "cheat_sheet", title: "REST Assured Cheat Sheet", url: "https://github.com/rest-assured/rest-assured/wiki/Usage" },
      { type: "deep_dive", title: "API Testing with Java (Test Automation U)", url: "https://testautomationu.applitools.com/automating-your-api-tests-with-rest-assured/" }
    ]
  },
  "graphql_testing": {
    whyLearnThis: "GraphQL is fundamentally different from REST. Instead of hitting multiple endpoints (`/users`, `/posts`), everything goes to a single endpoint (`/graphql`), and the client defines exactly what data it wants. Testing it requires a different mindset.",
    whenIsItUsed: "Testing modern React/Apollo applications and GraphQL gateways.",
    whereIsItUsed: "Postman, Apollo Studio, Cypress (Network Interception).",
    whatComesNext: "CI/CD Integration",
    learningOutcomes: [
      "Understand the difference between REST and GraphQL.",
      "Explain Queries (Fetching data) and Mutations (Modifying data).",
      "Construct GraphQL queries with fragments and variables.",
      "Test GraphQL APIs using Postman (handling the single endpoint paradigm).",
      "Understand how to test GraphQL Error Arrays (GraphQL always returns 200 OK, even on failure; errors are in the JSON body)."
    ],
    commonMistakes: [
      "Writing tests that check for HTTP 400 or 500 status codes (GraphQL almost always returns HTTP 200, and puts error details inside a JSON `errors` array).",
      "Hardcoding query variables directly into the query string instead of using the GraphQL variables payload.",
      "Not testing deeply nested queries, which can cause 'Query Complexity' performance issues (DDoS vulnerability)."
    ],
    realWorldApplications: [
      "Writing a Postman test that sends a GraphQL Mutation to create a user, and asserts the response contains the new user's ID.",
      "Testing the API's security by attempting to request fields the user shouldn't have access to (Authorization testing).",
      "Mocking a GraphQL response in a Cypress E2E test to simulate a scenario where a specific nested relationship is empty."
    ],
    resources: [
      { type: "official", title: "GraphQL Official Documentation", url: "https://graphql.org/learn/" },
      { type: "video_en", title: "GraphQL Explained in 100 Seconds", url: "https://www.youtube.com/watch?v=eIQh02xuVw4" },
      { type: "video_hi", title: "GraphQL Testing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "How to test GraphQL APIs", url: "https://k6.io/blog/load-testing-graphql/" },
      { type: "github", title: "Public GraphQL APIs for Testing", url: "https://github.com/APIs-guru/graphql-apis" },
      { type: "cheat_sheet", title: "GraphQL Query Cheat Sheet", url: "https://devhints.io/graphql" },
      { type: "deep_dive", title: "Apollo: Securing Your GraphQL API", url: "https://graphql.org/learn/authorization/" }
    ]
  },
  "ci_cd_integration": {
    whyLearnThis: "An automated test that only runs on your laptop is useless. Continuous Integration (CI) ensures that tests run automatically every time a developer commits code. Continuous Deployment (CD) ensures tested code reaches production safely.",
    whenIsItUsed: "Executing automation suites daily, blocking bad pull requests, and generating test reports.",
    whereIsItUsed: "Jenkins, GitHub Actions, GitLab CI, Docker.",
    whatComesNext: "Performance Testing",
    learningOutcomes: [
      "Understand the concepts of Continuous Integration, Continuous Delivery, and Continuous Deployment.",
      "Configure a GitHub Action or Jenkins pipeline to trigger tests on Git Push.",
      "Run tests headlessly inside a Docker container.",
      "Generate and publish HTML test reports (Allure, Surefire) in the CI pipeline.",
      "Implement parallel test execution to reduce CI build times."
    ],
    commonMistakes: [
      "Accepting 'Flaky Tests' (tests that randomly pass or fail). A flaky test in CI trains developers to ignore the CI results, destroying trust in QA.",
      "Running a 4-hour E2E test suite on every single commit (move slow E2E tests to a nightly run; keep CI for fast unit/API tests).",
      "Hardcoding CI environment variables instead of using GitHub Secrets."
    ],
    realWorldApplications: [
      "Creating a GitHub Actions `.yml` file that installs Node.js, runs `npm run cypress:run`, and blocks merging the Pull Request if any tests fail.",
      "Configuring a Jenkins job to run the heavy Selenium Regression suite every night at 2:00 AM and send a Slack message with the results.",
      "Using Docker to spin up a temporary PostgreSQL database, run the API tests against it, and destroy the container afterward."
    ],
    resources: [
      { type: "official", title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
      { type: "video_en", title: "CI/CD Pipeline Explained", url: "https://www.youtube.com/watch?v=scEDHsr3APg" },
      { type: "video_hi", title: "Jenkins CI/CD Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Flaky Tests at Google and How We Mitigate Them", url: "https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html" },
      { type: "github", title: "Awesome CI/CD", url: "https://github.com/ligurio/awesome-ci" },
      { type: "cheat_sheet", title: "Jenkinsfile Pipeline Cheat Sheet", url: "https://www.jenkins.io/doc/book/pipeline/syntax/" },
      { type: "deep_dive", title: "Continuous Delivery (Book by Jez Humble)", url: "https://continuousdelivery.com/" }
    ]
  },
  "performance_testing": {
    whyLearnThis: "Will your application crash if 10,000 users log in at the same time? Functional tests say 'Yes, login works'. Performance tests say 'Login works until 500 concurrent users, then the database CPU hits 100%'.",
    whenIsItUsed: "Preparing for high-traffic events (Black Friday), finding system bottlenecks, and verifying SLA compliance.",
    whereIsItUsed: "JMeter, k6, Gatling, Locust.",
    whatComesNext: "Mobile Testing",
    learningOutcomes: [
      "Differentiate between Load Testing, Stress Testing, Spike Testing, and Endurance (Soak) Testing.",
      "Understand key metrics: Throughput (RPS), Latency, Error Rate, and Percentiles (p95, p99).",
      "Write a basic load test script using k6 (JavaScript) or JMeter (XML/UI).",
      "Identify common bottlenecks (Database Connections, CPU, Memory Leaks, Network).",
      "Understand the danger of 'Coordinated Omission' in load testing."
    ],
    commonMistakes: [
      "Running a massive load test against the Production environment during business hours, effectively DDoS-ing your own company.",
      "Looking only at 'Average' response time instead of the 95th or 99th percentile (p99), ignoring the long tail of slow requests.",
      "Running the load test generator (JMeter) on a weak laptop over Wi-Fi, meaning the bottleneck is the laptop's network, not the server."
    ],
    realWorldApplications: [
      "Using k6 to simulate 5,000 concurrent users adding items to a cart to ensure the new microservice architecture can handle Black Friday traffic.",
      "Running a Soak Test (steady load for 48 hours) to discover a slow memory leak in a Node.js application.",
      "Analyzing a performance report to find that the API is fast, but the bottleneck is maxed-out database connections."
    ],
    resources: [
      { type: "official", title: "k6 Open Source Documentation", url: "https://k6.io/docs/" },
      { type: "video_en", title: "Performance Testing Tutorial (k6)", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "JMeter Load Testing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Understanding Latency Percentiles", url: "https://grafana.com/blog/2021/01/20/observability-with-grafana-cloud/" },
      { type: "github", title: "k6 Performance Test Examples", url: "https://github.com/grafana/k6" },
      { type: "cheat_sheet", title: "JMeter Cheat Sheet", url: "https://jmeter.apache.org/usermanual/get-started.html" },
      { type: "deep_dive", title: "How NOT to Measure Latency (Gil Tene)", url: "https://www.youtube.com/watch?v=lJ8ydIuPFeU" }
    ]
  },
  "mobile_testing": {
    whyLearnThis: "Mobile applications deal with constraints web apps don't: battery life, varying network speeds (3G/4G/5G), interruptions (phone calls), device fragmentation (10,000 different Android models), and App Store review processes.",
    whenIsItUsed: "Testing native iOS/Android apps or cross-platform apps (React Native/Flutter).",
    whereIsItUsed: "Appium, XCUITest, Espresso, BrowserStack, Real Devices.",
    whatComesNext: "QA Complete",
    learningOutcomes: [
      "Understand the difference between Native, Hybrid, and Mobile Web apps.",
      "Explain the challenges of Mobile Device Fragmentation (Android vs iOS).",
      "Automate mobile UI tests using Appium (the mobile equivalent of Selenium).",
      "Perform interrupt testing (incoming calls, battery dying, network drops).",
      "Utilize cloud device farms (BrowserStack/SauceLabs) for cross-device testing."
    ],
    commonMistakes: [
      "Testing only on Emulators/Simulators. Emulators are fast for UI layout, but cannot accurately replicate hardware issues, battery drain, or memory constraints of real devices.",
      "Ignoring gesture testing (swipes, long presses, pinch-to-zoom).",
      "Forgetting to test app behavior when transitioning from Wi-Fi to a weak 3G cellular network."
    ],
    realWorldApplications: [
      "Using Appium to automate a test that opens an Android app, scrolls down a list, taps a product, and adds it to a cart.",
      "Connecting to BrowserStack to manually test a UI layout on a physical Samsung Galaxy S21 and an iPhone 13 Pro.",
      "Testing an offline-first mobile app by turning on Airplane Mode, making changes, turning it off, and ensuring the data syncs back to the server."
    ],
    resources: [
      { type: "official", title: "Appium Documentation", url: "https://appium.io/docs/en/latest/" },
      { type: "video_en", title: "Mobile Testing Basics", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "Appium Mobile Automation Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Real Device vs Emulator Testing", url: "https://www.guru99.com/mobile-testing.html" },
      { type: "github", title: "Appium Boilerplate", url: "https://github.com/webdriverio/appium-boilerplate" },
      { type: "cheat_sheet", title: "Mobile Testing Cheat Sheet", url: "https://github.com/TheJambo/awesome-testing" },
      { type: "deep_dive", title: "Hands-On Mobile App Testing (Book)", url: "https://www.informit.com/store/hands-on-mobile-app-testing-a-guide-for-mobile-testers-9780134191713" }
    ]
  }
};
