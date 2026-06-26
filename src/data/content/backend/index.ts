import { RoadmapContent } from "@/data/types";
import { graphNodes, graphEdges } from "./graph";
import { backendTopics } from "./topics";

// Merge the deep topic data into the graph nodes
const nodes = graphNodes.map(node => {
  if (node.type === "topic" && backendTopics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...backendTopics[node.id]
      }
    };
  }
  return node;
});

export const backendContent: RoadmapContent = {
  slug: "backend",
  nodes,
  edges: graphEdges,
};
