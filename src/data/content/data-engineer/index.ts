import { RoadmapContent } from '../../types';
import { nodes as graphNodes, edges } from './graph';
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

export const dataEngineerContent: RoadmapContent = {
  slug: "data-engineer",
  nodes,
  edges,
};
