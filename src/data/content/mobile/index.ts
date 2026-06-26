import { RoadmapContent } from "@/data/types";
import { graphNodes, graphEdges } from "./graph";
import { topicsData as mobileTopics } from "./topics";

const nodes = graphNodes.map(node => {
  if (node.type === "topic" && mobileTopics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...mobileTopics[node.id]
      }
    };
  }
  return node;
});

export const mobileContent: RoadmapContent = {
  slug: "mobile",
  nodes,
  edges: graphEdges,
};
