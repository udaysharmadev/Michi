import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_gmath_1": {
    whyLearnThis: "Game engines abstract a lot of math, but when you need to calculate if a player can see an enemy, or move a spaceship relative to its current rotation, you need Linear Algebra. Vectors and Matrices are the absolute foundation of 3D space.",
    whenIsItUsed: "Moving objects, calculating line-of-sight, rotating cameras, and writing custom shaders.",
    whereIsItUsed: "Unity (`Vector3`, `Quaternion`), Unreal (`FVector`, `FRotator`), Graphics Programming.",
    whatComesNext: "Trigonometry",
    learningOutcomes: [
      "Understand Vectors (Magnitude and Direction).",
      "Calculate Vector Addition and Subtraction (for movement and offsets).",
      "Understand the Dot Product (used for calculating facing direction and field of view).",
      "Understand the Cross Product (used for finding surface normals).",
      "Explain how Matrices are used to translate, rotate, and scale objects."
    ],
    commonMistakes: [
      "Using Euler angles (X, Y, Z) for complex rotations and encountering 'Gimbal Lock' instead of using Quaternions.",
      "Confusing global space (World space) coordinates with local space (Object space) coordinates.",
      "Normalizing a vector (setting its length to 1) when you actually needed its magnitude (distance)."
    ],
    realWorldApplications: [
      "Using the Dot Product between the player's forward vector and the enemy's position vector to determine if the enemy is inside the player's field of view.",
      "Using the Cross Product of a triangle's edges to calculate its normal vector for lighting calculations.",
      "Multiplying a local offset vector by the player's rotation matrix so a bullet always spawns exactly at the tip of the gun, regardless of where the player is looking."
    ],
    resources: [
      { type: "official", title: "Unity: Vector Math", url: "https://docs.unity3d.com/Manual/VectorMath.html" },
      { type: "video_en", title: "Math for Game Dev: Vectors (Freya Holmér)", url: "https://www.youtube.com/watch?v=SvDkVXSrSV4" },
      { type: "video_hi", title: "Linear Algebra Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Linear Algebra for Game Developers", url: "https://gamemath.com/" },
      { type: "github", title: "Awesome Game Math", url: "https://github.com/Kavex/GameDev-Resources" },
      { type: "cheat_sheet", title: "Vector Math Cheat Sheet", url: "https://github.com/collections/game-engines" },
      { type: "deep_dive", title: "3D Math Primer for Graphics and Game Development (Book)", url: "https://gamemath.com/book/" }
    ]
  },
  "n_gmath_2": {
    whyLearnThis: "Trigonometry connects angles and distances. If you want a turret to aim at a player, a character to walk up a slope, or a camera to orbit a planet, you must understand Sine, Cosine, and Tangent.",
    whenIsItUsed: "Aiming systems, procedural animation (head bobbing), camera systems, and trajectory calculation.",
    whereIsItUsed: "`Mathf.Sin()`, `Mathf.Cos()`, `Math.Atan2()`",
    whatComesNext: "Collision Physics",
    learningOutcomes: [
      "Understand Sine, Cosine, and Tangent (SOH CAH TOA).",
      "Convert between Degrees and Radians.",
      "Use `Atan2(y, x)` to find the angle between two points.",
      "Use Sine waves to create procedural oscillation (bobbing, pulsing).",
      "Calculate trajectories (e.g., throwing a grenade)."
    ],
    commonMistakes: [
      "Using standard `Atan` instead of `Atan2`, resulting in incorrect angles when the target is in certain quadrants.",
      "Forgetting that most programming languages expect angles in Radians, not Degrees, causing math to behave wildly.",
      "Calculating distances using `sqrt(x^2 + y^2)` every frame, which is computationally expensive (use squared distance for comparisons)."
    ],
    realWorldApplications: [
      "Using `Mathf.Atan2` to calculate the exact angle a 2D top-down character needs to rotate to face the mouse cursor.",
      "Multiplying a character's Y position by `Mathf.Sin(Time.time)` to make a hovering power-up bob up and down smoothly.",
      "Calculating the parabolic arc of an arrow shot from a bow considering gravity and initial velocity."
    ],
    resources: [
      { type: "official", title: "Unity: Trigonometry", url: "https://docs.unity3d.com/ScriptReference/Mathf.html" },
      { type: "video_en", title: "Math for Game Dev: Trigonometry", url: "https://www.youtube.com/watch?v=0ItZMFa-EaE" },
      { type: "video_hi", title: "Trigonometry Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Trigonometry for Game Programming", url: "https://gamedevelopment.tutsplus.com/tutorials/trigonometry-for-game-programming-part-1--gamedev-2830" },
      { type: "github", title: "Game Math Code Examples", url: "https://github.com/Kavex/GameDev-Resources" },
      { type: "cheat_sheet", title: "Trig Identities Cheat Sheet", url: "https://tutorial.math.lamar.edu/pdf/Trig_Cheat_Sheet.pdf" },
      { type: "deep_dive", title: "Essential Mathematics for Games (Book)", url: "https://www.amazon.com/Essential-Mathematics-Games-Interactive-Applications/dp/1482250926" }
    ]
  },
  "n_gmath_3": {
    whyLearnThis: "Without collision physics, your characters fall through the floor and bullets fly through walls. Understanding bounding boxes, raycasting, and rigidbodies is required to make game worlds feel solid.",
    whenIsItUsed: "Shooting mechanics, platformer movement, hit detection, and physical simulations.",
    whereIsItUsed: "PhysX (Unity/Unreal), Box2D, Havok.",
    whatComesNext: "Unity Engine",
    learningOutcomes: [
      "Understand Axis-Aligned Bounding Boxes (AABB) and Oriented Bounding Boxes (OBB).",
      "Implement Raycasting for hitscan weapons and line-of-sight checks.",
      "Differentiate between Kinematic and Dynamic rigidbodies.",
      "Understand Continuous Collision Detection (CCD) to prevent tunneling.",
      "Use spatial partitioning (Quadtrees, Octrees) to optimize collision checks."
    ],
    commonMistakes: [
      "Checking collision between every object and every other object ($O(N^2)$), causing the game to drop to 1 FPS when 100 objects spawn.",
      "Moving a physics object by modifying its `Transform` position directly instead of applying Forces, breaking the physics simulation.",
      "A fast-moving bullet passing completely through a thin wall in a single frame ('tunneling') because CCD wasn't enabled."
    ],
    realWorldApplications: [
      "Firing a Raycast from the center of the camera when the player shoots a sniper rifle to instantly detect if it hit an enemy's head collider.",
      "Using a SphereCast (a thick raycast) to sweep an area in front of a boss monster to detect if any players are caught in a melee swing.",
      "Assigning physics materials to colliders so a rubber ball bounces and an ice cube slides with low friction."
    ],
    resources: [
      { type: "official", title: "Unity Physics Engine", url: "https://docs.unity3d.com/Manual/PhysicsSection.html" },
      { type: "video_en", title: "Physics in Game Development", url: "https://www.youtube.com/watch?v=hkaysu1Z-N8" },
      { type: "video_hi", title: "Game Physics Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Understanding Collision Detection", url: "https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection" },
      { type: "github", title: "Box2D Physics Engine", url: "https://github.com/erincatto/box2d" },
      { type: "cheat_sheet", title: "Collision Algorithms Overview", url: "https://www.realtimerendering.com/intersections.html" },
      { type: "deep_dive", title: "Real-Time Collision Detection (Book)", url: "https://www.amazon.com/Real-Time-Collision-Detection-Interactive-Technology/dp/1558607323" }
    ]
  },
  "n_geng_1": {
    whyLearnThis: "Unity is the most widely used game engine in the world, powering massive hits like Hollow Knight, Genshin Impact, and Hearthstone. It uses C# and a component-based architecture.",
    whenIsItUsed: "Building 2D/3D games, mobile games, AR/VR apps, and indie titles.",
    whereIsItUsed: "Mobile Development, Indie PC/Console.",
    whatComesNext: "Unreal Engine",
    learningOutcomes: [
      "Understand the GameObject-Component model.",
      "Master the Unity Editor layout (Hierarchy, Inspector, Project, Scene).",
      "Write C# MonoBehaviours (Awake, Start, Update, FixedUpdate).",
      "Use Prefabs to create reusable game elements.",
      "Understand Unity's physics and collision system (Rigidbodies, Colliders)."
    ],
    commonMistakes: [
      "Using `Update()` for physics calculations instead of `FixedUpdate()`, resulting in jittery, frame-rate dependent movement.",
      "Using `GameObject.Find()` every frame, severely impacting performance.",
      "Modifying a Prefab instance in the scene and forgetting to 'Apply' the changes, leading to lost work."
    ],
    realWorldApplications: [
      "Creating an 'Enemy' Prefab with a Health script, a Rigidbody, and an AI Navigation component, then spawning 50 of them in the scene.",
      "Using Unity's Animation Controller to blend between walking and running states based on the player's joystick input.",
      "Building a UI canvas that scales properly from a tiny iPhone screen to a massive iPad Pro display."
    ],
    resources: [
      { type: "official", title: "Unity Manual", url: "https://docs.unity3d.com/Manual/index.html" },
      { type: "video_en", title: "Unity Beginner Tutorial (Brackeys)", url: "https://www.youtube.com/watch?v=IlKaB1etrik" },
      { type: "video_hi", title: "Unity Game Dev Hindi", url: "https://www.youtube.com/watch?v=r7c5ExjCCJk" },
      { type: "article", title: "Unity Scripting Best Practices", url: "https://docs.unity3d.com/Manual/ScriptingConcepts.html" },
      { type: "github", title: "Unity Open Project", url: "https://github.com/UnityTechnologies/open-project-1" },
      { type: "cheat_sheet", title: "Unity MonoBehaviour Cheat Sheet", url: "https://docs.unity3d.com/Manual/class-MonoBehaviour.html" },
      { type: "deep_dive", title: "Unity Learn Premium", url: "https://learn.unity.com/" }
    ]
  },
  "n_geng_2": {
    whyLearnThis: "Unreal Engine is the undisputed king of high-end 3D graphics (AAA games like Fortnite, Cyberpunk 2077). It utilizes C++ and a powerful visual scripting system called Blueprints.",
    whenIsItUsed: "AAA PC/Console games, high-fidelity VR, virtual production (The Mandalorian).",
    whereIsItUsed: "AAA Game Studios, Film Industry.",
    whatComesNext: "Godot Engine",
    learningOutcomes: [
      "Understand the Unreal architecture (Actors, Pawns, Characters, Controllers).",
      "Master the Blueprint Visual Scripting system.",
      "Write high-performance C++ classes exposed to Blueprints (`UCLASS`, `UPROPERTY`).",
      "Use the Nanite virtualized geometry system and Lumen global illumination.",
      "Understand the GameMode and GameState framework for multiplayer."
    ],
    commonMistakes: [
      "Writing all game logic in a single massive Blueprint, causing 'spaghetti code' that takes 5 minutes to compile and is impossible to debug.",
      "Fighting the Unreal framework (e.g., trying to write custom input handling instead of using PlayerController).",
      "Overusing the `Tick` function (Update loop) in Blueprints, destroying CPU performance."
    ],
    realWorldApplications: [
      "Using Blueprints to rapidly prototype a double-jump mechanic in 5 minutes, then converting it to C++ for final optimization.",
      "Importing a 10-million polygon cinematic movie asset directly into Unreal using Nanite, allowing it to render in real-time without LODs (Level of Detail models).",
      "Setting up a GameMode that dictates the rules of a Capture The Flag match (respawn timers, score limits)."
    ],
    resources: [
      { type: "official", title: "Unreal Engine Docs", url: "https://docs.unrealengine.com/" },
      { type: "video_en", title: "Unreal Engine 5 Beginner (Unreal Sensei)", url: "https://www.youtube.com/watch?v=gQmiqmxJMtA" },
      { type: "video_hi", title: "Unreal Engine Hindi", url: "https://www.youtube.com/watch?v=aTJFr-eQWI4" },
      { type: "article", title: "Unreal Framework Explained", url: "https://docs.unrealengine.com/5.0/en-US/gameplay-framework-in-unreal-engine/" },
      { type: "github", title: "Unreal Engine Source", url: "https://github.com/EpicGames" },
      { type: "cheat_sheet", title: "Unreal C++ Macros Cheat Sheet", url: "https://docs.unrealengine.com/5.3/en-US/macros-in-unreal-engine/" },
      { type: "deep_dive", title: "Tom Looman's Unreal C++ Course", url: "https://www.tomlooman.com/" }
    ]
  },
  "n_geng_3": {
    whyLearnThis: "Godot is the open-source darling of game engines (the 'Blender of game dev'). It is completely free, has no royalties, is incredibly lightweight (a 50MB executable), and features a unique Node/Scene tree architecture.",
    whenIsItUsed: "Indie game development, 2D games, Game Jams, UI-heavy tools.",
    whereIsItUsed: "Indie studios, open-source projects.",
    whatComesNext: "ECS Architecture",
    learningOutcomes: [
      "Understand Godot's Scene and Node architecture (Everything is a Node, Scenes are just trees of Nodes).",
      "Write scripts using GDScript (a Python-like language built specifically for Godot).",
      "Utilize Signals to decouple game logic (Observer pattern).",
      "Understand Godot's UI system (Control nodes).",
      "Export projects to HTML5, Desktop, and Mobile seamlessly."
    ],
    commonMistakes: [
      "Trying to use Godot like Unity (creating a massive flat hierarchy of GameObjects with Components) instead of nesting Scenes within Scenes.",
      "Hardcoding object references instead of using Signals, creating tightly coupled, brittle code.",
      "Assuming GDScript is slow. For 95% of game logic, it is perfectly fast enough; only use C++ (GDExtension) for heavy calculations."
    ],
    realWorldApplications: [
      "Building a complex UI menu where buttons emit a `pressed` signal, which is connected to a central GameManager node.",
      "Creating an 'Enemy' Scene containing a Sprite, Collider, and Script, and instancing that Scene 100 times inside a 'Level' Scene.",
      "Writing a fast, lightweight 2D platformer in GDScript for a 48-hour game jam."
    ],
    resources: [
      { type: "official", title: "Godot Documentation", url: "https://docs.godotengine.org/" },
      { type: "video_en", title: "Godot in 100 Seconds", url: "https://www.youtube.com/watch?v=E6NsEfAlBvU" },
      { type: "video_hi", title: "Godot Game Engine Hindi", url: "https://www.youtube.com/watch?v=3J7JWbUXb-0" },
      { type: "article", title: "Godot Design Philosophy", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/godot_design_philosophy.html" },
      { type: "github", title: "Godot Engine Source", url: "https://github.com/godotengine/godot" },
      { type: "cheat_sheet", title: "GDScript Cheat Sheet", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" },
      { type: "deep_dive", title: "Advanced Godot Architecture", url: "https://www.gdquest.com/" }
    ]
  },
  "n_gprog_1": {
    whyLearnThis: "Traditional Object-Oriented Programming (OOP) creates massive memory bottlenecks in complex games. Entity Component System (ECS) is a data-oriented architecture that stores data sequentially in memory, leveraging CPU cache to run thousands of objects blazingly fast.",
    whenIsItUsed: "Simulation games (Factorio, Cities: Skylines), RTS games, and pushing max performance.",
    whereIsItUsed: "Unity DOTS, Unreal Mass, Flecs, EnTT.",
    whatComesNext: "State Machines",
    learningOutcomes: [
      "Understand the CPU Cache and why Cache Misses destroy performance in traditional OOP.",
      "Define Entities (just IDs), Components (pure data, no logic), and Systems (logic, no data).",
      "Explain Data-Oriented Design (structs of arrays vs arrays of structs).",
      "Implement a basic ECS architecture.",
      "Understand the complexity trade-off (ECS is harder to read/write but exponentially faster)."
    ],
    commonMistakes: [
      "Putting logic (functions) inside ECS Components. (Components must be pure structs of data).",
      "Using ECS for a simple 2D platformer with 10 enemies, resulting in massive over-engineering for zero tangible benefit.",
      "Storing massive arrays or reference types (classes) inside Components, destroying the memory locality that makes ECS fast."
    ],
    realWorldApplications: [
      "Using Unity DOTS to render and simulate 100,000 asteroids flying through space at 60 FPS on a laptop.",
      "An RTS game where a `MovementSystem` iterates over every entity that possesses a `PositionComponent` and `VelocityComponent` sequentially in memory.",
      "Factorio simulating millions of conveyor belt items efficiently by using strict data-oriented principles."
    ],
    resources: [
      { type: "official", title: "Unity DOTS Documentation", url: "https://unity.com/dots" },
      { type: "video_en", title: "Data-Oriented Design (Mike Acton)", url: "https://www.youtube.com/watch?v=rX0ItVEVjHc" },
      { type: "video_hi", title: "ECS Game Architecture Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "ECS Explained", url: "https://www.gamedeveloper.com/programming/understanding-component-entity-systems" },
      { type: "github", title: "EnTT (C++ ECS Library)", url: "https://github.com/skypjack/entt" },
      { type: "cheat_sheet", title: "ECS Architecture Patterns", url: "https://github.com/SanderMertens/ecs-faq" },
      { type: "deep_dive", title: "Game Programming Patterns: Components", url: "https://gameprogrammingpatterns.com/component.html" }
    ]
  },
  "n_gprog_2": {
    whyLearnThis: "Game characters need logic. An enemy must patrol, chase, attack, and die. Using `if/else` statements for this creates a tangled nightmare. Finite State Machines (FSMs) provide a clean, predictable way to manage AI and animation states.",
    whenIsItUsed: "Enemy AI, Player controllers, Animation systems, Game flow control.",
    whereIsItUsed: "Unity Animator, Unreal Behavior Trees, Custom Scripts.",
    whatComesNext: "Object Pooling",
    learningOutcomes: [
      "Understand the concept of States and Transitions.",
      "Implement a basic Finite State Machine pattern in code.",
      "Differentiate between Hierarchical State Machines and standard FSMs.",
      "Understand the limitations of FSMs for highly complex AI.",
      "Transition from FSMs to Behavior Trees for advanced AI logic."
    ],
    commonMistakes: [
      "Creating an FSM where every state can transition to every other state, resulting in a 'spaghetti FSM' that is impossible to debug.",
      "Writing a massive `switch` statement in the `Update` loop instead of using the State Pattern (separate classes for each state).",
      "Using an FSM for a deeply complex strategy game AI (Behavior Trees or Utility AI are better suited)."
    ],
    realWorldApplications: [
      "Writing an `IdleState`, `ChaseState`, and `AttackState` class for a zombie. The zombie transitions from Idle to Chase when the player enters its vision radius.",
      "Using Unity's Animator window (a visual FSM) to transition a character's animation from 'Running' to 'Jumping' when the `isGrounded` boolean becomes false.",
      "Managing the overall Game Flow: `MainMenuState` -> `LoadingState` -> `PlayingState` -> `GameOverState`."
    ],
    resources: [
      { type: "official", title: "Game Programming Patterns: State", url: "https://gameprogrammingpatterns.com/state.html" },
      { type: "video_en", title: "State Machines in Game Dev", url: "https://www.youtube.com/watch?v=pSiIHe2uZ2w" },
      { type: "video_hi", title: "Finite State Machine Game Dev Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Finite State Machines for AI", url: "https://gamedevelopment.tutsplus.com/tutorials/finite-state-machines-theory-and-implementation--gamedev-11867" },
      { type: "github", title: "Unity FSM Framework", url: "https://github.com/thefuntastic/Unity3d-Finite-State-Machine" },
      { type: "cheat_sheet", title: "AI Architectures Comparison", url: "https://www.gameaipro.com/" },
      { type: "deep_dive", title: "Programming Game AI by Example (Book)", url: "https://www.amazon.com/Programming-Game-Example-Mat-Buckland/dp/1556220782" }
    ]
  },
  "n_gprog_3": {
    whyLearnThis: "Creating (`Instantiate`) and destroying (`Destroy`) objects during gameplay causes heavy CPU overhead and triggers the Garbage Collector, causing massive stuttering (lag spikes). Object Pooling recycles objects to maintain a buttery smooth framerate.",
    whenIsItUsed: "Spawning bullets, particle effects, endless runner obstacles, and UI lists.",
    whereIsItUsed: "Every professional game engine.",
    whatComesNext: "Shaders",
    learningOutcomes: [
      "Understand the performance cost of memory allocation and Garbage Collection (GC spikes).",
      "Implement the Object Pool design pattern.",
      "Manage the lifecycle of a pooled object (OnGet, OnRelease).",
      "Determine the correct initial size of a pool to prevent resizing during gameplay.",
      "Understand memory fragmentation."
    ],
    commonMistakes: [
      "Forgetting to reset an object's state when pulling it from the pool (e.g., spawning a recycled enemy that still has 0 health from the last time it died).",
      "Making the pool too small, forcing the system to allocate new memory during combat anyway.",
      "Applying object pooling to massive, complex boss characters that only spawn once per level (wasting memory)."
    ],
    realWorldApplications: [
      "Creating a pool of 100 'Bullet' objects at the start of a level. When the player shoots, an inactive bullet is enabled. When it hits a wall, it is disabled (not destroyed) and returned to the pool.",
      "Pooling impact blood splatter particle effects so the game doesn't drop frames during an intense shotgun fight.",
      "Managing chunks of terrain in a procedurally generated Endless Runner—as a chunk moves off-screen behind the player, it is moved to the front and re-textured."
    ],
    resources: [
      { type: "official", title: "Game Programming Patterns: Object Pool", url: "https://gameprogrammingpatterns.com/object-pool.html" },
      { type: "video_en", title: "Object Pooling Explained", url: "https://www.youtube.com/watch?v=oMlkQFQbLfU" },
      { type: "video_hi", title: "Object Pooling Unity Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Unity: Introduction to Object Pooling", url: "https://learn.unity.com/tutorial/introduction-to-object-pooling" },
      { type: "github", title: "Unity Object Pool API", url: "https://docs.unity3d.com/ScriptReference/Pool.ObjectPool_1.html" },
      { type: "cheat_sheet", title: "Performance Optimization Patterns", url: "https://www.gamasutra.com/view/feature/131568/dirty_coding_tricks.php" },
      { type: "deep_dive", title: "Garbage Collection in C# (Microsoft)", url: "https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals" }
    ]
  },
  "n_grap_1": {
    whyLearnThis: "Shaders are programs that run directly on the GPU to calculate the color of every pixel on the screen. From rendering realistic water, to cel-shading anime characters, to creating glowing forcefields—shaders are the magic of graphics programming.",
    whenIsItUsed: "Visual effects, lighting models, material design, and post-processing.",
    whereIsItUsed: "HLSL/GLSL, Unity Shader Graph, Unreal Material Editor.",
    whatComesNext: "Lighting/PBR",
    learningOutcomes: [
      "Understand the Graphics Pipeline (Vertex Shader -> Fragment/Pixel Shader).",
      "Write a basic Vertex Shader (modifying object geometry).",
      "Write a basic Fragment Shader (calculating pixel color).",
      "Use Visual Shader Editors (Shader Graph/Unreal Materials) to create complex effects.",
      "Understand UV mapping and texture sampling."
    ],
    commonMistakes: [
      "Writing complex logic (like `if` statements) in a Fragment Shader. GPUs execute in massively parallel warps; branching logic destroys GPU performance.",
      "Performing math in the Fragment shader that could have been done in the Vertex shader (calculating per-pixel instead of per-vertex).",
      "Forgetting that UV coordinates range from 0.0 to 1.0."
    ],
    realWorldApplications: [
      "Writing a Vertex Shader that displaces the vertices of a flat plane using a Sine wave to simulate rolling ocean waves.",
      "Creating a Fragment Shader that checks the dot product of the light direction and the surface normal, clamping the result to create a hard-edged Cel-Shaded (anime) look.",
      "Using a scrolling noise texture combined with a glowing emission color to create a sci-fi forcefield effect."
    ],
    resources: [
      { type: "official", title: "The Book of Shaders", url: "https://thebookofshaders.com/" },
      { type: "video_en", title: "Shaders for Beginners (Freya Holmér)", url: "https://www.youtube.com/watch?v=Ar9eIn57QDY" },
      { type: "video_hi", title: "Shader Graph Unity Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Introduction to Shaders (Alan Zucconi)", url: "https://www.alanzucconi.com/2015/06/10/a-gentle-introduction-to-shaders-in-unity3d/" },
      { type: "github", title: "Shadertoy (Shader code sharing)", url: "https://www.shadertoy.com/" },
      { type: "cheat_sheet", title: "GLSL Cheat Sheet", url: "https://www.khronos.org/files/opengl43-quick-reference-card.pdf" },
      { type: "deep_dive", title: "GPU Gems (Nvidia)", url: "https://developer.nvidia.com/gpugems/gpugems/contributors" }
    ]
  },
  "n_grap_2": {
    whyLearnThis: "Before PBR, artists had to 'fake' lighting by painting shadows directly onto textures. Physically Based Rendering (PBR) uses math that mimics real-world physics (conservation of energy, microfacets) so materials look photorealistic in any lighting condition.",
    whenIsItUsed: "Creating photorealistic games, architectural visualization, and AAA asset pipelines.",
    whereIsItUsed: "Substance Painter, Unreal Engine, Unity URP/HDRP.",
    whatComesNext: "Particle Systems",
    learningOutcomes: [
      "Understand the PBR workflow (Albedo, Normal, Metallic, Roughness, Ambient Occlusion).",
      "Explain the difference between Metallic/Roughness and Specular/Glossiness workflows.",
      "Understand Conservation of Energy (a material cannot reflect more light than it receives).",
      "Bake and apply Normal Maps to add high-resolution detail to low-poly models.",
      "Set up Global Illumination and Reflection Probes in an engine."
    ],
    commonMistakes: [
      "Using 'pure black' or 'pure white' in an Albedo texture. (Nothing in the real world absorbs 100% or reflects 100% of light; doing this breaks the PBR math).",
      "Setting the Metallic slider to 0.5. (Materials are generally either metals [1.0] or non-metals [0.0]; in-between values usually look like cheap plastic).",
      "Baking lighting into textures but failing to use UV channel 2, ruining the lightmaps."
    ],
    realWorldApplications: [
      "Applying a Roughness map to a floor material so that footprints appear dull (rough) while the surrounding polished tile is sharp and reflective (smooth).",
      "Baking the high-poly details of a million-polygon sculpt onto a 5,000-polygon game model using a Normal Map.",
      "Using Substance Painter to generate consistent PBR textures for a rusty metal barrel that will look correct whether it is placed in a bright desert scene or a dark basement."
    ],
    resources: [
      { type: "official", title: "The PBR Guide (Allegorithmic)", url: "https://substance3d.adobe.com/tutorials/courses/the-pbr-guide-part-1" },
      { type: "video_en", title: "Physically Based Rendering Explained", url: "https://www.youtube.com/watch?v=C8YtdC8mxTU" },
      { type: "video_hi", title: "PBR Materials Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Marmoset: Basic Theory of PBR", url: "https://marmoset.co/posts/basic-theory-of-physically-based-rendering/" },
      { type: "github", title: "Google Filament PBR Document", url: "https://google.github.io/filament/Filament.md.html" },
      { type: "cheat_sheet", title: "PBR Texture Values Chart", url: "https://docs.unrealengine.com/5.0/en-US/physically-based-materials-in-unreal-engine/" },
      { type: "deep_dive", title: "Real-Time Rendering (Book)", url: "https://www.realtimerendering.com/" }
    ]
  },
  "n_grap_3": {
    whyLearnThis: "Without VFX, a sword swing is just an animation. Particle systems add the sparks, smoke, fire, and blood that provide 'Game Feel' (Juice). Modern GPU particle systems can simulate millions of particles simultaneously.",
    whenIsItUsed: "Spells, explosions, weather effects (rain/snow), and UI polish.",
    whereIsItUsed: "Unity Shuriken/VFX Graph, Unreal Niagara.",
    whatComesNext: "3D Modeling",
    learningOutcomes: [
      "Understand the anatomy of a particle (Lifetime, Velocity, Color over time, Size over time).",
      "Differentiate between CPU particles (Shuriken/Cascade) and GPU particles (VFX Graph/Niagara).",
      "Use flipbooks (sprite sheets) to animate individual particles (e.g., a rolling fireball).",
      "Optimize particle systems (Overdraw, Max Particles, Culling).",
      "Use Vector Fields to drive complex particle motion (swirling magic)."
    ],
    commonMistakes: [
      "Causing massive 'Overdraw' by spawning 5,000 massive, highly transparent smoke particles on top of each other, completely choking the GPU's fill rate.",
      "Leaving 'Looping' checked on an explosion effect, causing the explosion to repeat infinitely.",
      "Using CPU particles for a snowstorm effect that requires 100,000 particles (use GPU particles instead)."
    ],
    realWorldApplications: [
      "Creating an explosion by combining three particle systems: a fast burst of glowing sparks, a slow-expanding flipbook of fire, and a lingering cloud of gray smoke.",
      "Using Unreal's Niagara to simulate a flock of 50,000 glowing fireflies swirling around the player, utilizing GPU compute shaders.",
      "Adding a small burst of confetti particles to a UI button when the player completes a level to increase satisfaction."
    ],
    resources: [
      { type: "official", title: "Unreal Niagara VFX System", url: "https://docs.unrealengine.com/5.0/en-US/niagara-visual-effects-in-unreal-engine/" },
      { type: "video_en", title: "VFX for Games (Gabriel Aguiar)", url: "https://www.youtube.com/watch?v=aQZRs6yb9AA" },
      { type: "video_hi", title: "Particle Systems Unity Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Art of Screenshake and VFX", url: "https://www.gamasutra.com/blogs/LuisBento/20160223/266395/Game_Feel_and_Juice.php" },
      { type: "github", title: "Unity VFX Graph Samples", url: "https://docs.unity3d.com/Packages/com.unity.visualeffectgraph@latest/" },
      { type: "cheat_sheet", title: "Particle System Overdraw Guide", url: "https://developer.arm.com/documentation/101897/0201/Performance-analysis/Overdraw" },
      { type: "deep_dive", title: "Game Magic: A Designer's Guide to Magic Systems", url: "https://www.gamedeveloper.com/design/game-systems-design" }
    ]
  },
  "n_ass_1": {
    whyLearnThis: "Programmers build the logic, but artists build the world. Understanding 3D modeling, UV unwrapping, and rigging is essential for creating game-ready assets that look good and run efficiently.",
    whenIsItUsed: "Creating characters, props, environments, and level geometry.",
    whereIsItUsed: "Blender, Maya, ZBrush, 3ds Max.",
    whatComesNext: "Audio",
    learningOutcomes: [
      "Navigate the Blender interface and understand basic mesh manipulation (Extrude, Bevel, Loop Cut).",
      "Understand Polygon modeling (Vertices, Edges, Faces).",
      "Perform UV Unwrapping (flattening a 3D model into 2D space for texturing).",
      "Understand Retopology (converting high-poly sculpts to low-poly game models).",
      "Rig a character model with an Armature (Bones) and Weight Painting."
    ],
    commonMistakes: [
      "Creating N-Gons (faces with more than 4 sides) which cause severe rendering and smoothing errors in game engines. (Stick to Quads or Tris).",
      "Failing to apply scale and rotation in Blender before exporting to Unity/Unreal, causing the physics engine to calculate incorrectly.",
      "Overlapping UV islands, causing textures to bleed onto the wrong parts of the model."
    ],
    realWorldApplications: [
      "Sculpting a highly detailed dragon in ZBrush (10 million polygons), retopologizing it in Blender to a game-ready mesh (15,000 polygons), and baking the details.",
      "Rigging a humanoid character in Blender and painting the weight groups so the arm bends naturally without the mesh collapsing in on itself.",
      "Exporting a modular wall asset as an `.FBX` file and snapping it together 100 times in a game engine to build a dungeon."
    ],
    resources: [
      { type: "official", title: "Blender Fundamentals", url: "https://www.blender.org/support/tutorials/" },
      { type: "video_en", title: "Blender Donut Tutorial (Blender Guru)", url: "https://www.youtube.com/watch?v=Z1R3DdcN_yE" },
      { type: "video_hi", title: "Blender 3D Hindi Tutorial", url: "https://www.youtube.com/watch?v=QEnMW1-2gp8" },
      { type: "article", title: "Understanding UV Mapping", url: "https://conceptartempire.com/uv-mapping/" },
      { type: "github", title: "Blender Open Data", url: "https://opendata.blender.org/" },
      { type: "cheat_sheet", title: "Blender Shortcut Keys", url: "https://www.blenderguru.com/" },
      { type: "deep_dive", title: "Polycount Wiki (Industry Standards)", url: "https://www.polycount.com/forum/forumdisplay.php?f=35" }
    ]
  },
  "n_ass_2": {
    whyLearnThis: "Audio is 50% of the game experience. Excellent graphics with terrible audio feels like a cheap game; mediocre graphics with incredible audio feels like a masterpiece. Middleware systems allow dynamic, interactive soundscapes.",
    whenIsItUsed: "Sound effects, dynamic music, voice acting, and spatial audio.",
    whereIsItUsed: "FMOD, Wwise, Unity Audio Mixer, Audacity.",
    whatComesNext: "Asset Bundling",
    learningOutcomes: [
      "Understand 3D Spatial Audio (Attenuation, Doppler Effect).",
      "Differentiate between Audio Clips (Data) and Audio Sources (Speakers).",
      "Implement dynamic music that changes intensity based on gameplay states.",
      "Use Audio Middleware (FMOD/Wwise) to decouple audio logic from programming logic.",
      "Optimize audio formats (compressing dialogue vs uncompressed sound effects)."
    ],
    commonMistakes: [
      "Leaving all audio files as uncompressed `.wav` files, causing the game's file size to balloon to 50GB.",
      "Not randomizing pitch/volume for repetitive sounds (like footsteps or machine guns), causing massive listener fatigue ('Machine Gun Effect').",
      "Hardcoding audio triggers in the movement script instead of using Animation Events to trigger footsteps precisely when the foot hits the ground."
    ],
    realWorldApplications: [
      "Using FMOD to create an engine sound for a racing game that dynamically blends between 5 different engine recordings based on the car's current RPM parameter.",
      "Setting up a Reverb Zone in a cave so that the player's footsteps and gunshots dynamically echo without needing to record separate 'cave' sound files.",
      "Using an Audio Mixer to implement audio 'Ducking' (automatically lowering the volume of the music and explosions whenever an important dialogue voice line plays)."
    ],
    resources: [
      { type: "official", title: "FMOD Studio Documentation", url: "https://fmod.com/resources/documentation-studio" },
      { type: "video_en", title: "Game Audio Implementation (Wwise/FMOD)", url: "https://www.youtube.com/watch?v=T-HXmQAMhG0" },
      { type: "video_hi", title: "Game Audio Editing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Importance of Game Audio", url: "https://www.gamasutra.com/blogs/MickGordon/20200806/367671/DOOM_Eternal_Music.php" },
      { type: "github", title: "Audacity Open Source", url: "https://github.com/audacity/audacity" },
      { type: "cheat_sheet", title: "Audio Compression Formats Chart", url: "https://docs.unity3d.com/Manual/class-AudioClip.html" },
      { type: "deep_dive", title: "Game Audio Implementation (Book)", url: "https://www.routledge.com/Game-Audio-Implementation-A-Practical-Guide-Using-the-Unreal-Engine/Stevens-Raybould/p/book/9781138777248" }
    ]
  },
  "n_ass_3": {
    whyLearnThis: "If your game downloads all 20 levels into memory on startup, mobile devices will crash instantly from Out-Of-Memory (OOM) errors. Asset bundling allows you to package game assets into chunks and stream them from the cloud dynamically.",
    whenIsItUsed: "LiveOps, Mobile games, DLC, and optimizing initial download sizes.",
    whereIsItUsed: "Unity Addressables, Unreal Pak Files.",
    whatComesNext: "Client-Server",
    learningOutcomes: [
      "Understand the memory footprint of loading Assets (Textures, Audio, Models).",
      "Implement Unity's Addressable Asset System to load assets asynchronously via string keys.",
      "Build remote Asset Bundles that can be hosted on AWS S3 or a CDN.",
      "Understand reference counting and memory unloading (cleaning up assets when a level ends).",
      "Implement a patching system to update the game without pushing a new App Store build."
    ],
    commonMistakes: [
      "Keeping references to heavy assets in static variables, preventing the Garbage Collector from ever freeing the memory.",
      "Putting every single asset in the project into the 'Resources' folder, forcing the engine to index them all on startup (a notorious Unity anti-pattern).",
      "Duplicating assets across multiple bundles, doubling the download size."
    ],
    realWorldApplications: [
      "A mobile gacha game launching with a tiny 150MB App Store footprint. After the tutorial, the game downloads the remaining 2GB of high-res textures from an AWS CDN in the background.",
      "Updating a character's stats or seasonal Halloween skins by just updating the remote Asset Bundle, bypassing the 3-day iOS App Store review process.",
      "Using Addressables to asynchronously load a heavy boss model (`Addressables.LoadAssetAsync<GameObject>(\"BossDragon\")`) while the player is walking through the corridor before the boss room."
    ],
    resources: [
      { type: "official", title: "Unity Addressables System", url: "https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html" },
      { type: "video_en", title: "Unity Addressables Tutorial", url: "https://www.youtube.com/watch?v=pwZpJzpE2lQ" },
      { type: "video_hi", title: "Asset Bundles Unity Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Best Practices for Addressables", url: "https://docs.unity3d.com/Manual/com.unity.addressables.html" },
      { type: "github", title: "Unity Addressables Examples", url: "https://github.com/Unity-Technologies/Addressables-Sample" },
      { type: "cheat_sheet", title: "Memory Profiling Guide", url: "https://docs.unity3d.com/Manual/ProfilerMemory.html" },
      { type: "deep_dive", title: "Unreal Engine Asset Management", url: "https://docs.unrealengine.com/5.0/en-US/asset-management-in-unreal-engine/" }
    ]
  },
  "n_mp_1": {
    whyLearnThis: "Multiplayer game development is notoriously the hardest discipline in computer science. Understanding the Client-Server architecture, RPCs, and authoritative servers is required to build games that aren't instantly destroyed by hackers.",
    whenIsItUsed: "Building MMOs, FPS games, MOBAs, and competitive multiplayer.",
    whereIsItUsed: "Mirror, Netcode for GameObjects (NGO), Photon (PUN), Unreal Dedicated Server.",
    whatComesNext: "State Sync",
    learningOutcomes: [
      "Understand the difference between Peer-to-Peer (P2P), Listen Server, and Dedicated Server architectures.",
      "Explain the concept of an Authoritative Server ('Never trust the client').",
      "Implement Remote Procedure Calls (RPCs): Server-to-Client and Client-to-Server.",
      "Understand the difference between TCP (Reliable, Slow) and UDP (Unreliable, Fast) for games.",
      "Understand serialization (converting objects to bytes for network transport)."
    ],
    commonMistakes: [
      "Trusting the client. If a client says 'I have 999,999 gold', a non-authoritative server will accept it. Hackers will ruin the game in 5 minutes.",
      "Using TCP for real-time player movement, causing massive stuttering ('Head-of-line blocking') when a packet is dropped.",
      "Spawning objects locally on the client without telling the server, causing 'ghost' objects that other players cannot see."
    ],
    realWorldApplications: [
      "A player presses 'Shoot'. The client sends a `Command` (RPC) to the server saying 'I want to shoot'. The server checks if the player has ammo, spawns the bullet on the server, and sends a `ClientRpc` to all players to spawn the bullet visually.",
      "Hosting a headless Linux build of your Unreal Engine game on AWS EC2 to act as the authoritative dedicated server for a 100-player Battle Royale.",
      "Using UDP to send a player's position 30 times a second; if a packet drops, the game just ignores it and uses the next one instead of waiting for a retry."
    ],
    resources: [
      { type: "official", title: "Unity Netcode for GameObjects", url: "https://docs-multiplayer.unity3d.com/" },
      { type: "video_en", title: "Multiplayer Game Architecture Explained", url: "https://www.youtube.com/watch?v=jmD_ZNFF2kE" },
      { type: "video_hi", title: "Photon Multiplayer Unity Hindi", url: "https://www.youtube.com/watch?v=YhEFhBFEE7o" },
      { type: "article", title: "Source Multiplayer Networking (Valve)", url: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking" },
      { type: "github", title: "Mirror Networking (Unity)", url: "https://github.com/vis2k/Mirror" },
      { type: "cheat_sheet", title: "Netcode RPC Attributes Cheat Sheet", url: "https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.RpcAttribute/" },
      { type: "deep_dive", title: "Development of Halo: Reach's Networking", url: "https://www.gdcvault.com/play/1014345/I-Shot-You-First-Networking" }
    ]
  },
  "n_mp_2": {
    whyLearnThis: "Network latency (ping) is unavoidable. If you wait 100ms for the server to confirm every step you take, the game feels unplayable. Techniques like Client Prediction and Lag Compensation hide this latency from the player.",
    whenIsItUsed: "Fast-paced competitive games (Shooters, Fighting games, Rocket League).",
    whereIsItUsed: "Custom netcode, GGPO (Rollback Netcode).",
    whatComesNext: "Matchmaking",
    learningOutcomes: [
      "Understand Client-Side Prediction (moving locally before the server confirms).",
      "Understand Server Reconciliation (snapping the client back if they disagree with the server).",
      "Explain Entity Interpolation (smoothing out choppy network updates from other players).",
      "Explain Lag Compensation (rewinding hitboxes on the server so players can hit what they see on their screen).",
      "Understand Rollback Netcode (used heavily in fighting games)."
    ],
    commonMistakes: [
      "Not implementing Client Prediction in a fast-paced game, making the controls feel 'muddy' and unresponsive to anyone with ping over 50ms.",
      "Failing to interpolate remote players, resulting in other characters 'teleporting' around the map.",
      "Getting shot around corners: a side-effect of Lag Compensation where the server favors the shooter's past perspective over the victim's current position."
    ],
    realWorldApplications: [
      "Rocket League running physics completely on the client (Prediction). If the server disagrees, the car 'snaps' to the correct position (Reconciliation).",
      "Counter-Strike's server keeping a historical record of player positions for the last 1 second. When a 100ms-ping player shoots, the server 'rewinds' the hitboxes by 100ms to see if it was a valid hit (Lag Compensation).",
      "Street Fighter utilizing GGPO (Rollback Netcode) to simulate frames ahead; if players disagree, it mathematically 'rolls back' the game state to fix it seamlessly."
    ],
    resources: [
      { type: "official", title: "GGPO Rollback Netcode", url: "https://www.ggpo.net/" },
      { type: "video_en", title: "Fast-Paced Multiplayer (Gabriel Gambetta)", url: "https://www.youtube.com/watch?v=W3aieHjyNvw" },
      { type: "video_hi", title: "Game Networking Sync Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Fast-Paced Multiplayer Series (Gambetta)", url: "https://www.gabrielgambetta.com/client-server-game-architecture.html" },
      { type: "github", title: "GGPO Open Source Code", url: "https://github.com/pond3r/ggpo" },
      { type: "cheat_sheet", title: "Valve's Lag Compensation Diagram", url: "https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization" },
      { type: "deep_dive", title: "Overwatch Gameplay Architecture and Netcode", url: "https://www.gdcvault.com/play/1024001/Overwatch-Gameplay-Architecture-and" }
    ]
  },
  "n_mp_3": {
    whyLearnThis: "Players want to play with people of similar skill quickly. A matchmaking system balances queue times, ping, and Elo ratings, while dynamically spinning up cloud servers to host the matches.",
    whenIsItUsed: "Lobby systems, Ranked ladders, and cloud server scaling.",
    whereIsItUsed: "AWS GameLift, PlayFab, Nakama, Unity Relay.",
    whatComesNext: "Game Complete",
    learningOutcomes: [
      "Understand Elo and TrueSkill rating systems.",
      "Explain the architecture of a Matchmaking Director (grouping players based on parameters).",
      "Understand Cloud Server Orchestration (spinning up an EC2 instance only when 10 players are found).",
      "Use Backend-as-a-Service (BaaS) for player accounts, inventories, and leaderboards.",
      "Understand NAT Punchthrough and Relay servers (for P2P games)."
    ],
    commonMistakes: [
      "Making the matchmaking criteria too strict, causing players to wait 20 minutes for a perfectly balanced match instead of 2 minutes for a 'good enough' match.",
      "Leaving dedicated servers running 24/7 when no one is playing, burning thousands of dollars in AWS costs.",
      "Using Peer-to-Peer hosting without a Relay Server, causing connections to fail due to strict router NAT types."
    ],
    realWorldApplications: [
      "Using Azure PlayFab to store a player's level, currency, and skins securely in the cloud rather than locally on their easily-hacked hard drive.",
      "Configuring AWS GameLift to maintain a buffer of 5 empty servers, dynamically spinning up 50 more when player traffic spikes during a weekend event.",
      "Implementing an expanding search radius: looking for players within 50 Elo for 30 seconds, then expanding the search to 200 Elo to ensure the queue pops."
    ],
    resources: [
      { type: "official", title: "AWS GameLift Documentation", url: "https://aws.amazon.com/gamelift/" },
      { type: "video_en", title: "How Matchmaking Works", url: "https://www.youtube.com/watch?v=7H86s-Q0Ew0" },
      { type: "video_hi", title: "Multiplayer Server Hosting Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Inside Microsoft's TrueSkill System", url: "https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/" },
      { type: "github", title: "Heroic Labs Nakama (Open Source Backend)", url: "https://github.com/heroiclabs/nakama" },
      { type: "cheat_sheet", title: "Matchmaking Algorithm Basics", url: "https://heroiclabs.com/nakama/" },
      { type: "deep_dive", title: "Building a Matchmaker with Redis", url: "https://redis.io/docs/latest/use/patterns/" }
    ]
  }
};
