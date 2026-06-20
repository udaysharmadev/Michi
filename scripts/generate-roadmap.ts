// scripts/generate-roadmap.ts
/**
 * Roadmap Content Generation Pipeline
 * 
 * Run this script to generate deep knowledge content for a roadmap.
 * Usage:
 *   export GEMINI_API_KEY="your-api-key"
 *   npx ts-node scripts/generate-roadmap.ts
 */

import fs from "fs";
import path from "path";

// Define the schema required by the platform
const SYSTEM_PROMPT = `You are a Principal Curriculum Architect. 
Generate a JSON dictionary of topics for a developer roadmap.
The output MUST be a valid JSON object where keys are node IDs and values match this interface:

interface TopicData {
  slug: string;
  whyLearnThis: string;
  whenIsItUsed: string;
  whereIsItUsed: string;
  whatComesNext: string;
  learningOutcomes: string[];
  commonMistakes: string[];
  realWorldApplications: string[];
  resources: Array<{
    type: 'official' | 'video_en' | 'video_hi' | 'article' | 'github' | 'practice';
    title: string;
    url: string;
  }>;
}

Constraints:
1. Do NOT generate placeholder text. Be deeply technical.
2. Provide at least one English video and one Hindi video per topic (use realistic high quality YouTube links).
3. Provide an official documentation link.
4. Keep learningOutcomes concise (3-4 points).
5. Output ONLY valid JSON, no markdown codeblocks.
`;

async function generateTopicsForNodes(roadmapSlug: string, nodesList: string[]) {
  console.log(`Starting generation for roadmap: ${roadmapSlug}`);
  
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Please set GEMINI_API_KEY environment variable.");
    process.exit(1);
  }

  // Example: Calling Gemini Pro via REST
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
  const prompt = `Generate the dictionary for the following topics belonging to the ${roadmapSlug} roadmap: \n\n${nodesList.join("\n")}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }]}
      })
    });

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) throw new Error("No text returned from API");
    
    // Parse the JSON output (stripping any accidental markdown)
    const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const dictionary = JSON.parse(cleanJson);
    
    // Save to src/data/content/{slug}/topics.generated.ts
    const outputDir = path.join(process.cwd(), "src", "data", "content", roadmapSlug);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputPath = path.join(outputDir, "topics.ts");
    const fileContent = `import { TopicData } from "@/data/types";\n\nexport const ${roadmapSlug}Topics: Record<string, Partial<TopicData>> = ${JSON.stringify(dictionary, null, 2)};\n`;
    
    fs.writeFileSync(outputPath, fileContent);
    console.log(`✅ Generated ${Object.keys(dictionary).length} topics and saved to ${outputPath}`);

  } catch (error) {
    console.error("Generation failed:", error);
  }
}

// --- Example Execution ---
// Replace this array with the actual nodes from your graph.ts files
const exampleNodes = ["n_react_1 (React Hooks)", "n_react_2 (Context API)", "n_react_3 (React Router)"];
// generateTopicsForNodes("react", exampleNodes);
