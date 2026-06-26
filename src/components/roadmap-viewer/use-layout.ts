import { useCallback } from 'react';
import { Node, Edge } from '@xyflow/react';

const NODE_WIDTH = 220;
const NODE_HEIGHT = 90;
const GAP_X = 32;
const GAP_Y = 32;
const PADDING_TOP = 80; 
const PADDING_BOTTOM = 32;
const PADDING_X = 32;

export const useLayoutEngine = () => {
  const getLayoutedElements = useCallback(async (nodes: Node[], edges: Edge[]) => {
    const isParent = (n: Node) => n.type === 'section';
    const sections = nodes.filter(isParent);
    const topics = nodes.filter((n) => !isParent(n));
    
    // Group topics by section
    const sectionToTopics: Record<string, Node[]> = {};
    sections.forEach(s => { sectionToTopics[s.id] = []; });
    const standaloneNodes: Node[] = [];
    topics.forEach(t => {
      if (t.parentId && sectionToTopics[t.parentId]) {
         sectionToTopics[t.parentId].push(t);
      } else if (!t.parentId) {
         standaloneNodes.push(t);
      }
    });
    
    const childNodes: Node[] = [];
    const placedSections: Node[] = [];
    
    for (const section of sections) {
       const sTopics = sectionToTopics[section.id];
       
       let maxCol = 0;
       let maxRow = 0;
       
       sTopics.forEach(t => {
          const row = (t.data.row as number) || 0;
          const col = (t.data.col as number) || 0;
          
          if (row > maxRow) maxRow = row;
          if (col > maxCol) maxCol = col;
          
          childNodes.push({
             ...t,
             position: {
                x: PADDING_X + col * (NODE_WIDTH + GAP_X),
                y: PADDING_TOP + row * (NODE_HEIGHT + GAP_Y)
             }
          });
       });
       
       const width = sTopics.length > 0 
           ? PADDING_X * 2 + (maxCol + 1) * NODE_WIDTH + maxCol * GAP_X
           : 400;
           
       const height = sTopics.length > 0 
           ? PADDING_TOP + PADDING_BOTTOM + (maxRow + 1) * NODE_HEIGHT + maxRow * GAP_Y
           : 300;
           
       placedSections.push({
         ...section,
         // the absolute x,y coordinates are already present in the section.position from frontend.ts!
         data: {
           ...section.data,
           width,
           height
         },
         style: {
           width,
           height
         }
       });
    }
    
    // React Flow requires parent nodes to appear before their children in the nodes array
    const layoutedNodes = [...placedSections, ...childNodes, ...standaloneNodes];
    const layoutedEdges = edges.map(e => ({
       ...e,
       type: "custom",
       animated: false
    }));
    
    return { layoutedNodes, layoutedEdges };
  }, []);
  
  return { getLayoutedElements };
};
