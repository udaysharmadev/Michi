import { RoadmapContent } from "@/data/types";
import { fullstackGraphNodes, fullstackGraphEdges } from "./graph";
import { fullstackTopics } from "./topics";

// Merge the deep topic data into the graph nodes
const nodes = fullstackGraphNodes.map(node => {
  if (node.type === "topic" && fullstackTopics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...fullstackTopics[node.id]
      }
    };
  }
  return node;
});

export const fullstackContent: RoadmapContent = {
  slug: "fullstack",
  nodes,
  edges: fullstackGraphEdges,
};
