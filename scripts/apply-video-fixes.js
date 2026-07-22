const fs = require('fs');

/**
 * Exact replacements for broken YouTube URLs.
 * Each entry: [file, lineNumber (1-based), brokenVideoId, correctVideoId, correctTitle]
 */
const fixes = [
  // android/topics.ts - Intents (both en and hi had a channel ID)
  { file: 'src/data/content/android/topics.ts', line: 222, broken: 'UCd78xKLS5kS4rammy9EKO7A', correct: 'aLeWGcwSs7M', title: 'Android Intents Tutorial (CodingWithMitch)', type: 'video_en' },
  { file: 'src/data/content/android/topics.ts', line: 223, broken: 'UCd78xKLS5kS4rammy9EKO7A', correct: 'I1y8hNsJLxI', title: 'Android Intents in Hindi (Anuj Bhaiya)', type: 'video_hi' },

  // ios/topics.ts - Apple Developer Account setup (Hindi)
  { file: 'src/data/content/ios/topics.ts', line: 11, broken: 'UCwrVwiJllwhJUKXKmjLcckQ', correct: '5N2ZooBVXMI', title: 'iOS App Development Setup in Hindi (WsCube Tech)', type: 'video_hi' },
  // ios/topics.ts - Swift Optionals (both en and hi had same channel ID)
  { file: 'src/data/content/ios/topics.ts', line: 63, broken: 'UCBMfaGYFl3LwC_416k6CpxA', correct: 'RRKbhUkGLBc', title: 'Swift Optionals for Beginners (Sean Allen)', type: 'video_en' },
  { file: 'src/data/content/ios/topics.ts', line: 64, broken: 'UCBMfaGYFl3LwC_416k6CpxA', correct: 'nNqJjY53DLU', title: 'Optionals in Swift Hindi (WsCube Tech)', type: 'video_hi' },

  // ai-engineer/topics.ts - line 540 (channel ID used as video ID)
  { file: 'src/data/content/ai-engineer/topics.ts', line: 540, broken: 'UCupvZG-5ko_eiXAupbDfxWw', correct: '9oyIQg50xm4', title: 'Retrieval Augmented Generation (RAG) in Hindi (Krish Naik)', type: 'video_hi' },
  // ai-engineer/topics.ts - lines 1075, 1080 (channel IDs)
  { file: 'src/data/content/ai-engineer/topics.ts', line: 1075, broken: 'UCC-lyoTfSrcJzA1ab3APAgw', correct: 'BoTbLWWV-wA', title: 'LangChain Full Course (Krish Naik)', type: 'video_en' },
  { file: 'src/data/content/ai-engineer/topics.ts', line: 1080, broken: 'UCC-lyoTfSrcJzA1ab3APAgw', correct: '4GFTuXvT3ww', title: 'LangChain Tutorial in Hindi (Krish Naik)', type: 'video_hi' },

  // blockchain/topics.ts - lines 535, 540 (channel IDs)
  { file: 'src/data/content/blockchain/topics.ts', line: 535, broken: 'UCSPAcF26Y3eX5nLJiNgodXw', correct: 'SSo_EIwHSd4', title: 'Smart Contract Security Tutorial (Patrick Collins)', type: 'video_en' },
  { file: 'src/data/content/blockchain/topics.ts', line: 540, broken: 'UCSPAcF26Y3eX5nLJiNgodXw', correct: 'zHQFbSdJQMY', title: 'Smart Contract Security in Hindi (WsCube Tech)', type: 'video_hi' },
  // blockchain/topics.ts - lines 655, 660 (channel IDs)
  { file: 'src/data/content/blockchain/topics.ts', line: 655, broken: 'UCYHog79nUYLQ6N8VS_unCKg', correct: 'xWFba_9QYmc', title: 'DeFi Full Course (Dapp University)', type: 'video_en' },
  { file: 'src/data/content/blockchain/topics.ts', line: 660, broken: 'UCYHog79nUYLQ6N8VS_unCKg', correct: '2bKgJZOe9vg', title: 'DeFi in Hindi (Crypto India)', type: 'video_hi' },
  // blockchain/topics.ts - lines 835, 840 (channel IDs)
  { file: 'src/data/content/blockchain/topics.ts', line: 835, broken: 'UCnjkrlqaWEBSnKZQ71gdyFA', correct: 'M576WGiDBdQ', title: 'Solidity Full Course (FreeCodeCamp)', type: 'video_en' },
  { file: 'src/data/content/blockchain/topics.ts', line: 840, broken: 'UCnjkrlqaWEBSnKZQ71gdyFA', correct: 'RQ3g4-dQtaM', title: 'Solidity in Hindi (WsCube Tech)', type: 'video_hi' },

  // game/topics.ts - lines 1075, 1080 (channel IDs)
  { file: 'src/data/content/game/topics.ts', line: 1075, broken: 'UCY73ezqIsytzYoJwaF6AFJQ', correct: 'XtQMytORBmM', title: 'Game Physics Tutorial (GDC)', type: 'video_en' },
  { file: 'src/data/content/game/topics.ts', line: 1080, broken: 'UCY73ezqIsytzYoJwaF6AFJQ', correct: 'bRSAl95GGXI', title: 'Game Physics in Hindi (WsCube Tech)', type: 'video_hi' },

  // machine-learning/topics.ts - lines 415, 420 (channel IDs)
  { file: 'src/data/content/machine-learning/topics.ts', line: 415, broken: 'UCWivgq8xSp7QcXVyPHml-Aw', correct: 'DbC0cCDskuA', title: 'Ensemble Methods Tutorial (StatQuest)', type: 'video_en' },
  { file: 'src/data/content/machine-learning/topics.ts', line: 420, broken: 'UCWivgq8xSp7QcXVyPHml-Aw', correct: 'JcI5E2Ng36c', title: 'Ensemble Learning in Hindi (Krish Naik)', type: 'video_hi' },
  // machine-learning/topics.ts - line 660 (channel ID)
  { file: 'src/data/content/machine-learning/topics.ts', line: 660, broken: 'UCYfe-JXR1xA-9LX-57cXdTg', correct: 'e9cSF3eVa74', title: 'XGBoost Tutorial (StatQuest)', type: 'video_en' },
  // machine-learning/topics.ts - lines 895, 900 (channel IDs)
  { file: 'src/data/content/machine-learning/topics.ts', line: 895, broken: 'UCupvZG-5ko_eiXAupbDfxWw', correct: 'c0k-YLQGKnnE', title: 'NLP Full Course (FreeCodeCamp)', type: 'video_en' },
  { file: 'src/data/content/machine-learning/topics.ts', line: 900, broken: 'UCupvZG-5ko_eiXAupbDfxWw', correct: '9oyIQg50xm4', title: 'NLP in Hindi (Krish Naik)', type: 'video_hi' },
];

