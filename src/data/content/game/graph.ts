import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "math",
    "type": "section",
    "position": {
      "x": 50,
      "y": 50
    },
    "data": {
      "title": "1. Math & Physics Fundamentals",
      "color": "blue"
    }
  },
  {
    "id": "n_gmath_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 150
    },
    "data": {
      "title": "Linear Algebra & Vectors",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "math"
    }
  },
  {
    "id": "n_gmath_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 250
    },
    "data": {
      "title": "Trigonometry & Quaternions",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "math"
    }
  },
  {
    "id": "n_gmath_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 350
    },
    "data": {
      "title": "Collision Detection Physics",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "math"
    }
  },
  {
    "id": "engines",
    "type": "section",
    "position": {
      "x": 50,
      "y": 550
    },
    "data": {
      "title": "2. Game Engines",
      "color": "purple"
    }
  },
  {
    "id": "n_geng_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 650
    },
    "data": {
      "title": "Unity (C#)",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "engines"
    }
  },
  {
    "id": "n_geng_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 750
    },
    "data": {
      "title": "Unreal Engine (C++)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "engines"
    }
  },
  {
    "id": "n_geng_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 850
    },
    "data": {
      "title": "Godot (GDScript)",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "engines"
    }
  },
  {
    "id": "programming",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1050
    },
    "data": {
      "title": "3. Game Programming Patterns",
      "color": "green"
    }
  },
  {
    "id": "n_gprog_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1150
    },
    "data": {
      "title": "Entity Component System (ECS)",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "programming"
    }
  },
  {
    "id": "n_gprog_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1250
    },
    "data": {
      "title": "State Machines & AI",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "programming"
    }
  },
  {
    "id": "n_gprog_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1350
    },
    "data": {
      "title": "Object Pooling & Memory",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "programming"
    }
  },
  {
    "id": "graphics",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1550
    },
    "data": {
      "title": "4. Graphics & Rendering",
      "color": "yellow"
    }
  },
  {
    "id": "n_grap_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1650
    },
    "data": {
      "title": "Shaders (HLSL/GLSL)",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "graphics"
    }
  },
  {
    "id": "n_grap_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1750
    },
    "data": {
      "title": "Lighting & Materials (PBR)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "graphics"
    }
  },
  {
    "id": "n_grap_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1850
    },
    "data": {
      "title": "Particle Systems",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "graphics"
    }
  },
  {
    "id": "assets",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2050
    },
    "data": {
      "title": "5. Audio & Asset Pipelines",
      "color": "red"
    }
  },
  {
    "id": "n_ass_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2150
    },
    "data": {
      "title": "3D Modeling & Animation",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "assets"
    }
  },
  {
    "id": "n_ass_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2250
    },
    "data": {
      "title": "Audio Middleware (FMOD/Wwise)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "assets"
    }
  },
  {
    "id": "n_ass_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2350
    },
    "data": {
      "title": "Asset Bundling",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "assets"
    }
  },
  {
    "id": "multiplayer",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2550
    },
    "data": {
      "title": "6. Multiplayer & Networking",
      "color": "orange"
    }
  },
  {
    "id": "n_mp_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2650
    },
    "data": {
      "title": "Client-Server Architecture",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "multiplayer"
    }
  },
  {
    "id": "n_mp_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2750
    },
    "data": {
      "title": "State Synchronization",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "multiplayer"
    }
  },
  {
    "id": "n_mp_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2850
    },
    "data": {
      "title": "Matchmaking & Lag Compensation",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "multiplayer"
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_gmath_1-n_gmath_2",
    "source": "n_gmath_1",
    "target": "n_gmath_2"
  },
  {
    "id": "e_n_gmath_2-n_gmath_3",
    "source": "n_gmath_2",
    "target": "n_gmath_3"
  },
  {
    "id": "e_n_geng_1-n_geng_2",
    "source": "n_geng_1",
    "target": "n_geng_2"
  },
  {
    "id": "e_n_geng_2-n_geng_3",
    "source": "n_geng_2",
    "target": "n_geng_3"
  },
  {
    "id": "e_n_gmath_3-n_geng_1",
    "source": "n_gmath_3",
    "target": "n_geng_1"
  },
  {
    "id": "e_n_gprog_1-n_gprog_2",
    "source": "n_gprog_1",
    "target": "n_gprog_2"
  },
  {
    "id": "e_n_gprog_2-n_gprog_3",
    "source": "n_gprog_2",
    "target": "n_gprog_3"
  },
  {
    "id": "e_n_geng_3-n_gprog_1",
    "source": "n_geng_3",
    "target": "n_gprog_1"
  },
  {
    "id": "e_n_grap_1-n_grap_2",
    "source": "n_grap_1",
    "target": "n_grap_2"
  },
  {
    "id": "e_n_grap_2-n_grap_3",
    "source": "n_grap_2",
    "target": "n_grap_3"
  },
  {
    "id": "e_n_gprog_3-n_grap_1",
    "source": "n_gprog_3",
    "target": "n_grap_1"
  },
  {
    "id": "e_n_ass_1-n_ass_2",
    "source": "n_ass_1",
    "target": "n_ass_2"
  },
  {
    "id": "e_n_ass_2-n_ass_3",
    "source": "n_ass_2",
    "target": "n_ass_3"
  },
  {
    "id": "e_n_grap_3-n_ass_1",
    "source": "n_grap_3",
    "target": "n_ass_1"
  },
  {
    "id": "e_n_mp_1-n_mp_2",
    "source": "n_mp_1",
    "target": "n_mp_2"
  },
  {
    "id": "e_n_mp_2-n_mp_3",
    "source": "n_mp_2",
    "target": "n_mp_3"
  },
  {
    "id": "e_n_ass_3-n_mp_1",
    "source": "n_ass_3",
    "target": "n_mp_1"
  }
] as RoadmapContentEdge[];
