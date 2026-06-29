export type ProgressStatus = 'not_started' | 'learning' | 'completed';

const STORAGE_KEY_PREFIX = 'roadmap_progress_';

export function getProgress(slug: string): Record<string, ProgressStatus> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${slug}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setNodeProgress(slug: string, nodeId: string, status: ProgressStatus): Record<string, ProgressStatus> {
  const current = getProgress(slug);
  if (status === 'not_started') {
    delete current[nodeId];
  } else {
    current[nodeId] = status;
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${slug}`, JSON.stringify(current));
  }
  return { ...current };
}

export function getProgressStats(
  progressMap: Record<string, ProgressStatus>,
  nodeIds: string[]
): { total: number; completed: number; learning: number; notStarted: number; percentage: number } {
  let completed = 0;
  let learning = 0;
  for (const id of nodeIds) {
    const s = progressMap[id];
    if (s === 'completed') completed++;
    else if (s === 'learning') learning++;
  }
  const total = nodeIds.length;
  const notStarted = total - completed - learning;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { total, completed, learning, notStarted, percentage };
}

const NOTES_KEY_PREFIX = 'roadmap_notes_';

export function getNotes(slug: string): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(`${NOTES_KEY_PREFIX}${slug}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setNodeNote(slug: string, nodeId: string, note: string): Record<string, string> {
  const current = getNotes(slug);
  if (!note || note.trim() === '') {
    delete current[nodeId];
  } else {
    current[nodeId] = note;
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(`${NOTES_KEY_PREFIX}${slug}`, JSON.stringify(current));
  }
  return { ...current };
}
