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

export const devopsContent: RoadmapContent = {
  slug: "devops",
  nodes,
  edges: graphEdges,
};
