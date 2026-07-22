const { Project, SyntaxKind } = require('ts-morph');
const ytSearch = require('yt-search');
const fs = require('fs');
const path = require('path');

const roadmaps = [
  "frontend", "backend", "fullstack", "mobile", "android", "ios", 
  "devops", "cloud", "ai-engineer", "cyber-security", "blockchain", 
  "game", "machine-learning", "system-design"
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const cacheFile = path.join(__dirname, 'yt-cache.json');
let cache = {};
if (fs.existsSync(cacheFile)) {
  cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
}

function saveCache() {
  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
}

async function searchVideo(query) {
  if (cache[query]) return cache[query];
  
  try {
    const r = await ytSearch(query);
    const videos = r.videos;
    if (videos && videos.length > 0) {
      const result = {
        title: videos[0].title,
        url: videos[0].url
      };
      cache[query] = result;
      saveCache();
      return result;
    }
  } catch (e) {
    console.error(`Error searching for ${query}:`, e.message);
  }
  
  await sleep(100);
  return null;
}

async function main() {
  const project = new Project();
  
  for (const roadmap of roadmaps) {
    console.log(`\n\n--- Processing Roadmap: ${roadmap} ---`);
    const filePath = path.join(__dirname, `../src/data/content/${roadmap}/topics.ts`);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${roadmap}, file not found.`);
      continue;
    }
    
    const sourceFile = project.addSourceFileAtPath(filePath);
    
    // Find the exported object literal
    const varStatements = sourceFile.getVariableStatements();
    let topicsDecl = null;
    for (const stmt of varStatements) {
      if (stmt.isExported()) {
        const decls = stmt.getDeclarations();
        if (decls.length > 0) {
          const init = decls[0].getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
          if (init) {
            topicsDecl = decls[0];
            break;
          }
        }
      }
    }

    if (!topicsDecl) {
      console.log(`No exported object variable found in ${roadmap}`);
      continue;
    }
    
    const initializer = topicsDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    let hasChanges = false;
    const properties = initializer.getProperties();
    
    for (const prop of properties) {
      if (prop.getKind() === SyntaxKind.PropertyAssignment) {
        const topicId = prop.getName();
        const topicObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (!topicObj) continue;
        
        let topicTitle = "";
        const titleProp = topicObj.getProperty('title') || topicObj.getProperty('"title"'); // Sometimes it's quoted
        if (titleProp && titleProp.getKind() === SyntaxKind.PropertyAssignment) {
          const init = titleProp.getInitializer();
          if (init && init.getKind() === SyntaxKind.StringLiteral) {
            topicTitle = init.getLiteralValue();
          }
        }
        
        const resourcesProp = topicObj.getProperty('resources') || topicObj.getProperty('"resources"');
        if (resourcesProp && resourcesProp.getKind() === SyntaxKind.PropertyAssignment) {
          const resArray = resourcesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
          if (resArray) {
            const elements = resArray.getElements();
            
            for (const elem of elements) {
              if (elem.getKind() === SyntaxKind.ObjectLiteralExpression) {
                const typeProp = elem.getProperty('type') || elem.getProperty('"type"');
                if (typeProp && typeProp.getKind() === SyntaxKind.PropertyAssignment) {
                  const typeInit = typeProp.getInitializer();
                  if (typeInit && typeInit.getKind() === SyntaxKind.StringLiteral) {
                    const resType = typeInit.getLiteralValue();
                    
                    if (resType === 'video_en' || resType === 'video' || resType === 'video_hi') {
                      const lang = (resType === 'video_hi') ? 'hindi' : 'english';
                      const query = `${roadmap.replace('-', ' ')} ${topicTitle} tutorial ${lang}`;
                      
                      const videoResult = await searchVideo(query);
                      if (videoResult) {
                        // Update URL
                        const urlProp = elem.getProperty('url') || elem.getProperty('"url"');
                        if (urlProp && urlProp.getKind() === SyntaxKind.PropertyAssignment) {
                          urlProp.setInitializer(`"${videoResult.url}"`);
                          hasChanges = true;
                        } else {
                          elem.addPropertyAssignment({ name: 'url', initializer: `"${videoResult.url}"` });
                          hasChanges = true;
                        }
                        
                        // Update Title
                        const titleP = elem.getProperty('title') || elem.getProperty('"title"');
                        if (titleP && titleP.getKind() === SyntaxKind.PropertyAssignment) {
                          const safeTitle = videoResult.title.replace(/"/g, '\\"');
                          titleP.setInitializer(`"${safeTitle}"`);
                        }
                        
                        // Also make sure the type is valid if it was 'video'
                        if (resType === 'video') {
                          typeProp.setInitializer(`"video_en"`);
                        }
                        
                        console.log(`[${roadmap}] Updated ${topicId} (${lang}) -> ${videoResult.url}`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
    if (hasChanges) {
      await sourceFile.save();
      console.log(`Saved changes to ${roadmap}/topics.ts`);
    } else {
      console.log(`No changes needed for ${roadmap}/topics.ts`);
    }
  }
}

main().catch(console.error);
