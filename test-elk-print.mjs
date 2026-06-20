import ELK from 'elkjs/lib/elk.bundled.js';
import { frontendContent } from './src/data/content/frontend.ts';

const elk = new ELK();
const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
};

const nodes = frontendContent.nodes;
const edges = frontendContent.edges.slice(0, 1); // just e1

const isParent = (n) => n.type === 'section';
const rootElkNodes = [];
const elkNodeMap = {};

nodes.forEach((node) => {
  const elkNode = {
    id: node.id,
    width: isParent(node) ? undefined : 140,
    height: isParent(node) ? undefined : 90,
    layoutOptions: isParent(node) ? { ...elkOptions } : {},
  };
  elkNodeMap[node.id] = elkNode;
  if (!node.parentId) rootElkNodes.push(elkNode);
});

nodes.forEach((node) => {
  if (node.parentId && elkNodeMap[node.parentId]) {
    if (!elkNodeMap[node.parentId].children) elkNodeMap[node.parentId].children = [];
    elkNodeMap[node.parentId].children.push(elkNodeMap[node.id]);
  }
});

Object.values(elkNodeMap).forEach(n => { n.edges = []; });
const rootEdges = [];

edges.forEach((edge) => {
  const sourceNode = nodes.find(n => n.id === edge.source);
  const targetNode = nodes.find(n => n.id === edge.target);
  const elkEdge = { id: edge.id, sources: [edge.source], targets: [edge.target] };
  
  if (sourceNode && targetNode && sourceNode.parentId === targetNode.parentId && sourceNode.parentId) {
    elkNodeMap[sourceNode.parentId].edges.push(elkEdge);
  } else {
    rootEdges.push(elkEdge);
  }
});

const graph = {
  id: 'root',
  layoutOptions: { ...elkOptions },
  children: rootElkNodes,
  edges: rootEdges,
};

console.log(JSON.stringify(graph, null, 2));

elk.layout(graph).then(() => console.log('Success')).catch(err => {
  console.error('Crash error:', err.message);
});
