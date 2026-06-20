import ELK from 'elkjs/lib/elk.bundled.js';
const elk = new ELK();

const graph = {
  id: "root",
  layoutOptions: { 'elk.algorithm': 'layered', 'elk.hierarchyHandling': 'INCLUDE_CHILDREN' },
  children: [
    {
      id: "s1",
      layoutOptions: { 'elk.algorithm': 'layered' },
      children: [
        { id: "n1", width: 100, height: 50, edges: [] },
        { id: "n2", width: 100, height: 50, edges: [] }
      ],
      edges: [{ id: "e1", sources: ["n1"], targets: ["n2"] }]
    }
  ],
  edges: []
};

elk.layout(graph).then(() => console.log('Success')).catch(err => {
  console.error('Crash error:', err.message);
});
