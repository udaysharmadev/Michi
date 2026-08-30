import { RoadmapContent } from '../../types';
import { graphNodes, graphEdges } from './graph';
import { topics } from './topics';

const nodes = graphNodes.map(node => {
  if (node.type === "topic" && topics[node.id]) {
    return {
      ...node,
      data: {
        ...node.data,
        ...topics[node.id]
      }
    };
  }
  return node;
});

export const gameDeveloperContent: RoadmapContent = {
  slug: "game",
  nodes,
  edges: graphEdges,
};
