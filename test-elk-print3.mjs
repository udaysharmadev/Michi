import ELK from 'elkjs/lib/elk.bundled.js';
import { frontendContent } from './src/data/content/frontend.ts';

const elk = new ELK();
const elkOptions = {
  'elk.algorithm': 'layered',
};

const nodes = frontendContent.nodes.filter(n => n.id === 's_internet' || n.parentId === 's_internet');
const edges = frontendContent.edges.filter(e => e.id === 'e1');

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
  const elkEdge = { id: edge.id, sources: [edge.source], targets: [edge.target] };
  elkNodeMap['s_internet'].edges.push(elkEdge);
});

const graph = {
  id: 'root',
  layoutOptions: { ...elkOptions, 'elk.hierarchyHandling': 'INCLUDE_CHILDREN' },
  children: rootElkNodes,
  edges: rootEdges,
};

elk.layout(graph).then(() => console.log('Success')).catch(err => {
  console.error('Crash error:', err.message);
});
