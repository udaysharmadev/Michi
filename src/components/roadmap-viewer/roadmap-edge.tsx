import { memo } from "react";
import { type EdgeProps, getSmoothStepPath, BaseEdge } from "@xyflow/react";
import { useRoadmapInteraction } from "./roadmap-context";

export const RoadmapEdge = memo(({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 20,
  });

  const { hoveredNodeId, connectedEdgeIds } = useRoadmapInteraction();

  const isConnected = hoveredNodeId !== null && connectedEdgeIds.has(id);
  const isDimmed = hoveredNodeId !== null && !isConnected;

  // ---- Compute visual properties ----
  let stroke: string;
  let strokeWidth: number;
  let strokeDasharray: string | undefined;
  let opacity: number;

  if (isConnected) {
    stroke = "#3b82f6";
    strokeWidth = 2;
    strokeDasharray = undefined; // solid
    opacity = 1;
  } else if (isDimmed) {
    stroke = "#cbd5e1";
    strokeWidth = 1.5;
    strokeDasharray = "6 4";
    opacity = 0.4;
  } else {
    // Default — nothing hovered
    stroke = "#94a3b8";
    strokeWidth = 1.5;
    strokeDasharray = "6 4";
    opacity = 1;
  }

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      markerEnd={markerEnd}
      style={{
        ...style,
        stroke,
        strokeWidth,
        strokeDasharray,
        opacity,
        transition: "all 0.2s ease-out",
      }}
    />
  );
});

RoadmapEdge.displayName = "RoadmapEdge";
