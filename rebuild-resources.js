const fs = require('fs');
const path = require('path');

function rebuildResourcesInFile(filePath, platform) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Match the entire topic block to extract topic ID, topic Title, and its resources array
  // We'll parse the file using a regex that finds the title and the resources array
  // A safer way is to find each topic block:
  const topicRegex = /"([^"]+)":\s*{\s*id:\s*"[^"]+",\s*title:\s*"([^"]+)",[\s\S]*?resources:\s*\[([\s\S]*?)\]\n\s*}/g;
  
  const newContent = content.replace(topicRegex, (match, topicId, topicTitle, resourcesInner) => {
    
    const enc = encodeURIComponent(topicTitle);
    let offUrl = `https://developer.mozilla.org/en-US/search?q=${enc}`;
    if (platform === 'android') offUrl = `https://developer.android.com/s/results?q=${enc}`;
    if (platform === 'ios') offUrl = `https://developer.apple.com/search/?q=${enc}`;
    if (platform === 'mobile') offUrl = `https://reactnative.dev/search?q=${enc}`;

    const newResources = `resources: [
            { id: "${topicId}-1", title: "${topicTitle} Official Docs", type: "official", url: "${offUrl}" },
            { id: "${topicId}-2", title: "${topicTitle} Full Course", type: "video_en", url: "https://www.youtube.com/results?search_query=${enc}+tutorial" },
            { id: "${topicId}-3", title: "${topicTitle} Tutorial in Hindi", type: "video_hi", url: "https://www.youtube.com/results?search_query=${enc}+in+hindi" },
            { id: "${topicId}-4", title: "Understanding ${topicTitle}", type: "article", url: "https://medium.com/search?q=${enc}" },
            { id: "${topicId}-5", title: "${topicTitle} Examples", type: "github", url: "https://github.com/search?q=${enc}" },
            { id: "${topicId}-6", title: "${topicTitle} Cheat Sheet", type: "cheat_sheet", url: "https://www.google.com/search?q=${enc}+cheat+sheet" },
            { id: "${topicId}-7", title: "Deep Dive into ${topicTitle}", type: "deep_dive", url: "https://dev.to/search?q=${enc}" }
        ]
    }`;
    
    // Replace the old resources block with the new one
    // But since our regex matched the trailing bracket of the resources and the closing brace of the topic, we replace that part.
    // Actually, let's just replace `resources: [...]` inside this match.
    
    const blockRegex = /resources:\s*\[([\s\S]*?)\]\n\s*}/;
    return match.replace(blockRegex, newResources);
  });

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Rebuilt resources in ${filePath}`);
}

rebuildResourcesInFile(path.join(__dirname, 'src/data/content/android/topics.ts'), 'android');
rebuildResourcesInFile(path.join(__dirname, 'src/data/content/mobile/topics.ts'), 'mobile');
rebuildResourcesInFile(path.join(__dirname, 'src/data/content/ios/topics.ts'), 'ios');
