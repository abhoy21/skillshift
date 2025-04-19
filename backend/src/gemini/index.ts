import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "./prompt";
import { systemPromptFeedback } from "./feedback-prompt";

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenAI({ apiKey: apiKey! });

export async function run({ prompt }: { prompt: string }) {
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

export async function feedbackRun({ prompt }: { prompt: string }) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: systemPromptFeedback,
      maxOutputTokens: 1000,
      temperature: 0.5,
    },
  });

  return response.text;
}
