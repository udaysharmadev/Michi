const fs = require('fs');
const path = require('path');

// YouTube video IDs are exactly 11 characters (alphanumeric + _ -)
const urlRegex = /watch\?v=([A-Za-z0-9_-]+)/g;

const files = [
  'src/data/content/frontend/topics.ts',
  'src/data/content/backend/topics.ts',
  'src/data/content/fullstack/topics.ts',
  'src/data/content/mobile/topics.ts',
  'src/data/content/android/topics.ts',
  'src/data/content/ios/topics.ts',
  'src/data/content/devops/topics.ts',
  'src/data/content/cloud/topics.ts',
  'src/data/content/ai-engineer/topics.ts',
  'src/data/content/cyber-security/topics.ts',
  'src/data/content/blockchain/topics.ts',
  'src/data/content/game/topics.ts',
  'src/data/content/machine-learning/topics.ts',
  'src/data/content/system-design/topics.ts',
];

const broken = [];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    let match;
    urlRegex.lastIndex = 0;
    while ((match = urlRegex.exec(line)) !== null) {
      const videoId = match[1];
      if (videoId.length !== 11) {
        broken.push({ file, line: idx + 1, videoId, fullLine: line.trim() });
      }
    }
  });
});

console.log(`Found ${broken.length} broken video IDs:\n`);
broken.forEach(b => {
  console.log(`${b.file}:${b.line}: ID="${b.videoId}" (len=${b.videoId.length})`);
  console.log(`  -> ${b.fullLine.substring(0, 120)}`);
  console.log();
});
