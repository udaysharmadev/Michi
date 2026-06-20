import { RoadmapContent } from "@/data/types";
import { graphNodes, graphEdges } from "./graph";
import { frontendTopics } from "./topics";

// Merge the deep topic data into the graph nodes
const nodes = graphNodes.map(node => {
  if (node.type === "topic" && frontendTopics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...frontendTopics[node.id]
      }
    };
  }
  return node;
});

export const frontendContent: RoadmapContent = {
  slug: "frontend",
  nodes,
  edges: graphEdges,
};
