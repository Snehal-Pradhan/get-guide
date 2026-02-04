import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI;

try {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing in .env");
  }
  
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
} catch (error) {
  console.error("❌ Gemini API key is missing or invalid.");
  throw error;
}

export async function embed(text: string) {
  const res = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
  });

  if (!res.embeddings || !res.embeddings[0]) {
    throw new Error("Failed to generate embedding");
  }
  return res.embeddings[0].values;
}