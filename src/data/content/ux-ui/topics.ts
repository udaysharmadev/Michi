import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "design_thinking": {
    whyLearnThis: "UX isn't just making things look pretty; it's solving human problems. Design Thinking is the framework that ensures you are solving the *right* problem before you spend hundreds of hours designing the solution.",
    whenIsItUsed: "At the very beginning of a project, during discovery phases, and when pivoting a product.",
    whereIsItUsed: "Workshops, whiteboarding sessions, product strategy meetings.",
    whatComesNext: "User Research",
    learningOutcomes: [
      "Understand the 5 phases of Design Thinking: Empathize, Define, Ideate, Prototype, Test.",
      "Explain the Double Diamond design process (Diverging to explore, Converging to focus).",
      "Differentiate between UX (User Experience) and UI (User Interface).",
      "Understand the concept of 'Human-Centered Design'.",
      "Facilitate basic ideation sessions without jumping straight to solutions."
    ],
    commonMistakes: [
      "Skipping the 'Empathize' and 'Define' phases and jumping straight into Figma to design what *you* think is cool.",
      "Falling in love with your first idea instead of diverging to explore multiple options.",
      "Assuming you are the user. (You are not the user; you have domain knowledge they lack)."
    ],
    realWorldApplications: [
      "Realizing that users don't need a complex 'AI search feature' (Ideation), they just need the primary navigation button to be more visible (Define).",
      "Running a workshop where stakeholders write 50 crazy ideas on sticky notes, then grouping and voting on the best 3 to prototype.",
      "Using the 'How Might We...' framework to reframe a problem from 'Our checkout is too long' to 'How might we make paying feel effortless?'"
    ],
    resources: [
      { type: "official", title: "IDEO: Design Thinking Defined", url: "https://designthinking.ideo.com/" },
      { type: "video_en", title: "What is Design Thinking? (Nielsen Norman Group)", url: "https://www.youtube.com/watch?v=pVeJqW9wG10" },
      { type: "video_hi", title: "UX/UI Design Thinking Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Double Diamond Design Process", url: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/" },
      { type: "github", title: "Open Source Design Resources", url: "https://github.com/bradtraversy/design-resources-for-developers" },
      { type: "cheat_sheet", title: "Design Thinking Framework Cheat Sheet", url: "https://www.nngroup.com/articles/design-thinking/" },
      { type: "deep_dive", title: "The Design of Everyday Things (Don Norman)", url: "https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/" }
    ]
  },
  "user_research": {
    whyLearnThis: "Without research, UX design is just guessing. User research provides the qualitative and quantitative data needed to make informed design decisions that actually benefit the user.",
    whenIsItUsed: "Before designing, during prototyping, and after launch to validate hypotheses.",
    whereIsItUsed: "Interviews, Surveys, Analytics, Contextual Inquiry.",
    whatComesNext: "Personas & Journey Maps",
    learningOutcomes: [
      "Differentiate between Qualitative Research (Why?) and Quantitative Research (How many?).",
      "Write unbiased, open-ended interview questions.",
      "Conduct user interviews without leading the witness.",
      "Understand Contextual Inquiry (watching users in their natural environment).",
      "Synthesize research data using affinity mapping."
    ],
    commonMistakes: [
      "Asking leading questions like 'Would you use this feature?' (Users will say 'yes' to be polite. Instead ask: 'Tell me how you currently solve this problem').",
      "Treating focus groups as user research (group dynamics skew individual opinions).",
      "Ignoring the research because it conflicts with what the CEO wants."
    ],
    realWorldApplications: [
      "Interviewing 5 warehouse workers and realizing they can't use your beautiful mobile app because they wear thick gloves all day.",
      "Using Hotjar to see a heatmap showing that 60% of users are clicking on a graphic that isn't actually a link.",
      "Writing a survey that uncovers that 80% of your users are using Android, prompting a redesign of iOS-specific UI patterns."
    ],
    resources: [
      { type: "official", title: "NN/g: User Research Basics", url: "https://www.nngroup.com/articles/ux-research-cheat-sheet/" },
      { type: "video_en", title: "How to run a User Interview", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "UX Research Hindi", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "article", title: "The Mom Test (How to talk to users)", url: "https://www.momtestbook.com/" },
      { type: "github", title: "UX Research Template Repository", url: "https://github.com/alexpate/awesome-design-systems" },
      { type: "cheat_sheet", title: "Qualitative vs Quantitative Research", url: "https://www.nngroup.com/articles/usability-101-introduction-to-usability/" },
      { type: "deep_dive", title: "Just Enough Research (Erika Hall)", url: "https://abookapart.com/products/just-enough-research" }
    ]
  },
  "personas_journey_maps": {
    whyLearnThis: "Data from research is messy. Personas humanize that data into archetypes you can design for. Journey Maps visualize the user's emotional and physical steps over time, highlighting exact pain points in the flow.",
    whenIsItUsed: "Synthesizing research, aligning stakeholders, and finding opportunities for innovation.",
    whereIsItUsed: "FigJam, Miro, Strategy presentations.",
    whatComesNext: "Card Sorting",
    learningOutcomes: [
      "Create realistic User Personas based on actual research data, not stereotypes.",
      "Map out a User Journey (Phases, Actions, Thoughts, Emotions, Pain Points).",
      "Identify the 'Moments of Truth' in a user journey.",
      "Differentiate between a Journey Map (high-level over time) and a User Flow (specific clicks).",
      "Use personas to resolve design arguments (e.g., 'What would *Persona A* prefer?')."
    ],
    commonMistakes: [
      "Creating 'Bullshit Personas' based on imagination rather than real interviews (e.g., 'Sally, 34, loves coffee and hates bad UI').",
      "Making journey maps that only show the 'Happy Path' and ignore edge cases and errors.",
      "Creating a persona and then never looking at it again during the actual design phase."
    ],
    realWorldApplications: [
      "Creating a Journey Map for a food delivery app and realizing the lowest emotional point is the 10-minute wait after ordering, leading to a new 'Live Order Tracking' feature.",
      "Designing a 'Power User' persona for a B2B dashboard, justifying the decision to use dense data tables rather than large, friendly icons.",
      "Mapping the onboarding flow to discover users are dropping off specifically at the 'Upload ID' step."
    ],
    resources: [
      { type: "official", title: "NN/g: Journey Mapping 101", url: "https://www.nngroup.com/articles/journey-mapping-101/" },
      { type: "video_en", title: "How to Create a Journey Map", url: "https://www.youtube.com/watch?v=mSxpVRo3BLg" },
      { type: "video_hi", title: "User Persona UX Hindi", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "article", title: "Personas Make Users Memorable", url: "https://www.nngroup.com/articles/persona/" },
      { type: "github", title: "Open Source UX Personas", url: "https://github.com/alexpate/awesome-design-systems" },
      { type: "cheat_sheet", title: "Journey Mapping Cheat Sheet", url: "https://www.nngroup.com/articles/customer-journey-mapping/" },
      { type: "deep_dive", title: "Mapping Experiences (Jim Kalbach)", url: "https://www.nngroup.com/articles/journey-mapping-101/" }
    ]
  },
  "card_sorting": {
    whyLearnThis: "If users can't find it, it doesn't exist. Card sorting is a UX research technique where users group topics into categories, revealing how *they* mentally model information, rather than how the company models it.",
    whenIsItUsed: "Designing navigation menus, organizing large e-commerce catalogs, and fixing confusing website structures.",
    whereIsItUsed: "OptimalSort, Trello, sticky notes.",
    whatComesNext: "Sitemaps",
    learningOutcomes: [
      "Understand the difference between Open Card Sorting (users create categories) and Closed Card Sorting (users place items into predefined categories).",
      "Conduct a remote card sorting session using tools like OptimalWorkshop.",
      "Analyze card sorting data using similarity matrices and dendrograms.",
      "Understand the concept of Mental Models.",
      "Translate card sorting results into a draft Information Architecture (IA)."
    ],
    commonMistakes: [
      "Using internal company jargon on the cards instead of the words real users actually use.",
      "Doing a closed card sort too early, forcing users into categories that don't make sense to them.",
      "Including too many cards (e.g., 100+), causing user fatigue and random sorting."
    ],
    realWorldApplications: [
      "A university website using open card sorting and realizing students look for 'Financial Aid' under 'Admissions', not under 'Student Life'.",
      "An e-commerce site using closed card sorting to verify if users know that 'Microwaves' belong in the 'Major Appliances' category.",
      "Reorganizing a complex SaaS settings menu based on how 50 users grouped the configuration options."
    ],
    resources: [
      { type: "official", title: "Usability.gov: Card Sorting", url: "https://www.usability.gov/how-to-and-tools/methods/card-sorting.html" },
      { type: "video_en", title: "Card Sorting Explained (NN/g)", url: "https://www.youtube.com/watch?v=gT5c475Nf4M" },
      { type: "video_hi", title: "Information Architecture UX Hindi", url: "https://www.youtube.com/watch?v=NXSDI42LHGA" },
      { type: "article", title: "Card Sorting: Uncover Users' Mental Models", url: "https://www.nngroup.com/articles/card-sorting-definition/" },
      { type: "github", title: "UX Information Architecture Templates", url: "https://github.com/alexpate/awesome-design-systems" },
      { type: "cheat_sheet", title: "Open vs Closed Card Sorting", url: "https://www.nngroup.com/articles/card-sorting-definition/" },
      { type: "deep_dive", title: "Information Architecture (Polar Bear Book)", url: "https://www.nngroup.com/articles/ia-vs-navigation/" }
    ]
  },
  "sitemaps": {
    whyLearnThis: "Before you build the rooms, you need the floor plan. Sitemaps and User Flows define the structural layout and navigational paths of a digital product, ensuring no 'dead ends' exist.",
    whenIsItUsed: "Transitioning from research (IA) to design, planning website rebuilds.",
    whereIsItUsed: "FigJam, Whimsical, Miro.",
    whatComesNext: "Wireframing",
    learningOutcomes: [
      "Create a visual Sitemap representing the hierarchy of a website.",
      "Map out a User Flow (e.g., the exact steps to reset a password).",
      "Understand the difference between broad/shallow navigation and narrow/deep navigation.",
      "Apply the '3-Click Rule' heuristically (and understand why it's mostly a myth).",
      "Design Breadcrumb navigation for deep architectures."
    ],
    commonMistakes: [
      "Starting to design high-fidelity UI screens before figuring out how the screens actually connect.",
      "Creating 'orphan pages' that have no links pointing to them.",
      "Designing complex multi-step flows without a clear 'Back' or 'Cancel' escape hatch for the user."
    ],
    realWorldApplications: [
      "Drawing a flowchart for a checkout process: Cart -> Authentication -> Shipping -> Payment -> Success.",
      "Creating a hierarchical sitemap for a corporate website to hand off to the SEO team for content planning.",
      "Mapping the 'Forgot Password' flow to realize you forgot to design the 'Email Sent' confirmation screen."
    ],
    resources: [
      { type: "official", title: "NN/g: Sitemaps vs Information Architecture", url: "https://www.nngroup.com/articles/ia-vs-navigation/" },
      { type: "video_en", title: "How to Create a User Flow", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "video_hi", title: "Sitemap and User Flow Hindi", url: "https://www.youtube.com/watch?v=Fw7VlHSNVKs" },
      { type: "article", title: "The Myth of the 3-Click Rule", url: "https://www.nngroup.com/articles/3-click-rule/" },
      { type: "github", title: "User Flow Diagram Tool (Mermaid)", url: "https://mermaid.js.org/" },
      { type: "cheat_sheet", title: "Sitemap Anatomy Guide", url: "https://balsamiq.com/learn/articles/what-are-wireframes/" },
      { type: "deep_dive", title: "Everyday Information Architecture", url: "https://abookapart.com/products/everyday-information-architecture" }
    ]
  },
  "wireframing": {
    whyLearnThis: "Wireframes are the blueprints of UI. By stripping away color, fonts, and images, wireframes force stakeholders to focus purely on layout, functionality, and information hierarchy rather than arguing about the shade of blue.",
    whenIsItUsed: "Rapidly iterating on layouts before committing to high-fidelity design.",
    whereIsItUsed: "Balsamiq, Figma, Pen and Paper.",
    whatComesNext: "Color Theory",
    learningOutcomes: [
      "Differentiate between Low-Fidelity (Lo-Fi) and High-Fidelity (Hi-Fi) wireframes.",
      "Use grayscale boxes and placeholder text (Lorem Ipsum) effectively to block out layouts.",
      "Understand the 'Mobile-First' design approach.",
      "Establish visual hierarchy using size and placement rather than color.",
      "Use wireframes to test concepts quickly with users before investing in final designs."
    ],
    commonMistakes: [
      "Adding full color and real images to a wireframe, which distracts stakeholders into giving visual feedback instead of functional feedback.",
      "Wireframing only the desktop view and treating mobile as an afterthought.",
      "Spending 10 hours perfectly aligning boxes in a wireframe that is going to be thrown away tomorrow."
    ],
    realWorldApplications: [
      "Sketching 8 different variations of a landing page on paper (Crazy 8s) in 8 minutes during a design sprint.",
      "Building a clickable Lo-Fi wireframe in Figma to test whether users can navigate the core workflow.",
      "Presenting a wireframe to developers early to ask 'Is this layout technically feasible with our current backend?'"
    ],
    resources: [
      { type: "official", title: "Balsamiq: Wireframing Academy", url: "https://balsamiq.com/learn/courses/wireframing/" },
      { type: "video_en", title: "Wireframing for Beginners (Figma)", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "video_hi", title: "Wireframing UX Hindi", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "article", title: "Wireframing: A Comprehensive Guide", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
      { type: "github", title: "Open Source Wireframe Kits", url: "https://github.com/topics/wireframe" },
      { type: "cheat_sheet", title: "Lo-Fi vs Hi-Fi Cheat Sheet", url: "https://www.interaction-design.org/literature/article/low-fidelity-vs-high-fidelity-prototyping" },
      { type: "deep_dive", title: "Mobile First (Luke Wroblewski)", url: "https://abookapart.com/products/mobile-first" }
    ]
  },
  "color_theory": {
    whyLearnThis: "Color evokes emotion, directs attention, and communicates state (error/success). Poor color choices make a product look cheap, confusing, or literally unusable for visually impaired users.",
    whenIsItUsed: "Establishing brand identity, designing UI systems, and ensuring accessibility.",
    whereIsItUsed: "Figma, CSS, Design Tokens.",
    whatComesNext: "Typography",
    learningOutcomes: [
      "Understand the Color Wheel: Primary, Secondary, and Tertiary colors.",
      "Use color harmonies: Complementary, Analogous, Monochromatic, Triadic.",
      "Understand the HSL color model (Hue, Saturation, Lightness) for building cohesive UI palettes.",
      "Apply the 60-30-10 rule for UI color distribution.",
      "Ensure color contrast meets WCAG accessibility guidelines."
    ],
    commonMistakes: [
      "Using pure black (`#000000`) in UI. (It creates harsh contrast and eye strain; use a dark gray like `#1A1A1A` instead).",
      "Relying *only* on color to convey information (e.g., making an error text red without adding an error icon, breaking accessibility for colorblind users).",
      "Using highly saturated colors for backgrounds, burning the user's retinas."
    ],
    realWorldApplications: [
      "Generating a monochromatic color palette in HSL by keeping the Hue the same and stepping the Lightness from 10% to 90% to create 9 shades of primary blue.",
      "Using a bright complementary accent color (Orange) exclusively for the primary Call to Action (CTA) button on a mostly Blue website to draw the eye.",
      "Running a contrast checker to ensure light gray text on a white background has a ratio of at least 4.5:1."
    ],
    resources: [
      { type: "official", title: "Material Design: Color System", url: "https://m3.material.io/styles/color/overview" },
      { type: "video_en", title: "Color Theory for UI Design", url: "https://www.youtube.com/watch?v=NXSDI42LHGA" },
      { type: "video_hi", title: "Color Theory in UI Hindi", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "article", title: "Refactoring UI: Color", url: "https://www.refactoringui.com/" },
      { type: "github", title: "Tailwind CSS Default Color Palette", url: "https://tailwindcss.com/docs/customizing-colors" },
      { type: "cheat_sheet", title: "WCAG Contrast Guidelines", url: "https://webaim.org/resources/contrastchecker/" },
      { type: "deep_dive", title: "Interaction of Color (Josef Albers)", url: "https://yalebooks.yale.edu/book/9780300179354/interaction-of-color/" }
    ]
  },
  "typography": {
    whyLearnThis: "Web design is 95% typography. How you set your text determines readability, hierarchy, and brand voice. A layout with terrible typography will fail, regardless of how good the colors or images are.",
    whenIsItUsed: "Every single UI screen, marketing page, and dashboard.",
    whereIsItUsed: "Google Fonts, Figma Text Styles, CSS.",
    whatComesNext: "Layout & Grids",
    learningOutcomes: [
      "Differentiate between Serif, Sans-Serif, Display, and Monospace typefaces.",
      "Establish a typographic hierarchy (H1, H2, Body, Caption) using scale and weight.",
      "Understand Line Height (leading), Letter Spacing (tracking), and Line Length.",
      "Limit the number of font families in a design (usually max 2).",
      "Understand responsive typography (scaling fonts down for mobile)."
    ],
    commonMistakes: [
      "Making line lengths too long (over 80 characters), making it physically exhausting for the eye to track back to the next line.",
      "Using too many font weights and sizes on a single page, destroying the visual hierarchy.",
      "Setting body text size too small (below 16px) for modern, readable web design."
    ],
    realWorldApplications: [
      "Using a bold Serif font for a blog's Headlines to give a classic editorial feel, paired with a highly readable Sans-Serif for the body text.",
      "Setting the line-height (leading) of body text to 1.5x the font size to ensure optimal readability on long articles.",
      "Using a Monospace font for tabular data (like a pricing dashboard) so the numbers align perfectly vertically."
    ],
    resources: [
      { type: "official", title: "Google Fonts Knowledge", url: "https://fonts.google.com/knowledge" },
      { type: "video_en", title: "Typography in UI Design (Gary Simon)", url: "https://www.youtube.com/watch?v=kY7_h1n50-8" },
      { type: "video_hi", title: "Typography UI/UX Hindi", url: "https://www.youtube.com/watch?v=Fw7VlHSNVKs" },
      { type: "article", title: "Web Design is 95% Typography", url: "https://ia.net/topics/the-web-is-all-about-typography-period" },
      { type: "github", title: "Inter Typeface (Open Source)", url: "https://github.com/rsms/inter" },
      { type: "cheat_sheet", title: "Typographic Scale Calculator", url: "https://type-scale.com/" },
      { type: "deep_dive", title: "Thinking with Type (Ellen Lupton)", url: "https://fonts.google.com/knowledge" }
    ]
  },
  "layout_grids": {
    whyLearnThis: "Grids bring mathematical order to chaos. They align elements, establish rhythm, and ensure your designs translate perfectly into CSS Flexbox and Grid code. A UI without a grid looks sloppy and unprofessional.",
    whenIsItUsed: "Structuring dashboards, websites, and aligning complex UI elements.",
    whereIsItUsed: "Figma Layout Grids, CSS Grid/Flexbox, Bootstrap/Tailwind.",
    whatComesNext: "Figma Basics",
    learningOutcomes: [
      "Understand the 8pt Grid System (sizing everything in multiples of 8).",
      "Explain the anatomy of a column grid: Columns, Gutters, and Margins.",
      "Design responsive layouts using 12-column desktop, 8-column tablet, and 4-column mobile grids.",
      "Understand the Law of Proximity (items close together are perceived as related).",
      "Use white space (negative space) actively as a design element, not just 'empty space'."
    ],
    commonMistakes: [
      "Sizing elements arbitrarily (e.g., a button with 13px padding, 17px margin) instead of snapping to an 8pt grid (16px padding, 24px margin).",
      "Trapping white space in the middle of a layout, pushing related elements apart.",
      "Ignoring the grid on mobile breakpoints, causing elements to bleed off the screen."
    ],
    realWorldApplications: [
      "Setting up a 12-column grid in Figma with 24px gutters to ensure 3 cards perfectly align across the screen.",
      "Using the 8pt grid to create a spacing scale: 4px, 8px, 16px, 24px, 32px, 64px, ensuring consistent rhythm across the entire app.",
      "Applying the Law of Proximity by increasing the margin below a form group, clearly separating it from the submit button."
    ],
    resources: [
      { type: "official", title: "Material Design: Understanding Layout", url: "https://m3.material.io/foundations/layout/understanding-layout/" },
      { type: "video_en", title: "The 8pt Grid System Explained", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "video_hi", title: "Grid System in UI Design Hindi", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "article", title: "The Comprehensive 8pt Grid Guide", url: "https://spec.fm/specifics/8-pt-grid" },
      { type: "github", title: "Tailwind CSS Spacing Scale", url: "https://tailwindcss.com/docs/customizing-spacing" },
      { type: "cheat_sheet", title: "Gestalt Principles of Design", url: "https://www.interaction-design.org/literature/topics/gestalt-principles" },
      { type: "deep_dive", title: "Grid Systems in Graphic Design (Josef Müller-Brockmann)", url: "https://www.amazon.com/Grid-Systems-Graphic-Design-Communication/dp/3721201450" }
    ]
  },
  "figma_basics": {
    whyLearnThis: "Figma is the industry standard tool for UI/UX design. It replaced Sketch and Adobe XD because it is web-based, collaborative (like Google Docs), and has a massive plugin ecosystem.",
    whenIsItUsed: "Creating everything from wireframes to high-fidelity prototypes and developer handoffs.",
    whereIsItUsed: "Figma, FigJam.",
    whatComesNext: "Advanced Prototyping",
    learningOutcomes: [
      "Navigate the Figma interface (Layers, Properties, Assets).",
      "Create and manage Frames (Artboards) for different device sizes.",
      "Master Auto Layout (Figma's version of CSS Flexbox) for responsive design.",
      "Create basic Components (Main component and instances).",
      "Use Styles (Color and Text) to ensure consistency."
    ],
    commonMistakes: [
      "Using Groups instead of Frames. (Frames can clip content and use Auto Layout; Groups are just dumb folders).",
      "Manually positioning every element instead of using Auto Layout, causing the design to break if the text changes length.",
      "Not using Components. If you have 50 buttons and the client wants them rounded, you have to change them 50 times manually."
    ],
    realWorldApplications: [
      "Creating an Auto Layout button where the padding remains exactly 16px regardless of how long the text inside it gets.",
      "Defining a 'Primary Color' style, applying it to 100 elements, and then changing the style once to update all 100 elements instantly.",
      "Using Figma's multiplayer collaboration to design a screen while a copywriter simultaneously types the real text into your text boxes."
    ],
    resources: [
      { type: "official", title: "Figma Official Tutorials", url: "https://help.figma.com/hc/en-us/categories/360002042553-Figma-design" },
      { type: "video_en", title: "Figma Auto Layout Masterclass", url: "https://www.youtube.com/watch?v=NrKX46DpzCQ" },
      { type: "video_hi", title: "Figma Tutorial Hindi (Ansh Mehra)", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "article", title: "The Ultimate Guide to Auto Layout", url: "https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout" },
      { type: "github", title: "Figma API Documentation", url: "https://www.figma.com/developers/api" },
      { type: "cheat_sheet", title: "Figma Keyboard Shortcuts", url: "https://help.figma.com/hc/en-us/articles/360040328653-Use-shortcuts-and-quick-actions" },
      { type: "deep_dive", title: "Advanced Figma Component Architecture", url: "https://www.figma.com/best-practices/components-styles-and-shared-libraries/" }
    ]
  },
  "advanced_prototyping": {
    whyLearnThis: "Static screens don't convey interactions, transitions, or state changes. Prototyping brings designs to life, allowing you to test complex flows with users and show developers exactly how animations should feel.",
    whenIsItUsed: "Usability testing, stakeholder presentations, and micro-interaction design.",
    whereIsItUsed: "Figma Prototyping, Principle, Protopie.",
    whatComesNext: "Design Systems",
    learningOutcomes: [
      "Create interactive connections between frames (Click, Hover, Drag).",
      "Master Smart Animate to create seamless transitions between states.",
      "Use Interactive Components to create stateful elements (e.g., checkboxes, toggles, hover buttons) without creating massive spaghetti prototypes.",
      "Understand Easing curves (Ease In, Ease Out, Spring) for natural motion.",
      "Implement Variables and Conditional Logic in Figma for advanced dynamic prototypes."
    ],
    commonMistakes: [
      "Using linear animations for UI elements. (Objects in the real world accelerate and decelerate; UI motion should use easing curves).",
      "Duplicating an entire screen just to show a button's hover state (use Interactive Components instead).",
      "Over-animating. If every single element on the screen bounces and fades in, the user will get motion sickness."
    ],
    realWorldApplications: [
      "Creating an Interactive Component for a 'Like' button that plays a micro-interaction heart animation when clicked, which can be reused on any screen.",
      "Using Smart Animate to smoothly transition a small thumbnail image into a full-screen hero image when tapped.",
      "Setting up Figma Variables to create a prototype of a shopping cart that actually increments the total price when you click 'Add'."
    ],
    resources: [
      { type: "official", title: "Figma Prototyping Guide", url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma" },
      { type: "video_en", title: "Figma Advanced Prototyping & Variables", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "video_hi", title: "Figma Prototyping Hindi", url: "https://www.youtube.com/watch?v=NXSDI42LHGA" },
      { type: "article", title: "Good to Great UI Animation Tips", url: "https://m3.material.io/styles/motion/overview" },
      { type: "github", title: "Framer Motion (React Animation Library)", url: "https://github.com/framer/motion" },
      { type: "cheat_sheet", title: "Animation Easing Curves Guide", url: "https://cubic-bezier.com/" },
      { type: "deep_dive", title: "Material Design: Motion Principles", url: "https://m3.material.io/styles/motion/overview" }
    ]
  },
  "design_systems": {
    whyLearnThis: "As teams grow, design becomes inconsistent. A button designed by Alice looks different from a button designed by Bob. A Design System provides a single source of truth—reusable components, tokens, and guidelines—ensuring UI consistency and speeding up development.",
    whenIsItUsed: "Scaling products, ensuring consistency across teams, bridging design and engineering.",
    whereIsItUsed: "Figma Libraries, Storybook, React Component Libraries.",
    whatComesNext: "Usability Testing",
    learningOutcomes: [
      "Understand Atomic Design Methodology (Atoms, Molecules, Organisms).",
      "Explain Design Tokens (storing colors/fonts as variables like `color-primary` rather than hex codes).",
      "Create variants and component properties in Figma.",
      "Understand the difference between a UI Kit (just UI elements) and a Design System (UI + Code + Guidelines).",
      "Establish governance (how to update and deprecate components)."
    ],
    commonMistakes: [
      "Building a complex design system for a 2-person startup that hasn't even launched yet (premature optimization).",
      "Naming color tokens after the color (`blue-500`) instead of their semantic use (`brand-primary`), breaking the system if the brand color changes to red.",
      "Creating components without documenting *when* and *how* to use them."
    ],
    realWorldApplications: [
      "Using Atomic Design: Combining a label (Atom) and an input field (Atom) to create a Search Bar (Molecule), which goes into a Header (Organism).",
      "Publishing a Figma Library so that 50 designers across different product teams all drag and drop the exact same standardized 'Submit' button.",
      "Using Design Tokens so that when the design team changes `color-background` from White to Black in Figma, the React codebase updates automatically via an API."
    ],
    resources: [
      { type: "official", title: "Atomic Design (Brad Frost)", url: "https://atomicdesign.bradfrost.com/" },
      { type: "video_en", title: "How to Build a Design System", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "video_hi", title: "Design Systems Explained Hindi", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "article", title: "What are Design Tokens?", url: "https://css-tricks.com/what-are-design-tokens/" },
      { type: "github", title: "Storybook (UI Component Explorer)", url: "https://github.com/storybookjs/storybook" },
      { type: "cheat_sheet", title: "Design Systems Repo (List of all public systems)", url: "https://designsystemsrepo.com/design-systems/" },
      { type: "deep_dive", title: "Polaris (Shopify's Design System)", url: "https://polaris.shopify.com/" }
    ]
  },
  "usability_testing": {
    whyLearnThis: "You are not your user. The interface that makes perfect sense to you will absolutely confuse someone else. Usability testing is the reality check where you watch real people try (and often fail) to use your design.",
    whenIsItUsed: "Validating prototypes, finding UX bottlenecks, and settling design debates.",
    whereIsItUsed: "UserTesting.com, Zoom, Lookback, Maze.",
    whatComesNext: "Accessibility (a11y)",
    learningOutcomes: [
      "Understand the difference between Moderated and Unmoderated testing.",
      "Write scenario-based tasks (e.g., 'Find a pair of shoes under $50 and add them to your cart').",
      "Measure usability metrics: Task Success Rate, Time on Task, System Usability Scale (SUS).",
      "Facilitate a session without leading the user (The 'Think Aloud' protocol).",
      "Understand why 5 users are usually enough to uncover 85% of usability problems."
    ],
    commonMistakes: [
      "Telling the user what to do: 'Click the blue button in the corner' (You must give them a goal, not instructions).",
      "Getting defensive and explaining the UI to the user when they fail a task. (If they failed, the UI failed).",
      "Testing with internal company employees who already know how the product works."
    ],
    realWorldApplications: [
      "Running an unmoderated test on Maze using a Figma prototype to see if users can successfully navigate the new onboarding flow.",
      "Watching a user try to complete checkout, realizing they didn't notice the tiny error message indicating their zip code was formatted wrong, and deciding to redesign the error states.",
      "Sending a SUS survey after a test and scoring a 45 (below average), proving to stakeholders that the current design needs an overhaul."
    ],
    resources: [
      { type: "official", title: "NN/g: Why You Only Need to Test with 5 Users", url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/" },
      { type: "video_en", title: "How to conduct a Usability Test", url: "https://www.youtube.com/watch?v=Fw7VlHSNVKs" },
      { type: "video_hi", title: "Usability Testing UX Hindi", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "article", title: "The System Usability Scale (SUS)", url: "https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html" },
      { type: "github", title: "UX Checklists", url: "https://github.com/alexpate/awesome-design-systems" },
      { type: "cheat_sheet", title: "Usability Testing Script Template", url: "https://www.nngroup.com/articles/usability-testing-101/" },
      { type: "deep_dive", title: "Rocket Surgery Made Easy (Steve Krug)", url: "https://www.nngroup.com/articles/usability-testing-101/" }
    ]
  },
  "accessibility_a11y": {
    whyLearnThis: "Accessibility ensures your product can be used by everyone, including people with visual, motor, or cognitive disabilities. Ignoring it is exclusionary, terrible for SEO, and in many countries, illegal (resulting in massive lawsuits).",
    whenIsItUsed: "Throughout the entire design and development process.",
    whereIsItUsed: "WCAG Guidelines, Screen Readers, Keyboard Navigation.",
    whatComesNext: "Dev Handoff",
    learningOutcomes: [
      "Understand the Web Content Accessibility Guidelines (WCAG) A, AA, and AAA levels.",
      "Design with adequate color contrast (minimum 4.5:1 for standard text).",
      "Understand how screen readers (VoiceOver, NVDA) interpret UI.",
      "Ensure full keyboard operability (focus states, no keyboard traps).",
      "Use semantic HTML equivalents and ARIA labels in design annotations."
    ],
    commonMistakes: [
      "Removing the blue 'focus ring' around buttons via CSS because 'it looks ugly', making the site impossible to navigate for keyboard-only users.",
      "Using light gray placeholder text inside a form field as the *only* label, which disappears when the user starts typing and fails contrast checks.",
      "Designing complex custom dropdowns without considering how a screen reader will announce them."
    ],
    realWorldApplications: [
      "Running the Stark Figma plugin to simulate how a design looks to a user with Red-Green color blindness (Deuteranopia).",
      "Annotating a Figma file to explicitly tell the developer the tab order for a complex form.",
      "Adding alternative text (alt text) guidelines for all marketing imagery so visually impaired users understand the context."
    ],
    resources: [
      { type: "official", title: "W3C: Web Accessibility Initiative", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
      { type: "video_en", title: "Web Accessibility (Google Chrome Developers)", url: "https://www.youtube.com/watch?v=20SHvU2PKsM" },
      { type: "video_hi", title: "Accessibility (a11y) Hindi", url: "https://www.youtube.com/watch?v=ZV86K7e3rS4" },
      { type: "article", title: "Designing for Accessibility is not that hard", url: "https://web.dev/accessibility/" },
      { type: "github", title: "A11y Project", url: "https://github.com/a11yproject/a11yproject.com" },
      { type: "cheat_sheet", title: "WCAG 2.2 Checklist", url: "https://www.a11yproject.com/checklist/" },
      { type: "deep_dive", title: "Smashing Magazine: Inclusive Design", url: "https://www.smashingmagazine.com/inclusive-design-patterns/" }
    ]
  },
  "dev_handoff": {
    whyLearnThis: "The most beautiful Figma file in the world is worthless if the developers can't build it. Handoff is the critical translation step where design intent becomes technical reality. Good handoff prevents 'UI drift'.",
    whenIsItUsed: "At the end of a design sprint, transitioning work to the engineering team.",
    whereIsItUsed: "Figma Dev Mode, Zeplin, Jira, Storybook.",
    whatComesNext: "UX/UI Complete",
    learningOutcomes: [
      "Organize Figma files specifically for developers (Clear naming, Page structures, Status tags).",
      "Annotate edge cases (empty states, loading states, error states, long text truncation).",
      "Provide exportable assets (SVG icons, optimized images).",
      "Understand the basics of CSS (Flexbox, Grid) to communicate effectively with frontend developers.",
      "Conduct a 'Design QA' session after the developers build the feature."
    ],
    commonMistakes: [
      "Handing off a single 'Happy Path' screen and forgetting to design the 404 error, the loading spinner, and the empty state.",
      "Designing responsive web pages but failing to define how the grid collapses between Desktop, Tablet, and Mobile breakpoints.",
      "Throwing a Figma link over the wall in Slack and never talking to the developer again."
    ],
    realWorldApplications: [
      "Using Figma's Dev Mode to explicitly mark a section as 'Ready for Dev' and linking it directly to the corresponding Jira ticket.",
      "Writing a redline annotation: 'When username exceeds 20 characters, truncate with an ellipsis...'",
      "Sitting down with a frontend developer to explain the exact easing curve parameters (e.g., `cubic-bezier(0.4, 0, 0.2, 1)`) for a drawer slide-in animation."
    ],
    resources: [
      { type: "official", title: "Figma Guide to Dev Mode", url: "https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode" },
      { type: "video_en", title: "Design to Developer Handoff", url: "https://www.youtube.com/watch?v=NXSDI42LHGA" },
      { type: "video_hi", title: "Dev Handoff UX Hindi", url: "https://www.youtube.com/watch?v=0uxqRoHPABk" },
      { type: "article", title: "The Anatomy of a Perfect Design Handoff", url: "https://www.figma.com/best-practices/guide-to-developer-handoff/" },
      { type: "github", title: "Figma to Code (Plugin)", url: "https://github.com/bernaferrari/FigmaToCode" },
      { type: "cheat_sheet", title: "Handoff Checklist for Designers", url: "https://www.smashingmagazine.com/category/ux-design/" },
      { type: "deep_dive", title: "Refactoring UI (Book)", url: "https://tailwindcss.com/docs/customizing-colors" }
    ]
  }
};
