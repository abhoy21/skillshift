import { Response, Router } from "express";
import { AuthReqProps, InterviewsSchema } from "../types/types";
import { prisma } from "../prisma";
import { createUserPrompt } from "../gemini/prompt";
import run from "../gemini";

const router: Router = Router();

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

    const geminiResponse = await run({ prompt });

    // const newInterview = await prisma.interviews.create({
    //   data: {
    //     role,
    //     level,
    //     type,
    //     techstack,
    //     questions,
    //     User: {
    //       connect: {
    //         id: userId,
    //       },
    //     },
    //   },
    // });

    console.log(geminiResponse);
    res
      .status(200)
      .json({ message: "Questions generated successfully", geminiResponse });
  } catch (error) {
    res.status(500).json({ message: "Error generating agent" });
  }
});

export default router;
