
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("Gemini API key is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateBio = async (): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please check server logs.";
  }

  try {
    const prompt = `Write a short, professional, and impressive bio for a graphic designer named Kamel Rahmoun. Highlight creativity, a passion for visual storytelling, and proficiency with modern design tools. Keep it under 60 words and write in the first person.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating bio with Gemini:", error);
    return "Failed to generate bio. The AI may be resting.";
  }
};