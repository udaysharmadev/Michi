import ELK from 'elkjs/lib/elk.bundled.js';
const elk = new ELK();

const graph = {
  "id": "root",
  "layoutOptions": {
    "elk.algorithm": "layered",
    "elk.hierarchyHandling": "INCLUDE_CHILDREN"
  },
  "children": [
    {
      "id": "s_internet",
      "layoutOptions": {
        "elk.algorithm": "layered",
        "elk.hierarchyHandling": "INCLUDE_CHILDREN"
      },
      "children": [
        {
          "id": "n_int_1",
          "width": 140,
          "height": 90,
          "layoutOptions": {},
          "edges": []
        },
        {
          "id": "n_int_2",
          "width": 140,
          "height": 90,
          "layoutOptions": {},
          "edges": []
        },
        {
          "id": "n_int_3",
          "width": 140,
          "height": 90,
          "layoutOptions": {},
          "edges": []
        },
        {
          "id": "n_int_4",
          "width": 140,
          "height": 90,
          "layoutOptions": {},
          "edges": []
        }
      ],
      "edges": [
        {
          "id": "e1",
          "sources": [
            "n_int_1"
          ],
          "targets": [
            "n_int_3"
          ]
        }
      ]
    }
  ],
  "edges": []
};

elk.layout(graph).then(() => console.log('Success')).catch(err => {
  console.error('Crash error:', err.message);
});
