export type ResourceType = 'official' | 'video_en' | 'video_hi' | 'article' | 'github' | 'cheat_sheet' | 'deep_dive';

export interface Resource {
  type: ResourceType;
  title: string;
  url: string;
}

export type RoadmapContentNode = {
  id: string;
  type: "topic" | "section";
  position: { x: number; y: number };
  data: {
    title: string;
    description?: string;
    difficulty?: "Beginner" | "Intermediate" | "Advanced";
    status?: "Pending" | "In Progress" | "Completed";
    isHighlighted?: boolean;
    // For topic nodes
    slug?: string;
    linkTo?: string;
    icon?: string;
    estimatedTime?: string;
    sectionColor?: "blue" | "green" | "yellow" | "purple" | "red" | "orange";
    row?: number;
    col?: number;
    
    // Deep Knowledge Layer (Topics)
    whyLearnThis?: string;
    whenIsItUsed?: string;
    whereIsItUsed?: string;
    whatComesNext?: string;
    learningOutcomes?: string[];
    commonMistakes?: string[];
    realWorldApplications?: string[];
    resources?: Resource[];

    // For section nodes
    width?: number;
    height?: number;
    color?: "blue" | "green" | "yellow" | "purple" | "red" | "orange";
    sectionNumber?: number;
    sectionIcon?: string;
  };
  parentId?: string;
  extent?: "parent";
  // React flow properties for styling groups
  style?: React.CSSProperties;
};

export type RoadmapContentEdge = {
  id: string;
  source: string;
  target: string;
  type?: "default" | "smoothstep" | "step" | "straight";
  animated?: boolean;
  sourceHandle?: string;
  targetHandle?: string;
};

export type RoadmapContent = {
  slug: string;
  nodes: RoadmapContentNode[];
  edges: RoadmapContentEdge[];
};

export type TopicData = RoadmapContentNode["data"];
export type SectionData = RoadmapContentNode["data"];
