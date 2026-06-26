const fs = require('fs');
const path = require('path');

const targetTypes = [
  'official',
  'video_en',
  'video_hi',
  'article',
  'github',
  'cheat_sheet',
  'deep_dive'
];

function fixResourcesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all resources arrays
  const resourcesRegex = /resources:\s*\[([\s\S]*?)\]/g;
  
  const newContent = content.replace(resourcesRegex, (match, innerContent) => {
    // innerContent contains the 7 resources. We will replace the type: "..." in order.
    let typeIndex = 0;
    const replacedInner = innerContent.replace(/type:\s*"[^"]+"/g, (typeMatch) => {
      if (typeIndex < targetTypes.length) {
        const newType = targetTypes[typeIndex];
        typeIndex++;
        return `type: "${newType}"`;
      }
      return typeMatch; // Fallback if more than 7, though we expect exactly 7
    });
    return `resources: [${replacedInner}]`;
  });

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Fixed resources in ${filePath}`);
}

const filesToFix = [
  path.join(__dirname, 'src/data/content/android/topics.ts'),
  path.join(__dirname, 'src/data/content/mobile/topics.ts'),
  path.join(__dirname, 'src/data/content/ios/topics.ts')
];

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    fixResourcesInFile(file);
  } else {
    console.log(`File not found: ${file}`);
  }
}
