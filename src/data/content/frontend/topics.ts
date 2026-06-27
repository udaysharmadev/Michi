import { TopicData } from "@/data/types";

export const frontendTopics: Record<string, Partial<TopicData>> = {
  // --- 1. Internet Fundamentals ---
  "n_int_1": {
    slug: "how-does-the-internet-work",
    whyLearnThis: "The internet is the backbone of all web development. Understanding its underlying mechanics is crucial for debugging network issues and optimizing web applications.",
    whenIsItUsed: "Used implicitly in every web application. Knowledge is practically applied when configuring servers, debugging network requests, or designing distributed systems.",
    whereIsItUsed: "Everywhere a browser communicates with a server.",
    whatComesNext: "DNS and Domain Names",
    learningOutcomes: [
      "Understand the difference between a client and a server.",
      "Explain the role of an IP address and how packets are routed.",
      "Identify the basic layers of the OSI model conceptually.",
      "Understand the physical infrastructure of the internet (ISPs, fiber optics)."
    ],
    commonMistakes: [
      "Confusing the Internet (the network) with the World Wide Web (the information system).",
      "Assuming internet communication is direct rather than routed through multiple hops."
    ],
    realWorldApplications: [
      "Diagnosing slow API responses.",
      "Understanding why a server might be unreachable."
    ],
    resources: [
      { type: "official", title: "MDN: How the Web works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" },
      { type: "video_en", title: "How the Internet Works in 5 Minutes", url: "https://www.youtube.com/watch?v=7_LPdttKXPc" },
      { type: "video_hi", title: "How Internet works? (CodeWithHarry)", url: "https://www.youtube.com/watch?v=AofBq0XEqyQ" },
      { type: "article", title: "Cloudflare: What is the Internet?", url: "https://www.youtube.com/@CodeWithHarry" },
      { type: "github", title: "how-the-internet-works", url: "https://github.com/sf-wdi-31/how-the-internet-works" },
      { type: "cheat_sheet", title: "How The Internet Works Infographic", url: "https://github.com/lionbytes/How-The-Internet-Works-Infographic" },
      { type: "deep_dive", title: "How the Internet Works, Part I", url: "https://medium.com/@vahid_d/how-the-internet-works-part-i-the-internet-infrastructure-b6574f285d8d" }
    ]
  },
  "n_int_2": {
    slug: "dns-and-domain-names",
    whyLearnThis: "DNS translates human-readable domain names (like google.com) into IP addresses. You need to know this to launch a website.",
    whenIsItUsed: "When purchasing a domain, configuring custom domains for a project, or debugging domain resolution errors.",
    whereIsItUsed: "Domain registrars, AWS Route 53, Cloudflare.",
    whatComesNext: "HTTP / HTTPS Protocols",
    learningOutcomes: [
      "Explain the purpose of the Domain Name System.",
      "Understand different DNS record types (A, AAAA, CNAME, TXT, MX).",
      "Describe the DNS resolution process (Recursive resolver, Root server, TLD, Authoritative)."
    ],
    commonMistakes: [
      "Confusing A records (IPs) with CNAME records (aliases).",
      "Forgetting that DNS propagation can take up to 48 hours."
    ],
    realWorldApplications: [
      "Connecting a Vercel or Netlify app to a custom domain.",
      "Setting up professional email using MX records."
    ],
    resources: [
      { type: "official", title: "Cloudflare: What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
      { type: "video_en", title: "DNS Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=mpQZVYPuDGU" },
      { type: "video_hi", title: "What is DNS? (Thapa Technical)", url: "https://www.youtube.com/watch?v=3-M1D2K4M2I" },
      { type: "article", title: "MDN: What is a domain name?", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name" },
      { type: "github", title: "Everything-About-DNS", url: "https://github.com/devanshbatham/Everything-About-DNS" },
      { type: "cheat_sheet", title: "DNS Records Cheat Sheet", url: "https://www.cloudflare.com/learning/dns/dns-records/" },
      { type: "deep_dive", title: "Secondary DNS Deep Dive", url: "https://blog.cloudflare.com/secondary-dns-deep-dive/" }
    ]
  },
  "n_int_3": {
    slug: "http-https",
    whyLearnThis: "HTTP is the protocol that governs all data exchange on the Web. You cannot build or debug APIs without understanding HTTP methods and status codes.",
    whenIsItUsed: "When fetching data, submitting forms, or building APIs.",
    whereIsItUsed: "Browser network tabs, Postman, server frameworks.",
    whatComesNext: "Web Servers & Hosting",
    learningOutcomes: [
      "Differentiate between HTTP methods (GET, POST, PUT, DELETE, PATCH).",
      "Understand HTTP status code categories (2xx, 3xx, 4xx, 5xx).",
      "Explain the purpose of HTTP headers.",
      "Understand why HTTPS (TLS/SSL) is critical for security."
    ],
    commonMistakes: [
      "Using GET requests for actions that mutate data.",
      "Ignoring CORS (Cross-Origin Resource Sharing) headers.",
      "Sending sensitive data over HTTP instead of HTTPS."
    ],
    realWorldApplications: [
      "Reading the Network tab in DevTools to debug a failing API call.",
      "Writing fetch requests in JavaScript."
    ],
    resources: [
      { type: "official", title: "MDN: An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
      { type: "video_en", title: "HTTP Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=iYM2zFP3Zn0" },
      { type: "video_hi", title: "HTTP crash course (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { type: "article", title: "What is HTTP? (Cloudflare)", url: "https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/" },
      { type: "github", title: "http-status-codes repo", url: "https://github.com/waldemarnt/http-status-codes" },
      { type: "cheat_sheet", title: "HTTP Status Codes Cheat Sheet", url: "https://www.npmjs.com/package/http-status-codes/v/2.1.4" },
      { type: "deep_dive", title: "HTTP/3: Past, Present, Future", url: "https://blog.cloudflare.com/http3-the-past-present-and-future/" }
    ]
  },
  "n_int_4": {
    slug: "web-servers-hosting",
    whyLearnThis: "Your code has to live somewhere to be accessible. Web servers listen for requests and serve your files to users.",
    whenIsItUsed: "When deploying a project to production.",
    whereIsItUsed: "Vercel, Netlify, AWS EC2, Nginx, Apache.",
    whatComesNext: "HTML Fundamentals",
    learningOutcomes: [
      "Understand the difference between a physical server and a web server software (like Nginx).",
      "Explain static vs dynamic hosting.",
      "Understand basic deployment concepts."
    ],
    commonMistakes: [
      "Thinking you need to buy a physical server to host a website.",
      "Confusing a database with a web server."
    ],
    realWorldApplications: [
      "Deploying a React app to Vercel.",
      "Configuring a reverse proxy."
    ],
    resources: [
      { type: "official", title: "MDN: What is a web server?", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server" },
      { type: "video_en", title: "What is a Web Server? (Fireship)", url: "https://www.youtube.com/watch?v=JBBKWlIB1sA" },
      { type: "video_hi", title: "Web Server Explained in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { type: "article", title: "How Web Servers Work", url: "https://www.howtogeek.com/438814/what-is-a-web-server/" },
      { type: "github", title: "Awesome Web Servers", url: "https://github.com/n1trux/awesome-sysadmin#web-servers" },
      { type: "cheat_sheet", title: "Web Server Cheat Sheet", url: "https://cheatography.com/tag/web-server/" },
      { type: "deep_dive", title: "Inside NGINX: How We Designed for Performance & Scale", url: "https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/" }
    ]
  },

  // --- 2. HTML & CSS ---
  "n_hc_1": {
    slug: "html-fundamentals",
    whyLearnThis: "HTML is the standard markup language for documents designed to be displayed in a web browser. It is the skeleton of every website.",
    whenIsItUsed: "Whenever you create the structure or content of a webpage.",
    whereIsItUsed: "In .html files, or within JSX/templates in frameworks.",
    whatComesNext: "Semantic HTML",
    learningOutcomes: [
      "Understand the basic boilerplate of an HTML document.",
      "Use common tags correctly (headings, paragraphs, lists, links, images).",
      "Understand forms and input types."
    ],
    commonMistakes: [
      "Using <br> for spacing instead of CSS margins.",
      "Forgetting the alt attribute on images.",
      "Not closing tags properly."
    ],
    realWorldApplications: [
      "Building the structure of a landing page.",
      "Creating accessible forms for user registration."
    ],
    resources: [
      { type: "official", title: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
      { type: "video_en", title: "HTML Full Course (Bro Code)", url: "https://www.youtube.com/watch?v=HD13eq_Pmp8" },
      { type: "video_hi", title: "HTML Tutorial for Beginners (CodeWithHarry)", url: "https://www.youtube.com/watch?v=BsDoLVMnmZs" },
      { type: "article", title: "HTML for Beginners", url: "https://www.htmldog.com/guides/html/beginner/" },
      { type: "github", title: "HTML5 Boilerplate", url: "https://github.com/h5bp/html5-boilerplate" },
      { type: "cheat_sheet", title: "HTML5 Cheat Sheet", url: "https://htmlcheatsheet.com/" },
      { type: "deep_dive", title: "How Browsers Work: Parsing HTML", url: "https://web.dev/articles/howbrowserswork#parsing_html" }
    ]
  },
  "n_hc_2": {
    slug: "semantic-html",
    whyLearnThis: "Semantic HTML introduces meaning to the web page rather than just presentation. It is critical for Accessibility (a11y) and SEO.",
    whenIsItUsed: "When structuring complex page layouts and components.",
    whereIsItUsed: "Across all HTML authoring.",
    whatComesNext: "CSS Fundamentals",
    learningOutcomes: [
      "Differentiate between non-semantic (div, span) and semantic elements (header, nav, main, article, section, footer).",
      "Understand why screen readers rely on semantic HTML.",
      "Use semantic HTML to improve search engine ranking."
    ],
    commonMistakes: [
      "Building everything with <div> tags ('div soup').",
      "Using heading tags (h1-h6) purely for sizing text instead of hierarchy.",
      "Using <button> for navigation links instead of <a>."
    ],
    realWorldApplications: [
      "Building a blog layout that is easily readable by blind users using screen readers.",
      "Optimizing a page for Google Search indexing."
    ],
    resources: [
      { type: "official", title: "MDN: HTML text fundamentals", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals" },
      { type: "video_en", title: "Semantic HTML Tutorial (Kevin Powell)", url: "https://www.youtube.com/watch?v=kGW8AlwaIFA" },
      { type: "video_hi", title: "Semantic HTML in Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=U3xXpQk4vF0" },
      { type: "article", title: "Why use semantic HTML?", url: "https://www.freecodecamp.org/news/semantic-html5-elements-explained/" },
      { type: "github", title: "HTML5 Semantics Repo", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics" },
      { type: "cheat_sheet", title: "HTML5 Semantic Elements Cheat Sheet", url: "https://www.digitalocean.com/community/tutorials/html-html5-semantic-elements" },
      { type: "deep_dive", title: "The Accessibility Tree and Semantic HTML", url: "https://web.dev/articles/the-accessibility-tree" }
    ]
  },
  "n_hc_3": {
    slug: "css-fundamentals",
    whyLearnThis: "CSS handles the visual presentation of HTML. It allows you to create beautiful, branded, and readable interfaces.",
    whenIsItUsed: "Whenever you want to style an element (colors, fonts, spacing).",
    whereIsItUsed: "In .css files, <style> tags, or inline styles.",
    whatComesNext: "Flexbox Layout",
    learningOutcomes: [
      "Understand the CSS Box Model (Content, Padding, Border, Margin).",
      "Master CSS selectors (class, id, element, pseudo-classes).",
      "Understand Specificity and the Cascade.",
      "Apply typography, colors, and backgrounds."
    ],
    commonMistakes: [
      "Not understanding the Box Model, leading to sizing issues.",
      "Overusing !important to override specificity.",
      "Using IDs for styling instead of reusable classes."
    ],
    realWorldApplications: [
      "Applying a brand's color palette to a website.",
      "Styling a button to look clickable on hover."
    ],
    resources: [
      { type: "official", title: "MDN CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" },
      { type: "video_en", title: "CSS Tutorial - Zero to Hero (freeCodeCamp)", url: "https://www.youtube.com/watch?v=OXGznpKZ_sA" },
      { type: "video_hi", title: "CSS Tutorial In Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
      { type: "article", title: "CSS Fundamentals for Beginners", url: "https://css-tricks.com/where-do-you-learn-html-css-in-2020/" },
      { type: "github", title: "Awesome CSS", url: "https://github.com/awesome-css-group/awesome-css" },
      { type: "cheat_sheet", title: "CSS Cheat Sheet", url: "https://htmlcheatsheet.com/css/" },
      { type: "deep_dive", title: "The Cascade and Specificity", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" }
    ]
  },
  "n_hc_4": {
    slug: "flexbox",
    whyLearnThis: "Flexbox is a 1-dimensional layout module that makes it easy to design flexible responsive layout structures.",
    whenIsItUsed: "When aligning items in a row or column, centering elements, or distributing space.",
    whereIsItUsed: "Within CSS rules using `display: flex`.",
    whatComesNext: "Responsive Design",
    learningOutcomes: [
      "Understand the main axis vs cross axis.",
      "Use justify-content and align-items to position elements.",
      "Use flex-wrap and flex-direction.",
      "Understand flex child properties (grow, shrink, basis)."
    ],
    commonMistakes: [
      "Applying flex properties to children instead of the parent container.",
      "Confusing justify-content with align-items."
    ],
    realWorldApplications: [
      "Creating a navigation bar with evenly spaced links.",
      "Perfectly centering a modal vertically and horizontally."
    ],
    resources: [
      { type: "official", title: "MDN: CSS Flexible Box Layout", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" },
      { type: "video_en", title: "Learn Flexbox in 15 Minutes (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=fYq5PXgSsbE" },
      { type: "video_hi", title: "Flexbox in Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=Ww9g-WqlkMQ" },
      { type: "article", title: "A Complete Guide to Flexbox (CSS-Tricks)", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
      { type: "github", title: "Flexbox Froggy Source", url: "https://github.com/thomaspark/flexboxfroggy" },
      { type: "cheat_sheet", title: "Flexbox Cheat Sheet", url: "https://yoksel.github.io/flex-cheatsheet/" },
      { type: "deep_dive", title: "How Flexbox works under the hood", url: "https://www.smashingmagazine.com/2018/10/flexbox-use-cases/" }
    ]
  },
  "n_hc_5": {
    slug: "responsive-design",
    whyLearnThis: "Users browse the web on phones, tablets, and massive monitors. Responsive design ensures your UI looks perfect on every screen size.",
    whenIsItUsed: "Always. Modern web development is mobile-first.",
    whereIsItUsed: "CSS Media Queries, relative units.",
    whatComesNext: "CSS Grid Layout",
    learningOutcomes: [
      "Understand the viewport meta tag.",
      "Write CSS Media Queries (@media).",
      "Use relative units (rem, em, vh, vw, %) instead of fixed px.",
      "Adopt a mobile-first design philosophy."
    ],
    commonMistakes: [
      "Designing for desktop first and struggling to squeeze it into mobile.",
      "Hardcoding widths in pixels.",
      "Forgetting the viewport meta tag."
    ],
    realWorldApplications: [
      "Stacking a multi-column grid into a single column on mobile phones.",
      "Hiding non-essential sidebar content on smaller screens."
    ],
    resources: [
      { type: "official", title: "MDN: Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
      { type: "video_en", title: "Responsive Web Design Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=srvUrASNj0s" },
      { type: "video_hi", title: "Responsive Web Design in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=B7wHpNUUT4Y" },
      { type: "article", title: "Responsive Web Design Basics", url: "https://web.dev/learn/design/" },
      { type: "github", title: "Responsive Web Design FreeCodeCamp", url: "https://github.com/freeCodeCamp/freeCodeCamp" },
      { type: "cheat_sheet", title: "Media Queries Cheat Sheet", url: "https://css-tricks.com/css-media-queries/" },
      { type: "deep_dive", title: "The State of Responsive Web Design", url: "https://www.smashingmagazine.com/2021/11/guide-responsive-web-design-container-queries/" }
    ]
  },
  "n_hc_6": {
    slug: "css-grid",
    whyLearnThis: "Grid is a 2-dimensional layout system for the web. It handles both columns and rows simultaneously, allowing for complex layouts previously impossible.",
    whenIsItUsed: "When designing page skeletons, complex galleries, or dashboard layouts.",
    whereIsItUsed: "Within CSS rules using `display: grid`.",
    whatComesNext: "JavaScript Syntax",
    learningOutcomes: [
      "Define grid templates (columns and rows).",
      "Understand the `fr` fractional unit.",
      "Position items across multiple grid tracks (span).",
      "Use `gap` for spacing."
    ],
    commonMistakes: [
      "Using Grid when Flexbox would be simpler.",
      "Overcomplicating the grid template instead of letting items auto-flow."
    ],
    realWorldApplications: [
      "Building a complex photo gallery like Pinterest.",
      "Structuring the overall layout of an application (Header, Sidebar, Main Content, Footer)."
    ],
    resources: [
      { type: "official", title: "MDN: CSS Grid Layout", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" },
      { type: "video_en", title: "Learn CSS Grid in 20 Minutes (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=9zBsdzdE4sM" },
      { type: "video_hi", title: "CSS Grid in Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=LPEj9I24Poo" },
      { type: "article", title: "A Complete Guide to Grid (CSS-Tricks)", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { type: "github", title: "CSS Grid Generator", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { type: "cheat_sheet", title: "CSS Grid Cheat Sheet", url: "https://grid.malven.co/" },
      { type: "deep_dive", title: "Subgrid and the Future of CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid" }
    ]
  },
  // --- 3. JavaScript Basics ---
  "n_js_1": {
    slug: "javascript-syntax",
    whyLearnThis: "JavaScript is the programming language of the web. Understanding its syntax is the first step to making your websites interactive.",
    whenIsItUsed: "Every time you write any script or logic for a web application.",
    whereIsItUsed: "In .js files, <script> tags, and Node.js environments.",
    whatComesNext: "Variables & Data Types",
    learningOutcomes: [
      "Understand basic statements and expressions.",
      "Learn how to write comments.",
      "Understand case sensitivity and basic formatting rules.",
      "Know how to include JavaScript in an HTML file."
    ],
    commonMistakes: [
      "Forgetting that JavaScript is case-sensitive (e.g., typing `function` as `Function`).",
      "Missing brackets or semicolons leading to syntax errors."
    ],
    realWorldApplications: [
      "Writing a simple script to log a message to the console.",
      "Setting up a basic JavaScript file for a new project."
    ],
    resources: [
      { type: "official", title: "MDN: JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" },
      { type: "video_en", title: "JavaScript Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c" },
      { type: "video_hi", title: "JavaScript Tutorial in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=hKB-YGF14SY" },
      { type: "article", title: "A Re-introduction to JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" },
      { type: "github", title: "Clean Code JavaScript", url: "https://github.com/ryanmcdermott/clean-code-javascript" },
      { type: "cheat_sheet", title: "JavaScript Cheat Sheet", url: "https://htmlcheatsheet.com/js/" },
      { type: "deep_dive", title: "How the V8 Engine Works", url: "https://v8.dev/blog" }
    ]
  },
  "n_js_2": {
    slug: "variables-and-data-types",
    whyLearnThis: "Variables are how you store data in memory. Understanding types is crucial to avoid unexpected behavior when manipulating that data.",
    whenIsItUsed: "Continuously in every JavaScript program to store state, user input, or calculation results.",
    whereIsItUsed: "Throughout all JavaScript codebases.",
    whatComesNext: "Functions & Scope",
    learningOutcomes: [
      "Differentiate between var, let, and const.",
      "Understand primitive types (string, number, boolean, null, undefined, symbol).",
      "Understand complex types (objects, arrays).",
      "Grasp type coercion and typeof."
    ],
    commonMistakes: [
      "Using `var` instead of `let` or `const`.",
      "Confusing `null` (intentional absence) with `undefined` (uninitialized).",
      "Mutating `const` arrays or objects and thinking `const` makes them immutable."
    ],
    realWorldApplications: [
      "Storing a user's name from an input field.",
      "Keeping track of a score in a browser game."
    ],
    resources: [
      { type: "official", title: "MDN: Grammar and types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types" },
      { type: "video_en", title: "JavaScript Variables (Programming with Mosh)", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
      { type: "video_hi", title: "Variables and Data Types (Thapa Technical)", url: "https://www.youtube.com/watch?v=RnwNq3878bY" },
      { type: "article", title: "Understanding Variables, Scope, and Hoisting", url: "https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript" },
      { type: "github", title: "JavaScript Algorithms and Data Structures", url: "https://github.com/trekhleb/javascript-algorithms" },
      { type: "cheat_sheet", title: "JS Variables Cheat Sheet", url: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-variables/cheatsheet" },
      { type: "deep_dive", title: "JavaScript Data Types and Data Structures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" }
    ]
  },
  "n_js_3": {
    slug: "functions-and-scope",
    whyLearnThis: "Functions are reusable blocks of code. Scope determines where variables are accessible, which is vital for preventing bugs.",
    whenIsItUsed: "When structuring code for reuse, organization, and modularity.",
    whereIsItUsed: "Everywhere. Functions are first-class citizens in JS.",
    whatComesNext: "DOM Manipulation",
    learningOutcomes: [
      "Write function declarations and arrow functions.",
      "Understand parameters and arguments.",
      "Grasp global, function, and block scope.",
      "Understand the concept of hoisting."
    ],
    commonMistakes: [
      "Forgetting to `return` a value from a function.",
      "Trying to access a block-scoped variable (`let` or `const`) outside its block.",
      "Losing the `this` context in regular functions compared to arrow functions."
    ],
    realWorldApplications: [
      "Writing a function to calculate the total price of items in a cart.",
      "Creating modular utility functions for formatting dates."
    ],
    resources: [
      { type: "official", title: "MDN: Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
      { type: "video_en", title: "JavaScript Functions (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=N8ap4k_1QEQ" },
      { type: "video_hi", title: "Functions in JS (Yahoo Baba)", url: "https://www.youtube.com/watch?v=0wF3BvR2Gvk" },
      { type: "article", title: "JavaScript Scope Context and this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
      { type: "github", title: "Functional Programming in JS", url: "https://github.com/stoeffel/awesome-fp-js" },
      { type: "cheat_sheet", title: "Functions Cheat Sheet", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions" },
      { type: "deep_dive", title: "You Don't Know JS: Scope & Closures", url: "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures" }
    ]
  },
  "n_js_4": {
    slug: "dom-manipulation",
    whyLearnThis: "The Document Object Model (DOM) is the bridge between HTML and JavaScript. DOM manipulation allows JS to change the page dynamically without reloading.",
    whenIsItUsed: "When building interactive UIs, creating dynamic elements, or updating text based on user actions.",
    whereIsItUsed: "In browser-side JavaScript.",
    whatComesNext: "Events & Listeners",
    learningOutcomes: [
      "Select elements using `querySelector` and `getElementById`.",
      "Modify element text, HTML, and attributes.",
      "Add, remove, and toggle CSS classes.",
      "Create and append new elements to the DOM."
    ],
    commonMistakes: [
      "Trying to manipulate the DOM before it has fully loaded.",
      "Causing performance issues by manipulating the DOM inside tight loops (layout thrashing).",
      "Using `innerHTML` with unsanitized user input (XSS vulnerability)."
    ],
    realWorldApplications: [
      "Opening a modal popup when a button is clicked.",
      "Rendering a list of items fetched from a server."
    ],
    resources: [
      { type: "official", title: "MDN: Manipulating documents", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" },
      { type: "video_en", title: "DOM Manipulation Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc" },
      { type: "video_hi", title: "DOM Manipulation (CodeWithHarry)", url: "https://www.youtube.com/watch?v=FIorjhXKuRw" },
      { type: "article", title: "Understanding the DOM (DigitalOcean)", url: "https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model" },
      { type: "github", title: "Vanilla JS DOM manipulation", url: "https://github.com/phuocng/html-dom" },
      { type: "cheat_sheet", title: "Vanilla JS DOM Cheat Sheet", url: "https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/" },
      { type: "deep_dive", title: "How Browser Rendering Works", url: "https://developers.google.com/web/fundamentals/performance/rendering" }
    ]
  },
  "n_js_5": {
    slug: "events-and-listeners",
    whyLearnThis: "Events are how JavaScript responds to user interactions (clicks, typing, scrolling). Without them, the web would be static.",
    whenIsItUsed: "Whenever you need to trigger code based on a user action or browser event.",
    whereIsItUsed: "Frontend interactive elements.",
    whatComesNext: "ES6+ Features",
    learningOutcomes: [
      "Use `addEventListener` to listen for events.",
      "Understand the Event Object and its properties.",
      "Grasp event bubbling, capturing, and delegation.",
      "Prevent default behaviors using `preventDefault()`."
    ],
    commonMistakes: [
      "Adding events inside a loop without using event delegation, leading to performance issues.",
      "Forgetting to use `preventDefault()` on form submissions, causing page reloads.",
      "Not cleaning up event listeners, leading to memory leaks."
    ],
    realWorldApplications: [
      "Validating a form input exactly when the user types in it.",
      "Implementing drag-and-drop functionality."
    ],
    resources: [
      { type: "official", title: "MDN: Introduction to events", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" },
      { type: "video_en", title: "JavaScript Events (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=XF1_MlZ5l6M" },
      { type: "video_hi", title: "Events and Event Listeners (Thapa Technical)", url: "https://www.youtube.com/watch?v=F0O5BfXkZAA" },
      { type: "article", title: "Event Bubbling and Capturing", url: "https://javascript.info/bubbling-and-capturing" },
      { type: "github", title: "DOM Events List", url: "https://github.com/lukeed/dset" },
      { type: "cheat_sheet", title: "JavaScript Events Cheat Sheet", url: "https://htmlcheatsheet.com/js/" },
      { type: "deep_dive", title: "The Event Loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" }
    ]
  },
  "n_js_6": {
    slug: "es6-features",
    whyLearnThis: "ES6 (ECMAScript 2015) introduced massive syntax improvements that are now standard in modern JavaScript. You must know them to read modern code.",
    whenIsItUsed: "Daily, in all modern JavaScript and framework development.",
    whereIsItUsed: "Everywhere, especially in React, Vue, and Next.js.",
    whatComesNext: "Asynchronous JavaScript",
    learningOutcomes: [
      "Use Destructuring assignment for arrays and objects.",
      "Use the Spread (`...`) and Rest operators.",
      "Write Template Literals using backticks.",
      "Understand modern array methods (`map`, `filter`, `reduce`)."
    ],
    commonMistakes: [
      "Mutating original arrays instead of using `map` or `filter` to create new ones.",
      "Confusing the Rest operator (gathering) with the Spread operator (expanding).",
      "Trying to destructure properties that don't exist without providing default values."
    ],
    realWorldApplications: [
      "Cloning a complex state object safely in React.",
      "Extracting specific data from a large JSON API response via destructuring."
    ],
    resources: [
      { type: "official", title: "ES6 Features (Babel)", url: "https://babeljs.io/docs/en/learn" },
      { type: "video_en", title: "ES6 in 100 Seconds (Fireship)", url: "https://www.youtube.com/watch?v=cRHQNNiCVBM" },
      { type: "video_hi", title: "ES6 Features (Code Step By Step)", url: "https://www.youtube.com/watch?v=0h5U39O8Z9E" },
      { type: "article", title: "A Guide to ES6 Features", url: "https://www.freecodecamp.org/news/es6-features/" },
      { type: "github", title: "ES6 Cheatsheet Repo", url: "https://github.com/DrkSephy/es6-cheatsheet" },
      { type: "cheat_sheet", title: "ES6 Cheatsheet", url: "https://devhints.io/es6" },
      { type: "deep_dive", title: "Exploring ES6 (Book)", url: "https://devhints.io/es6" }
    ]
  },
  "n_js_7": {
    slug: "asynchronous-javascript",
    whyLearnThis: "JavaScript is single-threaded. Async code allows it to perform long network requests without freezing the browser.",
    whenIsItUsed: "When fetching data from an API, reading files, or setting timers.",
    whereIsItUsed: "API calls, Promises, Async/Await.",
    whatComesNext: "Git Fundamentals",
    learningOutcomes: [
      "Understand the difference between synchronous and asynchronous code.",
      "Work with Callbacks and understand 'Callback Hell'.",
      "Use Promises (`.then`, `.catch`).",
      "Master `async` and `await` syntax for cleaner async code."
    ],
    commonMistakes: [
      "Forgetting to use `await` when calling an async function.",
      "Not handling errors with `try/catch` or `.catch()`, leading to unhandled promise rejections.",
      "Blocking the main thread with heavy synchronous calculations."
    ],
    realWorldApplications: [
      "Fetching user profile data from a backend server.",
      "Waiting for an animation to complete before running the next step."
    ],
    resources: [
      { type: "official", title: "MDN: Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
      { type: "video_en", title: "Async JS Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=PoRJizFvM7s" },
      { type: "video_hi", title: "Async JS (Thapa Technical)", url: "https://www.youtube.com/watch?v=B7wHpNUUT4Y" },
      { type: "article", title: "Understanding Async/Await", url: "https://javascript.info/async-await" },
      { type: "github", title: "Promise Fun", url: "https://github.com/sindresorhus/promise-fun" },
      { type: "cheat_sheet", title: "Async/Await Cheat Sheet", url: "https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404" },
      { type: "deep_dive", title: "What the heck is the event loop anyway?", url: "https://www.youtube.com/watch?v=8aGhPhVfaqM" }
    ]
  },
  // --- 4. Version Control ---
  "n_vc_1": {
    slug: "git-fundamentals",
    whyLearnThis: "Git is the industry standard for version control. It tracks changes to your code, allowing you to revert mistakes and collaborate with teams.",
    whenIsItUsed: "Every day, on every project, to save and manage code history.",
    whereIsItUsed: "Terminal, VS Code, Git GUI clients.",
    whatComesNext: "GitHub Essentials",
    learningOutcomes: [
      "Understand the concept of a repository.",
      "Use `git init`, `add`, `commit`, and `status`.",
      "View history with `git log`.",
      "Understand the staging area versus the working directory."
    ],
    commonMistakes: [
      "Committing sensitive data like API keys (no `.gitignore`).",
      "Writing poor, non-descriptive commit messages.",
      "Forgetting to `add` files before trying to commit."
    ],
    realWorldApplications: [
      "Saving a checkpoint of your app before attempting a major refactor.",
      "Reverting back to yesterday's code after breaking something today."
    ],
    resources: [
      { type: "official", title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
      { type: "video_en", title: "Git Tutorial for Beginners (Programming with Mosh)", url: "https://www.youtube.com/watch?v=8JJ101D3knE" },
      { type: "video_hi", title: "Git and GitHub Tutorial in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=gwWKnnCMQ5c" },
      { type: "article", title: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
      { type: "github", title: "Git Flight Rules", url: "https://github.com/k88hudson/git-flight-rules" },
      { type: "cheat_sheet", title: "Git Cheat Sheet (GitHub)", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
      { type: "deep_dive", title: "Git Internals - Under the Hood", url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain" }
    ]
  },
  "n_vc_2": {
    slug: "github-essentials",
    whyLearnThis: "GitHub is a cloud hosting platform for Git repositories. It acts as your developer portfolio and the central hub for team collaboration.",
    whenIsItUsed: "When pushing local code to the cloud, collaborating on open source, or working in a team.",
    whereIsItUsed: "github.com, GitLab, Bitbucket.",
    whatComesNext: "Branching & Merging",
    learningOutcomes: [
      "Connect a local repo to a remote using `git remote add`.",
      "Push code using `git push` and pull updates with `git pull`.",
      "Understand cloning and forking.",
      "Write a strong `README.md` file using Markdown."
    ],
    commonMistakes: [
      "Pushing code directly to `main` without testing.",
      "Not handling authentication properly (using passwords instead of Personal Access Tokens/SSH).",
      "Cloning a repo instead of forking when trying to contribute to open source."
    ],
    realWorldApplications: [
      "Backing up your project securely in the cloud.",
      "Sharing your code with a recruiter."
    ],
    resources: [
      { type: "official", title: "GitHub Skills", url: "https://skills.github.com/" },
      { type: "video_en", title: "GitHub Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
      { type: "video_hi", title: "Complete GitHub Tutorial (Thapa Technical)", url: "https://www.youtube.com/watch?v=1r-7C-FzO-Q" },
      { type: "article", title: "How to write a good README", url: "https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/" },
      { type: "github", title: "Awesome README", url: "https://github.com/matiassingers/awesome-readme" },
      { type: "cheat_sheet", title: "GitHub Flow Cheat Sheet", url: "https://guides.github.com/introduction/flow/" },
      { type: "deep_dive", title: "The Architecture of GitHub", url: "https://github.blog/2022-09-08-architecting-githubs-move-to-the-cloud/" }
    ]
  },
  "n_vc_3": {
    slug: "branching-merging",
    whyLearnThis: "Branching allows you to work on new features safely without breaking the main codebase. Merging brings those features back together.",
    whenIsItUsed: "Whenever building a new feature or fixing a bug in a real-world project.",
    whereIsItUsed: "Git CLI (`git branch`, `git checkout`, `git merge`).",
    whatComesNext: "Pull Requests",
    learningOutcomes: [
      "Create, switch, and delete branches.",
      "Merge one branch into another.",
      "Resolve merge conflicts.",
      "Understand the concept of a 'Fast-forward' merge."
    ],
    commonMistakes: [
      "Creating branches off of outdated branches instead of `main`.",
      "Panicking and aborting when encountering a merge conflict.",
      "Leaving old, merged branches lying around, cluttering the repo."
    ],
    realWorldApplications: [
      "Working on a 'Dark Mode' feature while the rest of the team works on something else.",
      "Fixing an urgent bug on a hotfix branch without deploying half-finished feature code."
    ],
    resources: [
      { type: "official", title: "Git Branching - Basic Branching and Merging", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" },
      { type: "video_en", title: "Git Branches Tutorial (Corey Schafer)", url: "https://www.youtube.com/watch?v=e5PDnaYpK3M" },
      { type: "video_hi", title: "Git Branching and Merging (Code Step By Step)", url: "https://www.youtube.com/watch?v=7uKj4r9wOq4" },
      { type: "article", title: "A successful Git branching model", url: "https://nvie.com/posts/a-successful-git-branching-model/" },
      { type: "github", title: "Gitflow Workflow", url: "https://github.com/nvie/gitflow" },
      { type: "cheat_sheet", title: "Git Branching Cheat Sheet", url: "https://kapeli.com/cheat_sheets/Git.docset/Contents/Resources/Documents/index" },
      { type: "deep_dive", title: "Advanced Git: Rebasing vs Merging", url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing" }
    ]
  },
  "n_vc_4": {
    slug: "pull-requests",
    whyLearnThis: "Pull Requests (PRs) are the core mechanism for code review. They ensure code quality before it merges into the main project.",
    whenIsItUsed: "Before merging any feature branch into the main branch in a team environment.",
    whereIsItUsed: "GitHub, GitLab, or Bitbucket web interfaces.",
    whatComesNext: "TypeScript Basics",
    learningOutcomes: [
      "Open a Pull Request.",
      "Write a clear PR description.",
      "Review someone else's code and leave comments.",
      "Approve and merge a PR."
    ],
    commonMistakes: [
      "Opening massive PRs that take hours to review instead of small, modular ones.",
      "Providing unhelpful review comments (e.g., 'Fix this' instead of 'Consider using map here for performance').",
      "Merging without waiting for CI checks to pass."
    ],
    realWorldApplications: [
      "Submitting a bug fix to a popular open-source project.",
      "Getting your code reviewed by a senior developer at work."
    ],
    resources: [
      { type: "official", title: "GitHub: About pull requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" },
      { type: "video_en", title: "How to Create a Pull Request (Fireship)", url: "https://www.youtube.com/watch?v=8lGpZkjnkt4" },
      { type: "video_hi", title: "Pull Request in GitHub (Thapa Technical)", url: "https://www.youtube.com/watch?v=F0O5BfXkZAA" },
      { type: "article", title: "The Anatomy of a Perfect Pull Request", url: "https://hugooodias.medium.com/the-anatomy-of-a-perfect-pull-request-567382bb6067" },
      { type: "github", title: "Awesome Code Review", url: "https://github.com/joho/awesome-code-review" },
      { type: "cheat_sheet", title: "GitHub PR Etiquette", url: "https://github.com/blog/1943-how-to-write-the-perfect-pull-request" },
      { type: "deep_dive", title: "Google's Engineering Practices documentation", url: "https://google.github.io/eng-practices/" }
    ]
  },
  // --- 5. Modern JavaScript (Deep Dive) ---
  "n_mjs_1": {
    slug: "typescript-basics",
    whyLearnThis: "TypeScript adds static typing to JavaScript. It catches errors at compile-time instead of run-time, making large codebases much easier to maintain.",
    whenIsItUsed: "In almost all modern enterprise React/Next.js/Angular projects.",
    whereIsItUsed: "In .ts and .tsx files.",
    whatComesNext: "Advanced JavaScript",
    learningOutcomes: [
      "Understand interfaces and type aliases.",
      "Use basic types (string, number, boolean, array, tuple).",
      "Grasp Type Inference and Union Types.",
      "Understand Generics at a high level."
    ],
    commonMistakes: [
      "Using `any` everywhere, defeating the purpose of TypeScript.",
      "Overcomplicating types instead of relying on type inference.",
      "Ignoring strict null checks."
    ],
    realWorldApplications: [
      "Defining the shape of a user object returned from an API.",
      "Ensuring a component receives the correct props."
    ],
    resources: [
      { type: "official", title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { type: "video_en", title: "TypeScript Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=BCg4U1FzODs" },
      { type: "video_hi", title: "TypeScript Tutorial in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=xk4_1vCGucA" },
      { type: "article", title: "Understanding TypeScript Generics", url: "https://www.freecodecamp.org/news/understanding-typescript-generics/" },
      { type: "github", title: "TypeScript Cheat Sheet Repo", url: "https://github.com/typescript-cheatsheets/react" },
      { type: "cheat_sheet", title: "TS Interfaces vs Types", url: "https://www.typescriptlang.org/cheatsheets" },
      { type: "deep_dive", title: "Advanced TypeScript Types", url: "https://mariusschulz.com/blog/series/typescript-evolution" }
    ]
  },
  "n_mjs_2": {
    slug: "advanced-javascript",
    whyLearnThis: "Understanding the deeper mechanics of JS helps you debug complex issues and write more performant, robust code.",
    whenIsItUsed: "When building complex architecture, libraries, or debugging weird behaviors.",
    whereIsItUsed: "Core application logic.",
    whatComesNext: "Closures & Scope",
    learningOutcomes: [
      "Understand the 'this' keyword implicitly and explicitly.",
      "Use call(), apply(), and bind().",
      "Grasp the concept of the Event Loop and Call Stack.",
      "Understand memory leaks and garbage collection."
    ],
    commonMistakes: [
      "Losing the 'this' context inside callbacks.",
      "Creating memory leaks by not clearing intervals or event listeners.",
      "Blocking the event loop with synchronous heavy computation."
    ],
    realWorldApplications: [
      "Binding a class method to an event listener in React.",
      "Optimizing a high-frequency animation loop."
    ],
    resources: [
      { type: "official", title: "MDN: this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" },
      { type: "video_en", title: "The Event Loop (Philip Roberts)", url: "https://www.youtube.com/watch?v=8aGhPhVfaqM" },
      { type: "video_hi", title: "Call, Apply, Bind in Hindi (Yahoo Baba)", url: "https://www.youtube.com/watch?v=aG35K1U540Q" },
      { type: "article", title: "Understanding Memory Management", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management" },
      { type: "github", title: "You Don't Know JS Repo", url: "https://github.com/getify/You-Dont-Know-JS" },
      { type: "cheat_sheet", title: "JS Advanced Concepts Cheat Sheet", url: "https://github.com/mbeaudru/modern-js-cheatsheet" },
      { type: "deep_dive", title: "V8 Engine Architecture", url: "https://v8.dev/blog/ignition-interpreter" }
    ]
  },
  "n_mjs_3": {
    slug: "closures-and-scope",
    whyLearnThis: "Closures are a fundamental concept where inner functions remember the variables of their outer environment even after the outer function has returned.",
    whenIsItUsed: "For data privacy, currying, and functional programming patterns.",
    whereIsItUsed: "Inside higher-order functions and event handlers.",
    whatComesNext: "Prototype & Inheritance",
    learningOutcomes: [
      "Define what a closure is.",
      "Understand Lexical Scoping.",
      "Use closures to emulate private methods.",
      "Understand the module pattern."
    ],
    commonMistakes: [
      "Creating functions inside loops incorrectly, leading to unexpected variable values (the 'var' loop problem).",
      "Accidentally creating memory leaks by keeping large objects in a closure."
    ],
    realWorldApplications: [
      "Creating a counter function that maintains its own private state.",
      "Implementing memoization to cache expensive function calls."
    ],
    resources: [
      { type: "official", title: "MDN: Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" },
      { type: "video_en", title: "Closures in JavaScript (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=3a0I8ICR1Vg" },
      { type: "video_hi", title: "Closures in Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=1S8SNDACRM4" },
      { type: "article", title: "Master the JavaScript Interview: What is a Closure?", url: "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36" },
      { type: "github", title: "JavaScript Closures Examples", url: "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36" },
      { type: "cheat_sheet", title: "Scope & Closures Cheat Sheet", url: "https://frontendmasters.com/courses/deep-javascript-v3/scope-closures/" },
      { type: "deep_dive", title: "ECMAScript Spec: Lexical Environments", url: "https://tc39.es/ecma262/#sec-lexical-environments" }
    ]
  },
  "n_mjs_4": {
    slug: "prototype-and-inheritance",
    whyLearnThis: "JavaScript uses prototypal inheritance, not classical inheritance. Understanding this is key to understanding how objects inherit properties.",
    whenIsItUsed: "When writing object-oriented JavaScript or understanding how built-in objects work.",
    whereIsItUsed: "Classes, Object.create, Prototype chains.",
    whatComesNext: "Modules & Bundlers",
    learningOutcomes: [
      "Understand the Prototype Chain.",
      "Use Object.create().",
      "Differentiate between __proto__ and prototype.",
      "Understand ES6 Classes as syntactic sugar over prototypes."
    ],
    commonMistakes: [
      "Modifying built-in prototypes (e.g., Array.prototype), causing global collisions.",
      "Assuming ES6 classes work exactly like classes in Java or C#."
    ],
    realWorldApplications: [
      "Creating memory-efficient object instances by sharing methods on the prototype.",
      "Polyfilling new JavaScript features in older browsers."
    ],
    resources: [
      { type: "official", title: "MDN: Inheritance and the prototype chain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" },
      { type: "video_en", title: "Prototypes in JavaScript (Fireship)", url: "https://www.youtube.com/watch?v=FSs_JYwnXOU" },
      { type: "video_hi", title: "Prototypes Explained in Hindi (Code Step By Step)", url: "https://www.youtube.com/watch?v=cM50TTV4x4c" },
      { type: "article", title: "Understanding Prototypes", url: "https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" },
      { type: "github", title: "Object Oriented JS Tutorial", url: "https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md" },
      { type: "cheat_sheet", title: "Prototype Cheat Sheet", url: "https://ui.dev/javascript-visualizer" },
      { type: "deep_dive", title: "You Don't Know JS: this & Object Prototypes", url: "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/this-object-prototypes" }
    ]
  },
  "n_mjs_5": {
    slug: "modules-and-bundlers",
    whyLearnThis: "Modern apps are split into multiple files. Modules allow you to import/export code. Bundlers package them into a single file for the browser.",
    whenIsItUsed: "In every modern project utilizing NPM and a build step.",
    whereIsItUsed: "ESM (import/export), CommonJS (require), Webpack/Vite.",
    whatComesNext: "Error Handling",
    learningOutcomes: [
      "Understand ES6 Modules (`import` and `export`).",
      "Differentiate between default and named exports.",
      "Understand the role of Node.js and CommonJS (`require`).",
      "Understand what a bundler (Vite/Webpack) actually does."
    ],
    commonMistakes: [
      "Mixing CommonJS and ES Modules incorrectly.",
      "Forgetting to use `{}` for named imports.",
      "Importing heavy libraries entirely instead of just the needed functions (tree-shaking)."
    ],
    realWorldApplications: [
      "Splitting a large application into feature-specific files.",
      "Importing a utility library like Lodash into a component."
    ],
    resources: [
      { type: "official", title: "MDN: JavaScript modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
      { type: "video_en", title: "JavaScript Modules Crash Course (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=cRHQNNiCVBM" },
      { type: "video_hi", title: "ES6 Modules in Hindi (Yahoo Baba)", url: "https://www.youtube.com/watch?v=8I1rL54R8xM" },
      { type: "article", title: "A 10 minute primer to JavaScript modules", url: "https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/" },
      { type: "github", title: "Awesome JavaScript Modules", url: "https://flaviocopes.com/javascript-modules/" },
      { type: "cheat_sheet", title: "ESM Cheat Sheet", url: "https://hacks.mozilla.org/2015/08/es6-in-depth-modules/" },
      { type: "deep_dive", title: "How Tree Shaking Works", url: "https://webpack.js.org/guides/tree-shaking/" }
    ]
  },
  "n_mjs_6": {
    slug: "error-handling",
    whyLearnThis: "Errors happen. Handling them gracefully ensures your app doesn't crash and provides a good user experience.",
    whenIsItUsed: "Whenever calling an API, parsing JSON, or performing risky operations.",
    whereIsItUsed: "try/catch blocks, Promise .catch().",
    whatComesNext: "Performance Optimization",
    learningOutcomes: [
      "Use `try...catch...finally` blocks.",
      "Throw custom `Error` objects.",
      "Handle errors in asynchronous code (Promises and async/await).",
      "Understand the Error object properties (name, message, stack)."
    ],
    commonMistakes: [
      "Catching errors but doing nothing with them ('swallowing' errors).",
      "Not catching errors in async code, leading to unhandled rejections.",
      "Throwing strings instead of actual `Error` objects."
    ],
    realWorldApplications: [
      "Showing a friendly error toast when a login request fails.",
      "Logging unexpected application crashes to an error monitoring service like Sentry."
    ],
    resources: [
      { type: "official", title: "MDN: Control flow and error handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
      { type: "video_en", title: "Error Handling in JavaScript (Programming with Mosh)", url: "https://www.youtube.com/watch?v=cFTFtuEQ-10" },
      { type: "video_hi", title: "Try Catch in JavaScript (CodeWithHarry)", url: "https://www.youtube.com/watch?v=rX_3j8-W1q4" },
      { type: "article", title: "A Guide to Error Handling in JS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" },
      { type: "github", title: "Node.js Error Handling Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices#2-error-handling-practices" },
      { type: "cheat_sheet", title: "Error Handling Cheat Sheet", url: "https://javascript.info/try-catch" },
      { type: "deep_dive", title: "Handling Errors in Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#error_handling" }
    ]
  },
  "n_mjs_7": {
    slug: "performance-optimization",
    whyLearnThis: "As apps grow, they become slow. Optimizing JavaScript ensures a smooth, 60fps experience for users on all devices.",
    whenIsItUsed: "When refining an application for production.",
    whereIsItUsed: "Chrome DevTools, Code refactoring.",
    whatComesNext: "React Library",
    learningOutcomes: [
      "Understand Debouncing and Throttling.",
      "Avoid unnecessary DOM manipulations.",
      "Grasp Code Splitting and Lazy Loading.",
      "Understand the Critical Rendering Path."
    ],
    commonMistakes: [
      "Making an API call on every single keystroke instead of debouncing.",
      "Loading a massive 2MB JavaScript bundle on the initial page load."
    ],
    realWorldApplications: [
      "Debouncing a search input field so it only searches after the user stops typing.",
      "Lazy loading a heavy chart library only when the user navigates to the dashboard."
    ],
    resources: [
      { type: "official", title: "Web.dev: Fast load times", url: "https://web.dev/fast/" },
      { type: "video_en", title: "Debounce and Throttle (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=cjIswDCKgu0" },
      { type: "video_hi", title: "Debouncing in JS (Akshay Saini)", url: "https://www.youtube.com/watch?v=Zo-6_qx8mAw" },
      { type: "article", title: "JavaScript Performance Optimization Tips", url: "https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/" },
      { type: "github", title: "Front-End Performance Checklist", url: "https://github.com/thedaviddias/Front-End-Performance-Checklist" },
      { type: "cheat_sheet", title: "Web Vitals Cheatsheet", url: "https://web.dev/vitals/" },
      { type: "deep_dive", title: "Rendering Performance", url: "https://developers.google.com/web/fundamentals/performance/rendering" }
    ]
  },
  // --- 6. Frontend Frameworks ---
  "n_fw_1": {
    slug: "react-library",
    whyLearnThis: "React is the most popular UI library. It popularized component-based architecture and declarative UI.",
    whenIsItUsed: "Building SPAs (Single Page Applications) and complex interactive interfaces.",
    whereIsItUsed: "React apps, Next.js, React Native.",
    whatComesNext: "Vue.js Framework",
    learningOutcomes: [
      "Understand JSX syntax.",
      "Grasp component lifecycle and hooks (useState, useEffect).",
      "Understand props and one-way data flow.",
      "Learn how to render lists and handle forms."
    ],
    commonMistakes: [
      "Mutating state directly (e.g., `state.count = 1`) instead of using `setState`.",
      "Forgetting the dependency array in `useEffect`, causing infinite loops.",
      "Not providing a unique `key` prop when rendering lists."
    ],
    realWorldApplications: [
      "Building a dynamic dashboard with real-time updates.",
      "Creating reusable UI components like custom Buttons and Modals."
    ],
    resources: [
      { type: "official", title: "React Docs: Quick Start", url: "https://react.dev/learn" },
      { type: "video_en", title: "React Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
      { type: "video_hi", title: "React JS in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=-mJFZp84TIY" },
      { type: "article", title: "A Complete Guide to useEffect", url: "https://overreacted.io/a-complete-guide-to-useeffect/" },
      { type: "github", title: "Awesome React", url: "https://github.com/enaqx/awesome-react" },
      { type: "cheat_sheet", title: "React Cheat Sheet", url: "https://reactcheatsheet.com/" },
      { type: "deep_dive", title: "React Fiber Architecture", url: "https://github.com/acdlite/react-fiber-architecture" }
    ]
  },
  "n_fw_2": {
    slug: "vue-js",
    whyLearnThis: "Vue is known for its gentle learning curve and elegant reactivity system. It's a fantastic alternative to React.",
    whenIsItUsed: "Building SPAs, complex UIs, or incrementally enhancing static sites.",
    whereIsItUsed: "Vue apps, Nuxt.js.",
    whatComesNext: "Angular Framework",
    learningOutcomes: [
      "Understand Single File Components (.vue).",
      "Use directives like `v-if`, `v-for`, and `v-model`.",
      "Grasp the Composition API vs Options API.",
      "Understand Vue reactivity."
    ],
    commonMistakes: [
      "Mutating props directly inside a child component.",
      "Confusing `v-show` (CSS hidden) with `v-if` (removed from DOM)."
    ],
    realWorldApplications: [
      "Building an admin dashboard.",
      "Adding an interactive shopping cart widget to a legacy PHP app."
    ],
    resources: [
      { type: "official", title: "Vue.js Official Guide", url: "https://vuejs.org/guide/introduction.html" },
      { type: "video_en", title: "Vue.js Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=FXpIoQ_rT_c" },
      { type: "video_hi", title: "Vue JS Crash Course Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=b4OAB3z5dEw" },
      { type: "article", title: "Vue Composition API Introduction", url: "https://vuejs.org/guide/extras/composition-api-faq.html" },
      { type: "github", title: "Awesome Vue", url: "https://github.com/vuejs/awesome-vue" },
      { type: "cheat_sheet", title: "Vue 3 Cheat Sheet", url: "https://dev.to/adnanbabakan/vue-3-cheat-sheet-3j46" },
      { type: "deep_dive", title: "Reactivity in Depth (Vue)", url: "https://vuejs.org/guide/extras/reactivity-in-depth.html" }
    ]
  },
  "n_fw_3": {
    slug: "angular-framework",
    whyLearnThis: "Angular is a highly opinionated, full-featured framework maintained by Google. It's heavily used in enterprise environments.",
    whenIsItUsed: "Building massive, enterprise-scale single-page applications.",
    whereIsItUsed: "Large corporate dashboards, SaaS platforms.",
    whatComesNext: "Svelte Framework",
    learningOutcomes: [
      "Understand TypeScript integration in Angular.",
      "Grasp Components, Services, and Dependency Injection.",
      "Use RxJS and Observables for async data.",
      "Understand Angular Routing and Modules."
    ],
    commonMistakes: [
      "Not unsubscribing from RxJS Observables, causing memory leaks.",
      "Overusing two-way data binding (`[(ngModel)]`) instead of reactive forms."
    ],
    realWorldApplications: [
      "Building a banking portal frontend.",
      "Developing a complex CRM system."
    ],
    resources: [
      { type: "official", title: "Angular Docs: Getting Started", url: "https://angular.io/start" },
      { type: "video_en", title: "Angular Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=3dHNOWTI7H8" },
      { type: "video_hi", title: "Angular Tutorial (Code Step By Step)", url: "https://www.youtube.com/watch?v=0LhBvp8qpro" },
      { type: "article", title: "Understanding Angular Dependency Injection", url: "https://angular.io/guide/dependency-injection" },
      { type: "github", title: "Awesome Angular", url: "https://github.com/PatrickJS/awesome-angular" },
      { type: "cheat_sheet", title: "Angular Cheat Sheet", url: "https://angular.io/guide/cheatsheet" },
      { type: "deep_dive", title: "Inside the Angular Compiler", url: "https://blog.angular.io/how-the-angular-compiler-works-42111f9d2549" }
    ]
  },
  "n_fw_4": {
    slug: "svelte-framework",
    whyLearnThis: "Svelte compiles away your code to tiny, framework-less vanilla JS. It offers incredible performance and a truly simple developer experience.",
    whenIsItUsed: "When bundle size and performance are critical, or for highly interactive visualizations.",
    whereIsItUsed: "Svelte apps, SvelteKit.",
    whatComesNext: "Next.js Framework",
    learningOutcomes: [
      "Understand the compiler-based approach.",
      "Write reactive declarations using `$:`.",
      "Use built-in stores for state management.",
      "Understand scoped styling in Svelte."
    ],
    commonMistakes: [
      "Trying to mutate arrays using `push()` and expecting reactivity (you need assignment in Svelte).",
      "Overcomplicating state when Svelte stores are sufficient."
    ],
    realWorldApplications: [
      "Building interactive data journalism charts.",
      "Creating a lightning-fast, lightweight marketing site."
    ],
    resources: [
      { type: "official", title: "Svelte Interactive Tutorial", url: "https://learn.svelte.dev/" },
      { type: "video_en", title: "Svelte in 100 Seconds (Fireship)", url: "https://www.youtube.com/watch?v=rv3Yq-B8c2Y" },
      { type: "video_hi", title: "Svelte Crash Course Hindi", url: "https://www.youtube.com/watch?v=bO5MteI80O8" },
      { type: "article", title: "Why Svelte is our choice", url: "https://changelog.com/posts/svelte-is-the-best" },
      { type: "github", title: "Awesome Svelte", url: "https://github.com/TheComputerM/awesome-svelte" },
      { type: "cheat_sheet", title: "Svelte Cheat Sheet", url: "https://sveltesociety.dev/cheatsheet" },
      { type: "deep_dive", title: "Rethinking Reactivity (Rich Harris)", url: "https://www.youtube.com/watch?v=AdNJ3fydeao" }
    ]
  },
  "n_fw_5": {
    slug: "nextjs-framework",
    whyLearnThis: "Next.js is a meta-framework for React. It provides SSR, SSG, routing, and API routes out of the box, fixing React's SEO and performance issues.",
    whenIsItUsed: "Building full-stack React applications, e-commerce, and blogs.",
    whereIsItUsed: "Vercel deployments, enterprise React apps.",
    whatComesNext: "React Query",
    learningOutcomes: [
      "Understand Server-Side Rendering (SSR) vs Static Site Generation (SSG).",
      "Use the App Router (Server Components vs Client Components).",
      "Implement dynamic routing.",
      "Use Next.js Image optimization."
    ],
    commonMistakes: [
      "Using `use client` on every component, defeating the purpose of Server Components.",
      "Fetching data on the client when it could be fetched securely on the server."
    ],
    realWorldApplications: [
      "Building an SEO-friendly e-commerce storefront.",
      "Creating a high-performance blog."
    ],
    resources: [
      { type: "official", title: "Next.js Learn", url: "https://nextjs.org/learn" },
      { type: "video_en", title: "Next.js App Router Course (Codevolution)", url: "https://www.youtube.com/watch?v=ZjAqacIC_3c" },
      { type: "video_hi", title: "Next.js Tutorial in Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=Hpo_4P9tqZc" },
      { type: "article", title: "Making Sense of React Server Components", url: "https://www.joshwcomeau.com/react/server-components/" },
      { type: "github", title: "Awesome Next.js", url: "https://github.com/unicodeveloper/awesome-nextjs" },
      { type: "cheat_sheet", title: "Next.js App Router Cheat Sheet", url: "https://nextjs.org/docs" },
      { type: "deep_dive", title: "How Next.js Routing Works", url: "https://nextjs.org/docs/app/building-your-application/routing" }
    ]
  },
  // --- 7. State Management ---
  "n_sm_1": {
    slug: "react-query",
    whyLearnThis: "Server state management is hard. React Query handles caching, deduping, background updates, and stale data effortlessly.",
    whenIsItUsed: "Whenever fetching data from an API in a React application.",
    whereIsItUsed: "Data fetching hooks.",
    whatComesNext: "Zustand",
    learningOutcomes: [
      "Understand the difference between client state and server state.",
      "Use `useQuery` for data fetching and caching.",
      "Use `useMutation` for creating/updating data.",
      "Invalidate queries to trigger refetches."
    ],
    commonMistakes: [
      "Putting API response data into Redux or useState instead of relying on the React Query cache.",
      "Not understanding `staleTime` vs `cacheTime`."
    ],
    realWorldApplications: [
      "Fetching a list of products with automatic background refetching on window focus.",
      "Implementing optimistic UI updates when a user likes a post."
    ],
    resources: [
      { type: "official", title: "TanStack Query Docs", url: "https://tanstack.com/query/latest" },
      { type: "video_en", title: "React Query Tutorial (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=lVLz_ASqAio" },
      { type: "video_hi", title: "React Query Crash Course Hindi", url: "https://www.youtube.com/watch?v=8K1N3ROLA_Q" },
      { type: "article", title: "Practical React Query", url: "https://tkdodo.eu/blog/practical-react-query" },
      { type: "github", title: "React Query Builder", url: "https://github.com/react-querybuilder/react-querybuilder" },
      { type: "cheat_sheet", title: "React Query Cheat Sheet", url: "https://devhints.io/react-query" },
      { type: "deep_dive", title: "Inside React Query", url: "https://tkdodo.eu/blog/inside-react-query" }
    ]
  },
  "n_sm_2": {
    slug: "zustand",
    whyLearnThis: "Zustand is a small, fast, and scalable bearbones state-management solution. It avoids the heavy boilerplate of Redux.",
    whenIsItUsed: "When you need global client state (like a UI theme or shopping cart) without boilerplate.",
    whereIsItUsed: "React applications.",
    whatComesNext: "Redux Toolkit",
    learningOutcomes: [
      "Create a Zustand store.",
      "Read and update state using hooks.",
      "Understand how Zustand avoids unnecessary re-renders.",
      "Use middleware (persist, devtools)."
    ],
    commonMistakes: [
      "Exporting the entire store object instead of using atomic selectors, causing over-rendering.",
      "Putting server data in Zustand instead of React Query."
    ],
    realWorldApplications: [
      "Managing a global 'Dark Mode' toggle.",
      "Managing a multi-step form's state across different pages."
    ],
    resources: [
      { type: "official", title: "Zustand GitHub Docs", url: "https://github.com/pmndrs/zustand" },
      { type: "video_en", title: "Zustand Crash Course (Codevolution)", url: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
      { type: "video_hi", title: "Zustand in Hindi", url: "https://www.youtube.com/watch?v=_4E2yVf4n-U" },
      { type: "article", title: "Why I switched from Redux to Zustand", url: "https://github.com/pmndrs/zustand" },
      { type: "github", title: "Zustand Repo", url: "https://github.com/pmndrs/zustand" },
      { type: "cheat_sheet", title: "Zustand Cheat Sheet", url: "https://zustand-demo.pmnd.rs/" },
      { type: "deep_dive", title: "How Zustand Works Under the Hood", url: "https://blog.axlight.com/posts/how-zustand-works-under-the-hood/" }
    ]
  },
  "n_sm_3": {
    slug: "redux-toolkit",
    whyLearnThis: "Redux is the most widespread state management library. Redux Toolkit (RTK) is the modern, official, opinionated way to write Redux.",
    whenIsItUsed: "In large legacy React codebases, or massive enterprise applications with complex global state.",
    whereIsItUsed: "React, Angular, Vanilla JS.",
    whatComesNext: "Context API",
    learningOutcomes: [
      "Understand the Flux architecture (Actions, Reducers, Store).",
      "Use `createSlice` to manage state and actions together.",
      "Use `useSelector` and `useDispatch` hooks.",
      "Understand Redux Thunk for async actions."
    ],
    commonMistakes: [
      "Mutating state directly in old Redux (though RTK uses Immer to safely allow this).",
      "Overusing Redux for local component state."
    ],
    realWorldApplications: [
      "Managing the complex state of a web-based video editor.",
      "Handling global authentication state in an enterprise app."
    ],
    resources: [
      { type: "official", title: "Redux Toolkit Quick Start", url: "https://redux-toolkit.js.org/tutorials/quick-start" },
      { type: "video_en", title: "Redux Toolkit Tutorial (Dave Gray)", url: "https://www.youtube.com/watch?v=NqzdVN2tyvQ" },
      { type: "video_hi", title: "Redux Toolkit in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
      { type: "article", title: "Modern Redux with Redux Toolkit", url: "https://www.smashingmagazine.com/2020/02/redux-toolkit-modern-redux/" },
      { type: "github", title: "Awesome Redux", url: "https://github.com/xgrommx/awesome-redux" },
      { type: "cheat_sheet", title: "Redux Cheat Sheet", url: "https://github.com/reduxjs/redux/blob/master/docs/api/README.md" },
      { type: "deep_dive", title: "Idiomatic Redux", url: "https://blog.isquaredsoftware.com/series/idiomatic-redux/" }
    ]
  },
  "n_sm_4": {
    slug: "context-api",
    whyLearnThis: "The Context API is built directly into React. It solves the 'prop drilling' problem without needing third-party libraries.",
    whenIsItUsed: "For low-frequency updates like theme, localization, or user authentication.",
    whereIsItUsed: "React applications.",
    whatComesNext: "Tailwind CSS",
    learningOutcomes: [
      "Create a Context.",
      "Provide context values using `<Context.Provider>`.",
      "Consume context using the `useContext` hook.",
      "Understand the performance implications of Context."
    ],
    commonMistakes: [
      "Using Context for high-frequency state changes (like text inputs), causing entire app re-renders.",
      "Passing a new object reference to the `value` prop every render."
    ],
    realWorldApplications: [
      "Passing a 'light/dark' theme preference to deeply nested components.",
      "Providing the current logged-in user data to the header and settings page."
    ],
    resources: [
      { type: "official", title: "React: Passing Data Deeply with Context", url: "https://react.dev/learn/passing-data-deeply-with-context" },
      { type: "video_en", title: "React Context API (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc" },
      { type: "video_hi", title: "Context API in React (Thapa Technical)", url: "https://www.youtube.com/watch?v=5Qf72wQnMB8" },
      { type: "article", title: "Before You Use Context", url: "https://react.dev/reference/react/useContext" },
      { type: "github", title: "React Context Example", url: "https://github.com/wesbos/React-Context" },
      { type: "cheat_sheet", title: "useContext Cheat Sheet", url: "https://react.dev/reference/react/useContext" },
      { type: "deep_dive", title: "How React Context Actually Works", url: "https://blog.isquaredsoftware.com/2021/01/context-redux-differences/" }
    ]
  },
  // --- 8. Styling Solutions ---
  "n_css_1": {
    slug: "tailwind-css",
    whyLearnThis: "Tailwind is a utility-first CSS framework. It allows you to build custom designs incredibly fast without leaving your HTML/JSX.",
    whenIsItUsed: "Modern web applications, specifically Next.js and React projects.",
    whereIsItUsed: "Directly in HTML/JSX `className` attributes.",
    whatComesNext: "CSS Modules",
    learningOutcomes: [
      "Understand the utility-first methodology.",
      "Use Tailwind classes for layout, typography, and spacing.",
      "Configure `tailwind.config.js` to customize themes.",
      "Use `@apply` to extract reusable component classes."
    ],
    commonMistakes: [
      "Dynamically concatenating class strings incorrectly (e.g., `text-${color}-500`), which breaks tree-shaking.",
      "Overusing `@apply` and just recreating standard CSS, defeating Tailwind's purpose."
    ],
    realWorldApplications: [
      "Rapidly prototyping a landing page.",
      "Building a fully responsive dashboard using purely utility classes."
    ],
    resources: [
      { type: "official", title: "Tailwind CSS Documentation", url: "https://tailwindcss.com/docs" },
      { type: "video_en", title: "Tailwind CSS Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=dFgzHOX84xQ" },
      { type: "video_hi", title: "Tailwind CSS Tutorial (CodeWithHarry)", url: "https://www.youtube.com/watch?v=_9mTJ84uL1Q" },
      { type: "article", title: "CSS Utility Classes and Separation of Concerns", url: "https://adamwathan.me/css-utility-classes-and-separation-of-concerns/" },
      { type: "github", title: "Awesome Tailwind CSS", url: "https://github.com/aniftyco/awesome-tailwindcss" },
      { type: "cheat_sheet", title: "Tailwind Cheat Sheet", url: "https://nerdcave.com/tailwind-cheat-sheet" },
      { type: "deep_dive", title: "How Tailwind CSS Compiler Works", url: "https://tailwindcss.com/blog/tailwindcss-v3" }
    ]
  },
  "n_css_2": {
    slug: "css-modules",
    whyLearnThis: "CSS Modules locally scope CSS by automatically generating unique class names. This prevents styling conflicts across a large app.",
    whenIsItUsed: "When writing traditional CSS but needing safety against global collisions.",
    whereIsItUsed: "React and Next.js projects (e.g., `styles.module.css`).",
    whatComesNext: "Styled Components",
    learningOutcomes: [
      "Understand how CSS Modules scope classes.",
      "Import a module file into a JavaScript component.",
      "Apply multiple module classes to an element.",
      "Use `composes` to share styles."
    ],
    commonMistakes: [
      "Using kebab-case for class names (e.g., `.my-class`) which makes it harder to access in JS (`styles['my-class']` vs `styles.myClass`).",
      "Writing global styles inside a CSS module."
    ],
    realWorldApplications: [
      "Styling a reusable Button component without worrying about other Button styles in the app.",
      "Migrating a legacy global CSS codebase to a safer, component-based approach."
    ],
    resources: [
      { type: "official", title: "CSS Modules Repository", url: "https://github.com/css-modules/css-modules" },
      { type: "video_en", title: "CSS Modules Tutorial (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=EXwE-PmtXrk" },
      { type: "video_hi", title: "CSS Modules in React (Codevolution)", url: "https://www.youtube.com/watch?v=R_Q-AavGgno" },
      { type: "article", title: "What are CSS Modules and why do we need them?", url: "https://css-tricks.com/css-modules-part-1-need/" },
      { type: "github", title: "CSS Modules Webpack Plugin", url: "https://github.com/webpack-contrib/css-loader#modules" },
      { type: "cheat_sheet", title: "CSS Modules Syntax", url: "https://nextjs.org/docs/app/building-your-application/styling/css-modules" },
      { type: "deep_dive", title: "The End of Global CSS", url: "https://medium.com/seek-blog/the-end-of-global-css-90d2a4a06284" }
    ]
  },
  "n_css_3": {
    slug: "styled-components",
    whyLearnThis: "Styled Components uses CSS-in-JS. It lets you write actual CSS inside your JavaScript, tying styles directly to React components.",
    whenIsItUsed: "In complex React applications where component styling depends heavily on dynamic JS state.",
    whereIsItUsed: "React applications.",
    whatComesNext: "Sass / SCSS",
    learningOutcomes: [
      "Use Tagged Template Literals to create styled components.",
      "Pass props to styled components for dynamic styling.",
      "Extend existing styles.",
      "Use the ThemeProvider for global themes."
    ],
    commonMistakes: [
      "Defining styled components inside the render method, causing them to remount on every render.",
      "Generating thousands of dynamic classes by passing rapidly changing props (like scroll position) to styled components."
    ],
    realWorldApplications: [
      "Creating a dynamic Button that changes color based on a `primary` or `secondary` boolean prop.",
      "Implementing a robust theming system (Dark/Light mode)."
    ],
    resources: [
      { type: "official", title: "Styled Components Documentation", url: "https://styled-components.com/docs" },
      { type: "video_en", title: "Styled Components Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=02zO0hZmwnw" },
      { type: "video_hi", title: "Styled Components in React (Thapa Technical)", url: "https://www.youtube.com/watch?v=k3d_3h_tKIE" },
      { type: "article", title: "CSS-in-JS: The Good, the Bad, and the Ugly", url: "https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/" },
      { type: "github", title: "Awesome CSS-in-JS", url: "https://github.com/tuchk4/awesome-css-in-js" },
      { type: "cheat_sheet", title: "Styled Components Cheat Sheet", url: "https://devhints.io/styled-components" },
      { type: "deep_dive", title: "How Styled Components Works Under the Hood", url: "https://styled-components.com/docs/basics" }
    ]
  },
  "n_css_4": {
    slug: "sass-scss",
    whyLearnThis: "Sass is a CSS preprocessor. It adds variables, nesting, and mixins to CSS, making large stylesheets much easier to organize.",
    whenIsItUsed: "In traditional web projects where raw CSS becomes too verbose to maintain.",
    whereIsItUsed: "`.scss` files compiled down to `.css`.",
    whatComesNext: "Vite",
    learningOutcomes: [
      "Use variables (`$color`) to maintain consistent themes.",
      "Nest CSS selectors to avoid repetition.",
      "Create and use Mixins (`@mixin`) for reusable style blocks.",
      "Split code into multiple files using `@import` / `@use`."
    ],
    commonMistakes: [
      "Nesting too deeply, creating overly specific and bloated CSS.",
      "Using `@import` instead of the modern `@use` rule."
    ],
    realWorldApplications: [
      "Defining a comprehensive color palette and breakpoint system for a design agency website.",
      "Creating a mixin to easily apply flexbox centering anywhere."
    ],
    resources: [
      { type: "official", title: "Sass Basics", url: "https://sass-lang.com/guide" },
      { type: "video_en", title: "Sass Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=nu5mdN2JIwM" },
      { type: "video_hi", title: "Sass / SCSS Tutorial in Hindi (Yahoo Baba)", url: "https://www.youtube.com/watch?v=T_8e2hD9sLg" },
      { type: "article", title: "Architecture for a Sass Project", url: "https://sass-guidelin.es/" },
      { type: "github", title: "Awesome Sass", url: "https://github.com/Famolus/awesome-sass" },
      { type: "cheat_sheet", title: "Sass Cheat Sheet", url: "https://devhints.io/sass" },
      { type: "deep_dive", title: "The new Sass module system", url: "https://css-tricks.com/introducing-sass-modules/" }
    ]
  },
  // --- 9. Build Tools ---
  "n_bt_1": {
    slug: "vite",
    whyLearnThis: "Vite is a next-generation frontend tooling solution that is incredibly fast. It replaces older, slower bundlers like Webpack in many modern projects.",
    whenIsItUsed: "Scaffolding and developing almost any new React, Vue, or Vanilla JS project.",
    whereIsItUsed: "vite.config.js, npm run dev.",
    whatComesNext: "Webpack",
    learningOutcomes: [
      "Understand why Vite is faster than Webpack (ES Modules in the browser).",
      "Scaffold a project using `create-vite`.",
      "Configure basic plugins (like React plugin).",
      "Build for production."
    ],
    commonMistakes: [
      "Trying to use CommonJS `require()` in Vite when it expects ES modules.",
      "Not understanding that environment variables in Vite must be prefixed with `VITE_`."
    ],
    realWorldApplications: [
      "Spinning up a React local dev server in 200ms instead of 30 seconds.",
      "Migrating a legacy Create React App (CRA) project for a better DX."
    ],
    resources: [
      { type: "official", title: "Vite Documentation", url: "https://vitejs.dev/guide/" },
      { type: "video_en", title: "Vite Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=KCrXgy8qtjM" },
      { type: "video_hi", title: "Vite React in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=gY5sGvq-8h8" },
      { type: "article", title: "Why Vite is the Future", url: "https://www.smashingmagazine.com/2021/04/vite-future-web-development/" },
      { type: "github", title: "Awesome Vite", url: "https://github.com/vitejs/awesome-vite" },
      { type: "cheat_sheet", title: "Vite Config Cheat Sheet", url: "https://vitejs.dev/config/" },
      { type: "deep_dive", title: "How Vite Works Under the Hood", url: "https://www.youtube.com/watch?v=qj6B3MDe4o0" }
    ]
  },
  "n_bt_2": {
    slug: "webpack",
    whyLearnThis: "Webpack is the industry standard module bundler. While Vite is replacing it for new apps, millions of legacy and enterprise apps still run on Webpack.",
    whenIsItUsed: "Maintaining existing large-scale applications or highly custom build architectures.",
    whereIsItUsed: "webpack.config.js",
    whatComesNext: "ESLint",
    learningOutcomes: [
      "Understand the Entry and Output points.",
      "Configure Loaders to process CSS, images, and TS.",
      "Configure Plugins to inject HTML or minify code.",
      "Understand bundle splitting."
    ],
    commonMistakes: [
      "Copy-pasting complex configs without understanding the loaders.",
      "Failing to optimize the production build, resulting in huge bundles."
    ],
    realWorldApplications: [
      "Migrating a legacy monolithic application to a micro-frontend architecture using Webpack Module Federation.",
      "Adding a custom babel loader to support an obscure syntax."
    ],
    resources: [
      { type: "official", title: "Webpack Concepts", url: "https://webpack.js.org/concepts/" },
      { type: "video_en", title: "Webpack Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=X1nxTjVDYQk" },
      { type: "video_hi", title: "Webpack Tutorial in Hindi", url: "https://www.youtube.com/watch?v=9_p5_N3n6_s" },
      { type: "article", title: "Webpack from Nothing", url: "https://tylermcginnis.com/webpack/" },
      { type: "github", title: "Awesome Webpack", url: "https://github.com/webpack-contrib/awesome-webpack" },
      { type: "cheat_sheet", title: "Webpack Cheat Sheet", url: "https://webpack.js.org/configuration/" },
      { type: "deep_dive", title: "SurviveJS - Webpack", url: "https://survivejs.com/webpack/" }
    ]
  },
  "n_bt_3": {
    slug: "eslint",
    whyLearnThis: "ESLint statically analyzes your code to quickly find problems. It ensures code quality and consistency across a team.",
    whenIsItUsed: "In every professional JavaScript project to enforce styling and catch bugs.",
    whereIsItUsed: ".eslintrc or package.json.",
    whatComesNext: "Prettier",
    learningOutcomes: [
      "Configure ESLint rules for a project.",
      "Integrate ESLint into VSCode.",
      "Understand the difference between Warnings and Errors.",
      "Use plugins (like eslint-plugin-react)."
    ],
    commonMistakes: [
      "Using `// eslint-disable-next-line` everywhere instead of actually fixing the code.",
      "Having conflicting rules between ESLint and Prettier."
    ],
    realWorldApplications: [
      "Automatically enforcing that all developers on a team use strictly equal (`===`) instead of loose equality.",
      "Catching unused variables before they are pushed to production."
    ],
    resources: [
      { type: "official", title: "ESLint Getting Started", url: "https://eslint.org/docs/latest/user-guide/getting-started" },
      { type: "video_en", title: "Set up ESLint and Prettier (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=SydnKbGc7W8" },
      { type: "video_hi", title: "ESLint setup in React (Hindi)", url: "https://www.youtube.com/watch?v=n5V3x2u-b0I" },
      { type: "article", title: "Why you need ESLint", url: "https://www.freecodecamp.org/news/what-is-eslint-how-do-i-use-it/" },
      { type: "github", title: "Airbnb JavaScript Style Guide", url: "https://github.com/airbnb/javascript" },
      { type: "cheat_sheet", title: "ESLint Configuration Options", url: "https://eslint.org/docs/latest/use/configure/configuration-files" },
      { type: "deep_dive", title: "Writing Custom ESLint Rules", url: "https://eslint.org/docs/latest/extend/custom-rules" }
    ]
  },
  "n_bt_4": {
    slug: "prettier",
    whyLearnThis: "Prettier is an opinionated code formatter. It ends all debates about code style (tabs vs spaces, single vs double quotes) by formatting code automatically.",
    whenIsItUsed: "Every time you hit 'Save' in your code editor.",
    whereIsItUsed: ".prettierrc, VSCode format on save.",
    whatComesNext: "Unit Testing (Jest)",
    learningOutcomes: [
      "Configure Prettier using `.prettierrc`.",
      "Set up VSCode to format on save.",
      "Integrate Prettier with ESLint so they don't fight.",
      "Run Prettier via the CLI."
    ],
    commonMistakes: [
      "Not configuring `eslint-config-prettier` to turn off ESLint styling rules, causing the editor to endlessly toggle formats.",
      "Forgetting to add a `.prettierignore` file and formatting built artifacts."
    ],
    realWorldApplications: [
      "Ensuring that a 10-person dev team produces code that looks exactly the same.",
      "Automatically cleaning up heavily nested and messy HTML/JSX."
    ],
    resources: [
      { type: "official", title: "Prettier Documentation", url: "https://prettier.io/docs/en/" },
      { type: "video_en", title: "Prettier Crash Course", url: "https://www.youtube.com/watch?v=VqCgcpAypFQ" },
      { type: "video_hi", title: "Prettier VSCode Setup (Hindi)", url: "https://www.youtube.com/watch?v=68r_t9r2qEo" },
      { type: "article", title: "Integrating Prettier + ESLint", url: "https://prettier.io/docs/en/integrating-with-linters.html" },
      { type: "github", title: "eslint-config-prettier", url: "https://github.com/prettier/eslint-config-prettier" },
      { type: "cheat_sheet", title: "Prettier Options", url: "https://prettier.io/docs/en/options.html" },
      { type: "deep_dive", title: "How Prettier Works (The AST)", url: "https://prettier.io/docs/en/technical-details.html" }
    ]
  },
  // --- 10. Testing ---
  "n_test_1": {
    slug: "unit-testing-jest",
    whyLearnThis: "Unit testing ensures that individual pieces of code work correctly in isolation. It gives you confidence to refactor code without breaking things.",
    whenIsItUsed: "Whenever writing complex logic, utility functions, or critical algorithms.",
    whereIsItUsed: "Jest, Vitest, `.test.js` files.",
    whatComesNext: "Component Testing",
    learningOutcomes: [
      "Write a basic test using `describe`, `it`, and `expect`.",
      "Understand Test Driven Development (TDD).",
      "Mock dependencies and functions.",
      "Check Code Coverage."
    ],
    commonMistakes: [
      "Testing implementation details instead of outputs (e.g., asserting a specific internal variable changed instead of the return value).",
      "Writing tests that pass no matter what because of unresolved async code."
    ],
    realWorldApplications: [
      "Testing a complex date formatting utility function.",
      "Ensuring a tax calculation function handles edge cases correctly."
    ],
    resources: [
      { type: "official", title: "Jest Documentation", url: "https://jestjs.io/docs/getting-started" },
      { type: "video_en", title: "Jest Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=7r4xVDI2vho" },
      { type: "video_hi", title: "Jest Testing in Hindi (Yahoo Baba)", url: "https://www.youtube.com/watch?v=4CjA1f1vHjE" },
      { type: "article", title: "A Beginner's Guide to Unit Testing", url: "https://www.freecodecamp.org/news/introduction-to-unit-testing-in-javascript/" },
      { type: "github", title: "Awesome Testing", url: "https://github.com/TheJambo/awesome-testing" },
      { type: "cheat_sheet", title: "Jest Cheat Sheet", url: "https://github.com/sapegin/jest-cheat-sheet" },
      { type: "deep_dive", title: "Testing Implementation Details", url: "https://kentcdodds.com/blog/testing-implementation-details" }
    ]
  },
  "n_test_2": {
    slug: "component-testing",
    whyLearnThis: "UI components need to be tested for user interactions, accessibility, and rendering output. React Testing Library is the standard for this.",
    whenIsItUsed: "When building reusable UI components (Buttons, Modals, Forms).",
    whereIsItUsed: "React Testing Library, Cypress Component Testing.",
    whatComesNext: "E2E Testing",
    learningOutcomes: [
      "Render a component in a test environment.",
      "Query elements by role, text, or label.",
      "Simulate user events (clicks, typing).",
      "Assert that specific UI changes occurred."
    ],
    commonMistakes: [
      "Querying by CSS classes or `id` instead of accessible roles (like `getByRole`).",
      "Not wrapping state-updating test code in `act()`."
    ],
    realWorldApplications: [
      "Testing that a Modal closes when the 'X' button is clicked.",
      "Ensuring a form displays an error message when submitted empty."
    ],
    resources: [
      { type: "official", title: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
      { type: "video_en", title: "React Testing Library Crash Course", url: "https://www.youtube.com/watch?v=GLSORcEMOBU" },
      { type: "video_hi", title: "React Testing Library in Hindi", url: "https://www.youtube.com/watch?v=zJgQY3kMB4s" },
      { type: "article", title: "Common mistakes with React Testing Library", url: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library" },
      { type: "github", title: "DOM Testing Library Repo", url: "https://github.com/testing-library/dom-testing-library" },
      { type: "cheat_sheet", title: "RTL Cheat Sheet", url: "https://testing-library.com/docs/dom-testing-library/cheatsheet/" },
      { type: "deep_dive", title: "Write tests. Not too many. Mostly integration.", url: "https://kentcdodds.com/blog/write-tests" }
    ]
  },
  "n_test_3": {
    slug: "e2e-testing",
    whyLearnThis: "End-to-End (E2E) testing spins up a real browser and tests your app exactly how a user would use it, from login to checkout.",
    whenIsItUsed: "To test critical user flows before a production deployment.",
    whereIsItUsed: "Cypress, Playwright.",
    whatComesNext: "REST APIs",
    learningOutcomes: [
      "Set up Cypress or Playwright.",
      "Write a test that navigates through multiple pages.",
      "Intercept network requests and mock responses.",
      "Run tests in headless mode in CI/CD."
    ],
    commonMistakes: [
      "Writing 'flaky' tests that sometimes fail because of network latency (using arbitrary `wait(5000)` instead of waiting for an element).",
      "Using E2E tests for everything instead of just critical flows (they are slow!)."
    ],
    realWorldApplications: [
      "Automating a test that adds an item to a cart and completes a Stripe checkout flow.",
      "Testing the user authentication flow against a staging database."
    ],
    resources: [
      { type: "official", title: "Cypress Documentation", url: "https://docs.cypress.io/" },
      { type: "video_en", title: "Playwright Crash Course (Fireship)", url: "https://www.youtube.com/watch?v=aQOSPA-XqXQ" },
      { type: "video_hi", title: "Cypress Tutorial in Hindi", url: "https://www.youtube.com/watch?v=wX-y0Xo1EFE" },
      { type: "article", title: "Playwright vs Cypress", url: "https://alapanme.medium.com/cypress-vs-playwright-the-rematch-86a345e69f8d" },
      { type: "github", title: "Awesome Playwright", url: "https://github.com/mxschmitt/awesome-playwright" },
      { type: "cheat_sheet", title: "Playwright Cheat Sheet", url: "https://playwright.dev/docs/intro" },
      { type: "deep_dive", title: "The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html" }
    ]
  },
  // --- 11. APIs & Data Fetching ---
  "n_api_1": {
    slug: "rest-apis",
    whyLearnThis: "REST is the architectural standard for the internet. Almost all web applications communicate with backend servers via REST APIs.",
    whenIsItUsed: "Whenever fetching or saving data from a backend server.",
    whereIsItUsed: "Client-side fetch logic, Backend Node.js routes.",
    whatComesNext: "Fetch API / Axios",
    learningOutcomes: [
      "Understand the HTTP Verbs (GET, POST, PUT, DELETE, PATCH).",
      "Understand RESTful URL design.",
      "Grasp HTTP Status Codes (200, 400, 404, 500).",
      "Understand statelessness."
    ],
    commonMistakes: [
      "Using a GET request to modify data instead of POST/PUT.",
      "Designing URLs as actions (e.g., `/getUser`) instead of resources (e.g., `GET /users/1`)."
    ],
    realWorldApplications: [
      "Requesting a list of products from `GET /api/products`.",
      "Submitting a form to create a new user via `POST /api/users`."
    ],
    resources: [
      { type: "official", title: "REST API Tutorial", url: "https://restfulapi.net/" },
      { type: "video_en", title: "What is a REST API? (Fireship)", url: "https://www.youtube.com/watch?v=-mN3VyJuCjM" },
      { type: "video_hi", title: "REST API Explained (CodeWithHarry)", url: "https://www.youtube.com/watch?v=T_T5Z0iB3Fk" },
      { type: "article", title: "Best Practices for REST API Design", url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/" },
      { type: "github", title: "Public APIs Repo", url: "https://github.com/public-apis/public-apis" },
      { type: "cheat_sheet", title: "HTTP Status Codes cheat sheet", url: "https://httpstatuses.com/" },
      { type: "deep_dive", title: "Roy Fielding's Dissertation on REST", url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" }
    ]
  },
  "n_api_2": {
    slug: "fetch-api-axios",
    whyLearnThis: "You need a way to actually execute REST API calls from JavaScript. Fetch is built-in; Axios is the most popular library.",
    whenIsItUsed: "Connecting your React/Vanilla UI to the backend.",
    whereIsItUsed: "Utility files, React useEffect, Redux Thunks.",
    whatComesNext: "GraphQL",
    learningOutcomes: [
      "Use the native `fetch()` API with Promises.",
      "Parse JSON responses.",
      "Send headers and authorization tokens.",
      "Handle HTTP errors."
    ],
    commonMistakes: [
      "Forgetting that `fetch()` only rejects on network failure, not on 404 or 500 status codes (you must check `response.ok`).",
      "Forgetting to call `.json()` on the fetch response."
    ],
    realWorldApplications: [
      "Fetching data from the GitHub API and rendering it.",
      "Sending a Bearer Token in the headers of an Axios request to authenticate a user."
    ],
    resources: [
      { type: "official", title: "MDN: Using Fetch", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
      { type: "video_en", title: "Fetch API vs Axios (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=cuEtnrL9-H0" },
      { type: "video_hi", title: "Fetch API in Hindi (Yahoo Baba)", url: "https://www.youtube.com/watch?v=O18E6jE7x9M" },
      { type: "article", title: "Axios Docs", url: "https://axios-http.com/docs/intro" },
      { type: "github", title: "Axios Repo", url: "https://github.com/axios/axios" },
      { type: "cheat_sheet", title: "Fetch Cheat Sheet", url: "https://devhints.io/js-fetch" },
      { type: "deep_dive", title: "AbortController: How to cancel fetch requests", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController" }
    ]
  },
  "n_api_3": {
    slug: "graphql",
    whyLearnThis: "GraphQL solves the over-fetching and under-fetching problems of REST by letting the client specify exactly what data it wants.",
    whenIsItUsed: "In complex applications where clients need heavily nested data, or when aggregating data from multiple microservices.",
    whereIsItUsed: "Apollo Client, Relay, GitHub API.",
    whatComesNext: "Authentication",
    learningOutcomes: [
      "Understand Queries and Mutations.",
      "Understand the GraphQL schema and types.",
      "Use a client like Apollo to fetch GraphQL data.",
      "Understand Fragments."
    ],
    commonMistakes: [
      "Nesting queries too deeply, causing severe performance issues on the backend.",
      "Using GraphQL for a simple CRUD app where REST would be much faster to implement."
    ],
    realWorldApplications: [
      "Requesting a User object along with only their top 5 recent posts in a single request.",
      "Querying the Shopify API."
    ],
    resources: [
      { type: "official", title: "GraphQL Official Learn", url: "https://graphql.org/learn/" },
      { type: "video_en", title: "GraphQL Crash Course (Fireship)", url: "https://www.youtube.com/watch?v=eIQh02xuVw4" },
      { type: "video_hi", title: "GraphQL in Hindi (CodeStepByStep)", url: "https://www.youtube.com/watch?v=LqUe7-4n_gE" },
      { type: "article", title: "REST vs GraphQL", url: "https://graphql.org/learn/" },
      { type: "github", title: "Awesome GraphQL", url: "https://github.com/chentsulin/awesome-graphql" },
      { type: "cheat_sheet", title: "GraphQL Cheat Sheet", url: "https://devhints.io/graphql" },
      { type: "deep_dive", title: "Apollo Client Architecture", url: "https://www.apollographql.com/docs/react/caching/overview/" }
    ]
  },
  "n_api_4": {
    slug: "authentication",
    whyLearnThis: "Authentication determines WHO is using the application. Security is the most critical aspect of web development.",
    whenIsItUsed: "Whenever your app requires users to log in.",
    whereIsItUsed: "HTTP Headers, Cookies, JWTs, OAuth.",
    whatComesNext: "Static Site Deployment",
    learningOutcomes: [
      "Understand the difference between Authentication (who) and Authorization (permissions).",
      "Understand JSON Web Tokens (JWT).",
      "Understand Session vs Token-based auth.",
      "Grasp OAuth and Single Sign-On (Google/GitHub login)."
    ],
    commonMistakes: [
      "Storing JWTs in `localStorage` where they are vulnerable to XSS attacks (Cross-Site Scripting).",
      "Rolling your own crypto/auth instead of using secure libraries or providers like Auth0 or NextAuth."
    ],
    realWorldApplications: [
      "Implementing 'Login with Google'.",
      "Protecting frontend routes so only logged-in users can see a dashboard."
    ],
    resources: [
      { type: "official", title: "Auth0 Introduction to Identity", url: "https://auth0.com/docs/get-started/identity-fundamentals" },
      { type: "video_en", title: "JWT Auth Crash Course (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
      { type: "video_hi", title: "JWT Authentication in Hindi", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
      { type: "article", title: "Please Stop Using Local Storage", url: "https://dev.to/rdegges/please-stop-using-local-storage-1i04" },
      { type: "github", title: "NextAuth.js", url: "https://github.com/nextauthjs/next-auth" },
      { type: "cheat_sheet", title: "OWASP Authentication Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
      { type: "deep_dive", title: "How OAuth2 Works", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2" }
    ]
  },
  // --- 12. Deployment ---
  "n_dep_1": {
    slug: "static-site-deployment",
    whyLearnThis: "Your code does nothing if users can't reach it. Deploying static sites is the easiest way to get a project live on the internet.",
    whenIsItUsed: "When deploying portfolio sites, documentation, or basic React SPAs.",
    whereIsItUsed: "Vercel, Netlify, GitHub Pages.",
    whatComesNext: "CI / CD",
    learningOutcomes: [
      "Build a project for production (`npm run build`).",
      "Deploy code using Vercel or Netlify.",
      "Connect a custom domain.",
      "Understand the 'dist' or 'build' folder."
    ],
    commonMistakes: [
      "Pushing the `node_modules` folder to GitHub instead of letting the deployment server install them.",
      "Forgetting to configure redirect rules for SPAs, resulting in 404s when a user refreshes the page."
    ],
    realWorldApplications: [
      "Deploying a personal portfolio via GitHub Pages.",
      "Auto-deploying a Next.js app to Vercel upon pushing to the main branch."
    ],
    resources: [
      { type: "official", title: "Vercel Documentation", url: "https://vercel.com/docs" },
      { type: "video_en", title: "How to deploy to Netlify", url: "https://www.youtube.com/watch?v=bjVUqvcCnxM" },
      { type: "video_hi", title: "Host Website for Free (Hindi)", url: "https://www.youtube.com/watch?v=0bZ6lRj8P9A" },
      { type: "article", title: "A Complete Guide to Deploying React Apps", url: "https://vercel.com/docs/concepts/deployments/overview" },
      { type: "github", title: "Netlify CLI repo", url: "https://github.com/netlify/cli" },
      { type: "cheat_sheet", title: "GitHub Pages Docs", url: "https://pages.github.com/" },
      { type: "deep_dive", title: "Understanding CDN caching", url: "https://www.cloudflare.com/learning/cdn/what-is-caching/" }
    ]
  },
  "n_dep_2": {
    slug: "ci-cd",
    whyLearnThis: "Continuous Integration / Continuous Deployment automates testing and deployment. It prevents bad code from ever reaching production.",
    whenIsItUsed: "In professional teams to automate the software lifecycle.",
    whereIsItUsed: "GitHub Actions, GitLab CI.",
    whatComesNext: "Environment Variables",
    learningOutcomes: [
      "Understand the difference between CI and CD.",
      "Create a basic GitHub Actions workflow.",
      "Run tests automatically on Pull Requests.",
      "Automate deployment upon merge."
    ],
    commonMistakes: [
      "Hardcoding secrets in YAML files instead of using GitHub Secrets.",
      "Making deployment pipelines that take 30 minutes, destroying developer velocity."
    ],
    realWorldApplications: [
      "Running ESLint and Jest automatically whenever someone creates a PR.",
      "Publishing an NPM package automatically when a new release is tagged."
    ],
    resources: [
      { type: "official", title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
      { type: "video_en", title: "GitHub Actions Crash Course (Fireship)", url: "https://www.youtube.com/watch?v=eB0nUzAI7M8" },
      { type: "video_hi", title: "CI/CD Pipeline in Hindi", url: "https://www.youtube.com/watch?v=BqB3mU-w84k" },
      { type: "article", title: "What is CI/CD?", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
      { type: "github", title: "Awesome Actions", url: "https://github.com/sdras/awesome-actions" },
      { type: "cheat_sheet", title: "GitHub Actions Workflow Syntax", url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions" },
      { type: "deep_dive", title: "Martin Fowler: Continuous Integration", url: "https://martinfowler.com/articles/continuousIntegration.html" }
    ]
  },
  "n_dep_3": {
    slug: "environment-variables",
    whyLearnThis: "You should never commit sensitive data (API keys, database passwords) into Git. Environment variables keep secrets safe.",
    whenIsItUsed: "When configuring API urls or keeping secret keys out of the codebase.",
    whereIsItUsed: ".env files, Vercel/Netlify settings.",
    whatComesNext: "Performance Optimization",
    learningOutcomes: [
      "Use `.env` files locally.",
      "Add `.env` to `.gitignore`.",
      "Access variables in Node via `process.env`.",
      "Understand the difference between public (VITE_ / NEXT_PUBLIC_) and private variables."
    ],
    commonMistakes: [
      "Accidentally committing a `.env` file containing production database credentials to GitHub.",
      "Putting private secrets in `NEXT_PUBLIC_` variables, exposing them to the browser."
    ],
    realWorldApplications: [
      "Connecting to a local database on your machine, but connecting to a production AWS database when deployed.",
      "Storing a Stripe secret key."
    ],
    resources: [
      { type: "official", title: "Node.js Process.env Docs", url: "https://nodejs.org/api/process.html#process_process_env" },
      { type: "video_en", title: "Environment Variables Explained (Traversy Media)", url: "https://www.youtube.com/watch?v=17UVejOw3zA" },
      { type: "video_hi", title: "Dotenv in Node JS (Hindi)", url: "https://www.youtube.com/watch?v=525jB8nZpW8" },
      { type: "article", title: "The 12 Factor App: Config", url: "https://12factor.net/config" },
      { type: "github", title: "Dotenv Package", url: "https://github.com/motdotla/dotenv" },
      { type: "cheat_sheet", title: "Vercel Environment Variables", url: "https://vercel.com/docs/concepts/projects/environment-variables" },
      { type: "deep_dive", title: "Keeping Secrets Secret", url: "https://www.gitguardian.com/blog/best-practices-to-protect-secrets" }
    ]
  },
  "n_dep_4": {
    slug: "performance-optimization-deploy",
    whyLearnThis: "Code works on your machine, but will it be fast for a user on 3G? Final performance tuning is necessary for production.",
    whenIsItUsed: "The final step before (and after) a major release.",
    whereIsItUsed: "Lighthouse, Next.js Image Optimization, CDN configuration.",
    whatComesNext: "None",
    learningOutcomes: [
      "Run a Lighthouse audit.",
      "Understand Core Web Vitals (LCP, FID, CLS).",
      "Configure Caching Headers.",
      "Optimize and compress images (WebP)."
    ],
    commonMistakes: [
      "Serving 5MB uncompressed images to a mobile device.",
      "Ignoring layout shifts (CLS), causing content to jump around while loading."
    ],
    realWorldApplications: [
      "Improving an e-commerce site's Lighthouse score from 50 to 95 to rank higher on Google.",
      "Putting assets behind a CDN like Cloudflare to serve them faster globally."
    ],
    resources: [
      { type: "official", title: "Web.dev: Measure", url: "https://web.dev/measure/" },
      { type: "video_en", title: "Core Web Vitals (Fireship)", url: "https://www.youtube.com/watch?v=A3e1PjO8mB0" },
      { type: "video_hi", title: "Lighthouse Tutorial in Hindi", url: "https://www.youtube.com/watch?v=1oM4V2J9u6Q" },
      { type: "article", title: "Optimizing Core Web Vitals", url: "https://web.dev/optimize-vitals/" },
      { type: "github", title: "Lighthouse Repo", url: "https://github.com/GoogleChrome/lighthouse" },
      { type: "cheat_sheet", title: "Core Web Vitals Cheat Sheet", url: "https://supermetrics.com/blog/core-web-vitals" },
      { type: "deep_dive", title: "How Browser Caching Works", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" }
    ]
  }
};
