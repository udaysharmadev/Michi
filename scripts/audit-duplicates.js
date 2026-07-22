const fs = require('fs');

// Find topics where video_en and video_hi URLs are identical (both need different URLs)
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

let duplicateCount = 0;
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length - 5; i++) {
    const l1 = lines[i];
    const l2 = lines[i+1];
    const l3 = lines[i+2];
    const l4 = lines[i+3];
    const l5 = lines[i+4];
    const l6 = lines[i+5];
    
    // Look for video_en block followed immediately by video_hi block with same URL
    if (l1.includes('"video_en"') || l1.includes("'video_en'")) {
      // Find the URL on same or next line
      const urlMatch = (l1 + l2).match(/watch\?v=([A-Za-z0-9_-]{11})/);
      if (urlMatch) {
        const enId = urlMatch[1];
        // Look ahead for video_hi with same ID in next 8 lines
        for (let j = i+1; j < Math.min(i+8, lines.length); j++) {
          if ((lines[j].includes('"video_hi"') || lines[j].includes("'video_hi'")) && 
              (lines[j] + (lines[j+1]||'')).includes(enId)) {
            console.log(`DUPLICATE: ${file}:${i+1} (EN) and ${j+1} (HI) both use ${enId}`);
            duplicateCount++;
            break;
          }
        }
      }
    }
  }
});

console.log(`\nTotal duplicate EN/HI pairs: ${duplicateCount}`);
