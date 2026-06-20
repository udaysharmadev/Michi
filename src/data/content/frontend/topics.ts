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
      { type: "article", title: "Cloudflare: What is the Internet?", url: "https://www.cloudflare.com/learning/network/what-is-the-internet/" },
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
      { type: "cheat_sheet", title: "HTTP Status Codes Cheat Sheet", url: "https://github.com/wesbos/cheatsheets/blob/master/http-status.md" },
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
      { type: "video_en", title: "What is a Web Server? (Fireship)", url: "https://www.youtube.com/watch?v=JBBKWlIB1sA" }
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
      { type: "video_hi", title: "HTML Tutorial for Beginners (CodeWithHarry)", url: "https://www.youtube.com/watch?v=BsDoLVMnmZs" }
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
      { type: "video_en", title: "Semantic HTML Tutorial (Kevin Powell)", url: "https://www.youtube.com/watch?v=kGW8AlwaIFA" }
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
      { type: "video_hi", title: "CSS Tutorial In Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=Edsxf_NBFrw" }
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
      { type: "article", title: "A Complete Guide to Flexbox (CSS-Tricks)", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
      { type: "practice", title: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
      { type: "video_en", title: "Learn Flexbox in 15 Minutes (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=fYq5PXgSsbE" }
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
      { type: "video_en", title: "Responsive Web Design Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=srvUrASNj0s" }
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
      { type: "article", title: "A Complete Guide to Grid (CSS-Tricks)", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { type: "practice", title: "Grid Garden", url: "https://cssgridgarden.com/" },
      { type: "video_en", title: "Learn CSS Grid in 20 Minutes (Web Dev Simplified)", url: "https://www.youtube.com/watch?v=9zBsdzdE4sM" }
    ]
  }
};
