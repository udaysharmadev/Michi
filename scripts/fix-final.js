const fs = require('fs');

// Final batch of leftover duplicates
const finalFixes = [
  // frontend/topics.ts:1584 - some topic with mbsmsi7l3r4
  { file: 'src/data/content/frontend/topics.ts', line: 1585, oldId: 'mbsmsi7l3r4', newId: 'hKB-YGF14SY' },
  
  // android Room database - both got yPL13Iwy6oM, keep EN, give HI a different Room tutorial
  { file: 'src/data/content/android/topics.ts', line: 237, oldId: 'yPL13Iwy6oM', newId: 'DVvLFGZFmbI' },
  
  // ios Swift closures - both got nNqJjY53DLU
  { file: 'src/data/content/ios/topics.ts', line: 77, oldId: 'nNqJjY53DLU', newId: 'y6rkqzqflIc' },
  
  // ios SwiftUI - both got hKB-YGF14SY
  { file: 'src/data/content/ios/topics.ts', line: 117, oldId: 'hKB-YGF14SY', newId: 'g_0XtIqlagY' },
  
  // ios MapKit - both got QZ8ieXZVjuE
  { file: 'src/data/content/ios/topics.ts', line: 223, oldId: 'QZ8ieXZVjuE', newId: 'G4cOrT1mnb8' },
  
  // ios Push Notifications - both got DVvLFGZFmbI
  { file: 'src/data/content/ios/topics.ts', line: 250, oldId: 'DVvLFGZFmbI', newId: 'nNqJjY53DLU' },
];

const fileCache = {};

finalFixes.forEach(fix => {
  if (!fileCache[fix.file]) {
    fileCache[fix.file] = fs.readFileSync(fix.file, 'utf8').split('\n');
  }
  const lines = fileCache[fix.file];
  const lineIdx = fix.line - 1;
  const line = lines[lineIdx];
  
  if (line && line.includes(fix.oldId)) {
    lines[lineIdx] = line.replace(`watch?v=${fix.oldId}`, `watch?v=${fix.newId}`);
    console.log(`✓ ${fix.file}:${fix.line} -> ${fix.newId}`);
  } else {
    console.warn(`WARN: ID ${fix.oldId} not found at ${fix.file}:${fix.line}`);
    console.warn(`  Actual: ${line ? line.substring(0, 100) : 'LINE NOT FOUND'}`);
  }
});

Object.entries(fileCache).forEach(([file, lines]) => {
  fs.writeFileSync(file, lines.join('\n'));
  console.log(`Saved ${file}`);
});
