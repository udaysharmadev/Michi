import { RoadmapContent } from "@/data/types";
import { graphNodes, graphEdges } from "./graph";
import { topicsData as androidTopics } from "./topics";

const nodes = graphNodes.map(node => {
  if (node.type === "topic" && androidTopics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...androidTopics[node.id]
      }
    };
  }
  return node;
});

export const androidContent: RoadmapContent = {
  slug: "android",
  nodes,
  edges: graphEdges,
};