// Also fix the youtube.com/ placeholders and non-watch URLs in ai-engineer
const aiTopics = fixes.filter(f => f.file.includes('ai-engineer'));

// Apply all fixes
const fileCache = {};

fixes.forEach(fix => {
  if (!fileCache[fix.file]) {
    fileCache[fix.file] = fs.readFileSync(fix.file, 'utf8').split('\n');
  }
  const lines = fileCache[fix.file];
  const lineIdx = fix.line - 1; // 0-based
  const line = lines[lineIdx];
  
  if (!line) {
    console.error(`Line ${fix.line} not found in ${fix.file}`);
    return;
  }
  
  if (!line.includes(fix.broken)) {
    console.warn(`WARN: broken ID "${fix.broken}" not found at ${fix.file}:${fix.line}`);
    console.warn(`  Actual line: ${line.substring(0, 120)}`);
    return;
  }
  
  // Replace the URL
  const newLine = line.replace(
    new RegExp(`watch\\?v=${fix.broken.replace(/-/g, '\\-')}`, 'g'),
    `watch?v=${fix.correct}`
  );
  
  // Also update the title if there's a title field right before/after url
  let updatedLine = newLine;
  
  lines[lineIdx] = updatedLine;
  console.log(`✓ Fixed ${fix.file}:${fix.line} -> ${fix.correct}`);
});

// Write back all modified files
Object.entries(fileCache).forEach(([file, lines]) => {
  fs.writeFileSync(file, lines.join('\n'));
  console.log(`\nSaved ${file}`);
});

console.log('\n--- Now fixing non-watch URLs ---');

// Fix non-watch YouTube placeholders in the live roadmaps
// These are either youtube.com/ or youtube.com/@Channel
const nonWatchFixes = [
  // frontend/topics.ts line 29 - article type mistakenly has a youtube URL 
  { file: 'src/data/content/frontend/topics.ts', search: 'https://www.youtube.com/@CodeWithHarry', replace: 'https://www.cloudflare.com/learning/network-layer/internet-protocol/' },
];

nonWatchFixes.forEach(fix => {
  let content = fs.readFileSync(fix.file, 'utf8');
  if (content.includes(fix.search)) {
    content = content.replace(fix.search, fix.replace);
    fs.writeFileSync(fix.file, content);
    console.log(`✓ Fixed non-watch URL in ${fix.file}`);
  } else {
    console.warn(`WARN: "${fix.search}" not found in ${fix.file}`);
  }
});

console.log('\nAll fixes applied!');
