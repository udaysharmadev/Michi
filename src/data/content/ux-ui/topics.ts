import { TopicData } from '../../types';

export const topics: Record<string, TopicData> = {
  "user_research": {
    title: "User Research & Personas",
    whyLearnThis: "User research grounds design decisions in empirical user needs, behaviors, and pain points rather than assumptions.",
    whenIsItUsed: "At the start of product design initiatives and feature discovery.",
    whereIsItUsed: "Figma, Miro, UserTesting.com, Dovetail.",
    learningOutcomes: [
      "Conduct qualitative user interviews and quantitative survey research.",
      "Synthesize research into User Personas, Empathy Maps, and Journey Maps.",
      "Identify core user pain points and define problem statements."
    ],
    commonMistakes: [
      "Asking leading questions during user interviews.",
      "Creating idealized, fictional personas not backed by real user data."
    ],
    realWorldApplications: [
      "Interviewing 15 target users to understand checkout abandonment issues.",
      "Creating primary personas for a healthcare telemedicine application."
    ],
    resources: [
      { title: "User Research Methods (Nielsen Norman Group)", type: "video_en", url: "https://www.youtube.com/watch?v=QT7X63LfZmE" },
      { title: "User Research & Personas in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "NN/g: User Research Basics", type: "official", url: "https://www.nngroup.com/articles/user-research-basics/" }
    ]
  },
  "information_architecture": {
    title: "Information Architecture (IA)",
    whyLearnThis: "Information Architecture organizes and structures content so users can intuitively navigate complex applications.",
    whenIsItUsed: "When structuring site navigation, sitemaps, and content hierarchies.",
    whereIsItUsed: "Whimsical, FigJam, Miro, Lucidchart.",
    learningOutcomes: [
      "Conduct Card Sorting (open vs closed) and Tree Testing.",
      "Design clear, scalable Site Maps and navigation schemas.",
      "Establish intuitive content taxonomy and label nomenclature."
    ],
    commonMistakes: [
      "Organizing information based on company internal structure instead of user mental models.",
      "Creating overly deep navigation hierarchies exceeding 3-4 clicks."
    ],
    realWorldApplications: [
      "Structuring the navigation menu of an enterprise SaaS portal.",
      "Reorganizing e-commerce product taxonomy for better discoverability."
    ],
    resources: [
      { title: "Information Architecture Course (UX Design Institute)", type: "video_en", url: "https://www.youtube.com/watch?v=f9wV1sM72V0" },
      { title: "Information Architecture in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { title: "NN/g: Information Architecture Study Guide", type: "official", url: "https://www.nngroup.com/articles/ia-study-guide/" }
    ]
  },
  "wireframing_prototyping": {
    title: "Wireframing & Prototyping",
    whyLearnThis: "Wireframes translate abstract ideas into tangible low-fidelity layouts before investing time in visual design and code.",
    whenIsItUsed: "During early design iteration and user testing phases.",
    whereIsItUsed: "Figma, Balsamiq, Axure RP, Framer.",
    learningOutcomes: [
      "Draft low-fidelity paper and digital wireframes.",
      "Build interactive mid-to-high fidelity prototypes with transitions.",
      "Conduct rapid usability testing on prototypes."
    ],
    commonMistakes: [
      "Adding high-fidelity colors and typography too early in wireframing.",
      "Overcomplicating interactive prototype connections."
    ],
    realWorldApplications: [
      "Building a click-through Figma prototype for client review.",
      "Testing wireframe checkout flows with 5 test users."
    ],
    resources: [
      { title: "Wireframing for Beginners (Figma)", type: "video_en", url: "https://www.youtube.com/watch?v=qD13e_X1_W4" },
      { title: "Figma Prototyping in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "Figma: Prototyping Guide", type: "official", url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma" }
    ]
  },
  "visual_design_principles": {
    title: "Visual Design & Gestalt Laws",
    whyLearnThis: "Visual design principles guide the layout, alignment, contrast, and visual hierarchy to make screens beautiful and effortless to process.",
    whenIsItUsed: "Applied whenever UI layouts, cards, typography, or components are created.",
    whereIsItUsed: "Figma, Sketch, Adobe XD.",
    learningOutcomes: [
      "Apply Gestalt Principles (Proximity, Similarity, Continuity, Closure, Figure/Ground).",
      "Establish strong Visual Hierarchy using scale, weight, and color.",
      "Use 4px/8px spatial grids for consistent component spacing."
    ],
    commonMistakes: [
      "Using low contrast text violating accessibility standards.",
      "Ignoring grid alignment causing cluttered UI visual noise."
    ],
    realWorldApplications: [
      "Designing clean dashboard card components with 8px grid spacing.",
      "Establishing clear typography scale for blog articles."
    ],
    resources: [
      { title: "Gestalt Principles in UI Design (Refactoring UI)", type: "video_en", url: "https://www.youtube.com/watch?v=UwJAAyMVDAw" },
      { title: "Visual Design Principles in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "Interaction Design Foundation: Gestalt Principles", type: "official", url: "https://www.interaction-design.org/literature/topics/gestalt-principles" }
    ]
  },
  "design_systems": {
    title: "Design Systems & Component Libraries",
    whyLearnThis: "Design systems provide reusable UI tokens, components, and standards that speed up product development and maintain consistency.",
    whenIsItUsed: "Used across scaling design and engineering organizations.",
    whereIsItUsed: "Figma Variants, Storybook, Material Design, Tailwind CSS.",
    learningOutcomes: [
      "Define Design Tokens (Colors, Typography, Spacing, Shadows).",
      "Build component variants and auto-layout components in Figma.",
      "Align Figma design libraries with frontend code components (React/Tailwind)."
    ],
    commonMistakes: [
      "Building a design system without engineering input.",
      "Creating rigid components that don't accommodate dynamic content lengths."
    ],
    realWorldApplications: [
      "Maintaining an enterprise UI kit used by 30 designers and 100 developers.",
      "Publishing Figma component libraries with automatic theme updates."
    ],
    resources: [
      { title: "Design Systems 101 (Framer)", type: "video_en", url: "https://www.youtube.com/watch?v=wc_C4-245x4" },
      { title: "Figma Design Systems in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "Material Design 3 Guidelines", type: "official", url: "https://m3.material.io/" }
    ]
  },
  "accessibility_design": {
    title: "Accessibility (a11y) & Inclusive Design",
    whyLearnThis: "Designing for accessibility ensures software is usable by everyone, including people with vision, hearing, motor, or cognitive impairments.",
    whenIsItUsed: "Embedded into every design phase, spec handoff, and component review.",
    whereIsItUsed: "Stark plugin, WebAIM, WCAG 2.1 AAA guidelines.",
    learningOutcomes: [
      "Understand WCAG 2.1 AA & AAA contrast ratio standards (4.5:1 for normal text).",
      "Design for screen reader navigation and keyboard focus states.",
      "Use color-blind friendly palettes and avoid relying solely on color to convey state."
    ],
    commonMistakes: [
      "Using ultra-light gray text for 'sleek aesthetics' that fails contrast checks.",
      "Forgetting focus indicators on interactive buttons and inputs."
    ],
    realWorldApplications: [
      "Auditing an e-commerce checkout flow with Stark for WCAG AA compliance.",
      "Designing accessible form error states with icons and descriptive text."
    ],
    resources: [
      { title: "Accessibility in UI Design (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=kGW8AlwaIFA" },
      { title: "Accessibility & WCAG in Hindi (Thapa Technical)", type: "video_hi", url: "https://www.youtube.com/watch?v=U3xXpQk4vF0" },
      { title: "W3C Web Accessibility Initiative (WAI)", type: "official", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" }
    ]
  },
  "usability_testing": {
    title: "Usability Testing",
    whyLearnThis: "Usability testing evaluates a product by testing it on representative users to identify friction points before coding.",
    whenIsItUsed: "Conducted on interactive prototypes prior to engineering handover.",
    whereIsItUsed: "UserTesting.com, Maze, Lookback, Figma Prototypes.",
    learningOutcomes: [
      "Write unbiased usability testing taskCharters.",
      "Conduct moderated and unmoderated usability sessions.",
      "Calculate System Usability Scale (SUS) scores and task completion rates."
    ],
    commonMistakes: [
      "Guiding the user or explaining how the UI works during the test.",
      "Testing with internal team members instead of real target users."
    ],
    realWorldApplications: [
      "Running Maze unmoderated tests with 50 users to evaluate a mobile app onboarding flow.",
      "Iterating on navigation labels based on user hesitation times."
    ],
    resources: [
      { title: "Usability Testing Masterclass (NN/g)", type: "video_en", url: "https://www.youtube.com/watch?v=0L_n5_s5xU0" },
      { title: "Usability Testing in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "NN/g: Usability Testing 101", type: "official", url: "https://www.nngroup.com/articles/usability-testing-101/" }
    ]
  },
  "micro_interactions": {
    title: "Micro-interactions & Animation",
    whyLearnThis: "Micro-interactions delight users, provide immediate feedback, and communicate system state changes smoothly.",
    whenIsItUsed: "When designing UI feedback, button states, pull-to-refresh, and page transitions.",
    whereIsItUsed: "Figma Smart Animate, Rive, Lottie, Framer Motion.",
    learningOutcomes: [
      "Design Trigger, Rule, Feedback, and Loops/Modes for micro-interactions.",
      "Use spring physics and easing curves (cubic-bezier) for natural motion.",
      "Export Lottie animations for mobile and web implementation."
    ],
    commonMistakes: [
      "Over-animating UI elements causing cognitive overload and motion sickness.",
      "Using long animation durations (>300ms) for high-frequency actions."
    ],
    realWorldApplications: [
      "Designing a heart 'Like' button animation with particle burst.",
      "Creating smooth skeleton loading state transitions."
    ],
    resources: [
      { title: "UI Animation Principles (Emil Kowalski)", type: "video_en", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { title: "Figma Micro-interactions in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "LottieFiles Documentation", type: "official", url: "https://lottiefiles.com/what-is-lottie" }
    ]
  },
  "design_handoff": {
    title: "Design Handoff & Developer Specs",
    whyLearnThis: "A seamless design handoff ensures engineers build exactly what was designed without constant back-and-forth ambiguity.",
    whenIsItUsed: "When finalizing designs before engineering sprint execution.",
    whereIsItUsed: "Figma Dev Mode, Zeplin, Storybook, Jira.",
    learningOutcomes: [
      "Prepare clean Figma files with proper auto-layout, constraints, and naming.",
      "Document responsive breakpoints, interactive states (hover, active, disabled), and edge cases.",
      "Conduct design QA on implemented engineering builds."
    ],
    commonMistakes: [
      "Handing off static PNGs without responsive rules or token definitions.",
      "Forgetting to design error, empty, and loading states."
    ],
    realWorldApplications: [
      "Using Figma Dev Mode to inspect CSS flexbox properties and spacing tokens.",
      "Reviewing frontend PR staging deployments against Figma designs."
    ],
    resources: [
      { title: "Design Handoff Best Practices (Figma)", type: "video_en", url: "https://www.youtube.com/watch?v=680w8t0_1z4" },
      { title: "Developer Handoff in Hindi (Ansh Mehra)", type: "video_hi", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "Figma: Dev Mode Guide", type: "official", url: "https://www.figma.com/dev-mode/" }
    ]
  }
};
