import { RoadmapContent } from "@/data/types";
import { graphNodes, graphEdges } from "./graph";
import { topicsData as iosTopics } from "./topics";

const nodes = graphNodes.map(node => {
  if (node.type === "topic" && iosTopics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...iosTopics[node.id]
      }
    };
  }
  return node;
});

export const iosContent: RoadmapContent = {
  slug: "ios",
  nodes,
  edges: graphEdges,
};
