import ELK from 'elkjs/lib/elk.bundled.js';
import { frontendContent } from './src/data/content/frontend.ts';

const elk = new ELK();

const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '60',
  'elk.spacing.nodeNode': '60',
  'elk.direction': 'RIGHT',
  'elk.padding': '[top=60,left=40,bottom=40,right=40]',
  'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
};

const nodes = frontendContent.nodes;
const edges = frontendContent.edges;

const isParent = (n) => n.type === 'section';
const rootElkNodes = [];
const elkNodeMap = {};

nodes.forEach((node) => {
  const elkNode = {
    id: node.id,
    width: isParent(node) ? undefined : 140,
    height: isParent(node) ? undefined : 90,
    labels: [{ text: node.data.title || '' }],
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

const rootEdges = [];
edges.forEach((edge) => {
  rootEdges.push({
    id: edge.id,
    sources: [edge.source],
    targets: [edge.target],
  });
});

const graph = {
  id: 'root',
  layoutOptions: { ...elkOptions },
  children: rootElkNodes,
  edges: rootEdges,
};

const safeGraph = JSON.parse(JSON.stringify(graph));

elk.layout(safeGraph).then(() => console.log('Success')).catch(err => {
  console.error('Crash error:', err.message);
});
