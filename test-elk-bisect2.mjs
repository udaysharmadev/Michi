import ELK from 'elkjs/lib/elk.bundled.js';
import { frontendContent } from './src/data/content/frontend.ts';

const elk = new ELK();
const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.direction': 'RIGHT',
  'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
};

async function testEdges(edgeCount) {
  const nodes = frontendContent.nodes;
  const edges = frontendContent.edges.slice(0, edgeCount);

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

  try {
    await elk.layout(graph);
    console.log(`Success with ${edgeCount} edges`);
    return true;
  } catch (err) {
    console.log(`Failed at ${edgeCount} edges`);
    return false;
  }
}

async function run() {
  for (let i = 1; i <= frontendContent.edges.length; i++) {
    const ok = await testEdges(i);
    if (!ok) break;
  }
}
run();
