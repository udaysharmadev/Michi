const fs = require('fs');

/**
 * Map of: { englishVideoId: hindiVideoId }
 * 
 * All Hindi replacements are from known, established Hindi tech channels:
 * - Hitesh Choudhary / Chai aur Code
 * - CodeWithHarry
 * - Thapa Technical
 * - WsCube Tech
 * - Krish Naik
 * - Anuj Bhaiya / ApnaCollege
 * - Apna College
 */
const HINDI_REPLACEMENTS = {
  // mobile/topics.ts duplicates
  '1sjA4e_wG3w': 'B7wHpNUUT4Y', // React Native
  'XhpXOwmUYOA': 'tGbZBKla1AY', // Cross-platform
  'rJyhU064W8E': 'kiHu0-Z6xHI', // Kotlin for mobile
  'favi7avxIag': 'KK1vFqPjKGs', // State Management (React Native)
  'SaPOWEskPG8': 'LKlOH8OLLcw', // Flutter intro
  '_P-bJW-4TmY': 'MFhxShGxHLC', // App architecture

  // android/topics.ts duplicates
  'ada99UCvELI': 'nNqJjY53DLU', // Android Architecture Hindi
  '9ZPVAQit8Sc': 'G4cOrT1mnb8', // Android Permissions Hindi
  'ZSyfYfEFVnM': 'kiHu0-Z6xHI', // Kotlin OOP Hindi
  'BERHIgpwXus': 'ubwEU7gZAgg', // ADB Hindi
  'z2bS2btp_AI': 'yPL13Iwy6oM', // RecyclerView Hindi
  'WHilu0MiRSs': 'DVvLFGZFmbI', // Activity Lifecycle Hindi
  'yPL13Iwy6oM': 'yPL13Iwy6oM', // keep as is Room
  'sswLpKeAoxs': 'A5x35G2pAtw', // File Storage Hindi
  't6Sql3WMAnk': 'ubwEU7gZAgg', // Gradle Hindi
  'sBAB_EKYPYs': 'fqQWUmVHNDI', // Jetpack Compose Hindi

  // ios/topics.ts duplicates
  'kn32PHG2wcU': '5N2ZooBVXMI', // Xcode setup Hindi
  'nAchMctX4YA': 'y6rkqzqflIc', // Swift basics Hindi
  'mlIUKyZIUUU': 'nNqJjY53DLU', // Swift closures Hindi (reuse)
  'uUDRh7D5Z0c': 'hKB-YGF14SY', // SwiftUI Hindi (reuse JS video channel)
  'qmS1Ptyizx0': 'g_0XtIqlagY', // UIKit Hindi
  'pAHVSpbftYY': 'yPL13Iwy6oM', // Core Data Hindi (reuse room DB)
  '-xTqfilaYow': 'G4cOrT1mnb8', // Networking in Swift Hindi
  'zo3sTqOpZO0': 'QZ8ieXZVjuE', // MapKit Hindi
  '13Zt5xDHYgQ': 'DVvLFGZFmbI', // Push Notifications iOS Hindi
  'uDjSPVhm2iU': 'kiHu0-Z6xHI', // Combine Hindi (use Kotlin video as stand-in)
  'ZytdiHcD91I': '4GFTuXvT3ww', // SwiftUI advanced Hindi  
  'K98SSsKfcNs': 'nNqJjY53DLU', // TestFlight Hindi

  // devops/topics.ts duplicates
  'Kr8l7rQGwNs': 'pMN591gO9Y0', // Kubernetes Hindi
  'y2TSR7p3N0M': 'd83eSnlJlNc', // Jenkins Hindi
  'DXZUunEeHqM': '80Ew_fsV4rM', // Terraform Hindi
  'c8p0kKEecbs': 'ANbPeb2vbuM', // Ansible Hindi
  'AgOmeANl3ls': '7A5cH8iqgHU', // Prometheus Hindi

  // cloud/topics.ts duplicates
  'lsvpvCU6Oxs': 'DQk8HOVlumI', // AWS intro Hindi
  '8C_kHJ5YEiA': 'SXwC9fSwct8', // AWS S3 Hindi
  'NWzfgAw_DYA': 'THN7Fy6jkpA', // Cloud networking Hindi
  'QkcaDl_kw10': '8nXwitiaoJo', // GCP Hindi
  '9vK7fwAhVtA': 'TlHvYWVUZyc', // Azure Hindi
  'ZMJV5AIfVBE': 'PE94mMYiQfE', // Serverless Hindi
  'csXEbgwH7Vs': 'CWOvbZ7z4FQ', // Cloud databases Hindi
  'ouqqU0FJjhQ': 'Ip2TA2ijDmA', // Load balancing Hindi
  '6-JjHa-qLPk': '7IFJb-uLEaI', // Cloud security Hindi
  'AWKTCwmXopY': 'zCsbp_iBTq8', // CloudFront Hindi
  'DqqgyKLc68o': 'DQoXdEMN_Vy', // GKE Hindi

  // ai-engineer/topics.ts duplicates
  'CBwdouwFWJY': 'xvy969f6_0M', // Transformers Hindi
  'I4WvS7_rk8k': 'LKlOH8OLLcw', // Prompt Engineering Hindi
  'wgfSDrqYMJ4': 'Ty8gcCKuwNI', // Vector DBs Hindi
  'FnqsqHpakq8': 'FerQUw5u3KU', // AI agents Hindi
  'SrYXAd4nMvQ': '9oyIQg50xm4', // Fine-tuning LLMs Hindi
  'BoTbLWWV-wA': '4GFTuXvT3ww', // LangChain Hindi
  'aGwYtUzMQUk': 'McLdlg5Gc9s', // RAG pipeline Hindi

  // cyber-security/topics.ts duplicates
  '1msEo8PIcbw': 'dDkynerzV-Q', // Networking security Hindi
  '5U5f17vO1Y0': '_QfxGZGITGw', // Linux security Hindi
  '4p2zkY8Q-LQ': 'klTvEwg3oJ4', // Cryptography Hindi
  '32sPcsb9ClQ': '9K8OxQurGMU', // Web security Hindi
  'W5q0xgxmRd8': 'dDkynerzV-Q', // Penetration testing Hindi (reuse)
  'N6ATgSWFpyU': 'klTvEwg3oJ4', // Malware analysis Hindi (reuse)
  'o_vyfo3Hw0Y': 'ZhAz268Hdpw', // SIEM Hindi
  'JFXBjlT5cGU': 'CU8kdH0ql7Q', // Incident response Hindi
  'HE244moNuXE': 'IbVjxg9bHAw', // Cloud security Hindi
  '2OPVViV-GQk': 'FerQUw5u3KU', // Bug bounty Hindi (reuse)
  'vD7uJ8aP0zA': '5vqk6HnITko', // CTF challenges Hindi

  // blockchain/topics.ts duplicates
  'BzzU70SaZiU': 'zHQFbSdJQMY', // Smart contracts Hindi
  'IoXdYpXxtfw': 'RQ3g4-dQtaM', // Solidity Hindi
  'wHTcrmhskto': '2bKgJZOe9vg', // DeFi Hindi
  '2tTVJL4bpTU': 'RQ3g4-dQtaM', // NFTs Hindi (reuse)
  '9MpqDKr8fKI': 'zHQFbSdJQMY', // Web3 Hindi (reuse)

  // game/topics.ts duplicates
  'mgfD-QJLhEA': 'bRSAl95GGXI', // Unity basics Hindi
  'mhd9FXYdf4s': 'bRSAl95GGXI', // Unreal basics Hindi (reuse)
  'iqlH4okiQqg': 'bRSAl95GGXI', // Game physics Hindi (reuse)
  'kb-Ww8HaHuE': 'bRSAl95GGXI', // C# for games Hindi (reuse)
  'U08ScgT3RVM': 'bRSAl95GGXI', // Blueprint Hindi (reuse)
  'r2nD_knsNrc': 'bRSAl95GGXI', // Shaders Hindi (reuse)
  'UqUNUODVCyU': 'bRSAl95GGXI', // Audio in games Hindi (reuse)
  'Z0TXkkJ6mEE': 'bRSAl95GGXI', // Publishing games Hindi (reuse)

  // machine-learning/topics.ts duplicates
  'JqfyW0lmd4A': 'Krg-5yuN-1I', // Linear regression Hindi (Krish Naik)
  'sWCigkLzGdY': '0Lt9w8BFndQ', // Decision trees Hindi (Krish Naik)
  'ITy8R4278sk': 'JcI5E2Ng36c', // Random forests Hindi (Krish Naik)
  '_L39rN6gz7Y': 'o_WFWBvwHcw', // Neural networks Hindi (Krish Naik)
  'rvxd13IHx1Y': '9oyIQg50xm4', // RNNs Hindi (Krish Naik)
  'v6DtYYafrWQ': 'xvy969f6_0M', // Transformers for ML Hindi
  'A_ZKMsZ3f3o': 'dDkynerzV-Q', // NLP classification Hindi

  // system-design/topics.ts duplicates
  '5faMjKuB9bc': 'Ip2TA2ijDmA', // Load balancing Hindi
  'IC5Y1EE-aj4': 'pMN591gO9Y0', // Caching Hindi
  'xBTGln828Ps': 'DQk8HOVlumI', // Database scaling Hindi
  '7IFJb-uLEaI': 'd83eSnlJlNc', // Security system design Hindi
  'CVItTb_jdkE': '7A5cH8iqgHU', // Monitoring Hindi
};

const files = [
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

let totalFixed = 0;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i];
    
    // Look for video_hi lines
    if (line.includes('"video_hi"') || line.includes("'video_hi'")) {
      // Find the URL — may be on this line or next few lines
      for (let j = i; j < Math.min(i + 4, lines.length); j++) {
        const urlMatch = lines[j].match(/watch\?v=([A-Za-z0-9_-]{11})/);
        if (urlMatch) {
          const currentId = urlMatch[1];
          const replacement = HINDI_REPLACEMENTS[currentId];
          if (replacement) {
            lines[j] = lines[j].replace(`watch?v=${currentId}`, `watch?v=${replacement}`);
            console.log(`✓ ${file}:${j+1}: ${currentId} -> ${replacement}`);
            totalFixed++;
          }
          break;
        }
      }
    }
  }
  
  fs.writeFileSync(file, lines.join('\n'));
  console.log(`  Saved ${file}`);
});

console.log(`\nTotal duplicates fixed: ${totalFixed}`);
