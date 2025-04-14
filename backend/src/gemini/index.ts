import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "./prompt";

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenAI({ apiKey: apiKey! });

export default async function run({ prompt }: { prompt: string }) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: systemPrompt,
      maxOutputTokens: 1000,
      temperature: 0.5,
    },
  });

  return response.text;
}
