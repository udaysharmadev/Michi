import fs from 'fs';
import path from 'path';
import { searchYouTube, searchGoogle } from './verify-resources';

const topicsToEnrich = [
  { id: 'n_int_4', title: "Web Servers & Hosting" },
  { id: 'n_hc_1', title: "HTML Fundamentals" },
  { id: 'n_hc_2', title: "Semantic HTML" },
];

async function enrich() {
  console.log("Starting Enrichment...");
  
  for (const topic of topicsToEnrich) {
    console.log(`\n--- Fetching for: ${topic.title} ---`);
    
    // Official
    const official = await searchGoogle(`${topic.title} MDN official documentation`);
    console.log("OFFICIAL:", official?.url);
    
    // Video EN
    const videoEn = await searchYouTube(`${topic.title} crash course in english traversy media freecodecamp fireship`);
    console.log("VIDEO EN:", videoEn?.url);
    
    // Video HI
    const videoHi = await searchYouTube(`${topic.title} in hindi codewithharry apna college hitesh`);
    console.log("VIDEO HI:", videoHi?.url);
    
    // Article
    const article = await searchGoogle(`${topic.title} comprehensive guide freecodecamp css-tricks dev.to`);
    console.log("ARTICLE:", article?.url);
    
    // GitHub
    const github = await searchGoogle(`site:github.com ${topic.title} tutorial examples`);
    console.log("GITHUB:", github?.url);
    
    // Cheat Sheet
    const cheat = await searchGoogle(`${topic.title} cheat sheet pdf github`);
    console.log("CHEAT SHEET:", cheat?.url);
    
    // Deep Dive
    const deepDive = await searchYouTube(`${topic.title} deep dive advanced`);
    console.log("DEEP DIVE:", deepDive?.url);
  }
}

enrich();
