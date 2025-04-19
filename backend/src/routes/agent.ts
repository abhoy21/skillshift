import { Response, Router } from "express";
import { AuthReqProps, InterviewsSchema } from "../types/types";

import { createUserPrompt } from "../gemini/prompt";
import { run } from "../gemini";
import prisma from "../prisma";

const router: Router = Router();

function parseGeminiResponse(response: string): string[] {
  try {
    const cleanedResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    return JSON.parse(cleanedResponse) as string[];
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Invalid response format from Gemini API");
  }
}

router.get("/checkpoint", async (req: AuthReqProps, res: Response) => {
  try {
    res.status(200).json({ message: "Endpoint up and running" });
  } catch (error) {
    res.status(500).json({ message: "Error checking checkpoint" });
  }
});

router.post("/generate", async (req: AuthReqProps, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const validation = await InterviewsSchema.safeParseAsync(req.body);

    if (!validation.success) {
      res.status(400).json({ message: "Invalid request body" });
      return;
    }

    const { role, level, type, techstack, questions } = validation.data;

    const prompt = createUserPrompt({
      role,
      level,
      techstack,
      type,
      questions,
    });

    const rawResponse = await run({ prompt });
    if (!rawResponse) {
      throw new Error("No response received from Gemini API");
    }
    const parsedQuestions = parseGeminiResponse(rawResponse);

    const newInterview = await prisma.interviews.create({
      data: {
        role,
        level,
        type,
        techstack,
        questions: parsedQuestions,
        finalized: true,
        creator: {
          connect: {
            id: userId,
          },
        },
      },
    });

    res.status(200).json({
      message: "Questions generated successfully",
      data: newInterview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating questions" });
  }
});

export default router;
