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
        { id: "n1", width: 100, height: 50 },
        { id: "n2", width: 100, height: 50 }
      ],
      edges: [{ id: "e1", sources: ["n1"], targets: ["n2"] }]
    },
    {
      id: "s2",
      layoutOptions: { 'elk.algorithm': 'layered' },
      children: [
        { id: "n3", width: 100, height: 50 }
      ]
    }
  ],
  edges: [{ id: "e2", sources: ["n2"], targets: ["n3"] }]
};
elk.layout(graph).then(console.log).catch(console.error);
