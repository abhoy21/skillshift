import { Response, Router } from "express";
import { AuthReqProps } from "../types/types";
import prisma from "../prisma";
import { feedbackRun } from "../gemini";

const router: Router = Router();

router.get("/get-interviews", async (req: AuthReqProps, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const interviews = await prisma.interviews.findMany({
      where: {
        creatorId: userId,
      },
      select: {
        id: true,
        creatorId: true,
        role: true,
        type: true,
        techstack: true,
        level: true,
        questions: true,
        finalized: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!interviews) {
      res.status(404).json({ message: "No interviews found" });
      return;
    }

    res.status(200).json({ message: "Interviews found", interviews });
  } catch (error) {
    res.status(500).json({ message: "Error fetching interviews" });
  }
});

router.get("/get-all-interviews", async (req: AuthReqProps, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const interviews = await prisma.interviews.findMany({
      where: {
        finalized: true,
        creatorId: { not: userId },
      },
      select: {
        id: true,
        creatorId: true,
        role: true,
        type: true,
        techstack: true,
        level: true,
        questions: true,
        finalized: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });

    if (!interviews) {
      res.status(404).json({ message: "No interviews found" });
      return;
    }

    res.status(200).json({ message: "Interviews found", interviews });
  } catch (error) {
    res.status(500).json({ message: "Error fetching interviews" });
  }
});

router.get("/get-interview-id", async (req: AuthReqProps, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const interviewId = req.query.interviewId as string;

    const interview = await prisma.interviews.findMany({
      where: {
        creatorId: userId,
        id: interviewId,
      },
      select: {
        id: true,
        creatorId: true,
        role: true,
        type: true,
        techstack: true,
        level: true,
        questions: true,
        finalized: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });

    if (!interview) {
      res.status(404).json({ message: "No interviews found" });
      return;
    }

    res.status(200).json({ message: "Interviews found", interview });
  } catch (error) {
    res.status(500).json({ message: "Error fetching interviews" });
  }
});

router.post("/create-feedback", async (req: AuthReqProps, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const [interviewId, transcript] = req.body;
    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `- ${sentence.role}: ${sentence.content}\n`
      )
      .join("");

    const response = await feedbackRun({ prompt: formattedTranscript });

    let feedbackData;
    try {
      feedbackData = JSON.parse(response as string);
    } catch (error) {
      throw new Error("Invalid feedback response format");
    }

    const feedback = await prisma.feedback.create({
      data: {
        totalScore: feedbackData.totalScore,
        categoryScores: feedbackData.categoryScores,
        strengths: feedbackData.strengths,
        areasForImprovement: feedbackData.areasForImprovement,
        finalAssessment: feedbackData.finalAssessment,
        interviewId,
        intervieweeId: userId,
      },
      select: {
        id: true,
        totalScore: true,
        categoryScores: true,
        strengths: true,
        areasForImprovement: true,
        finalAssessment: true,
        createdAt: true,
      },
    });

    res
      .status(201)
      .json({ message: "Feedback created successfully", feedback });
  } catch (error) {
    res.status(500).json({ message: "Error creating feedback" });
  }
});

router.get(
  "/get-interview-feedback",
  async (req: AuthReqProps, res: Response) => {
    try {
      const userId = req.userId;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const interviewId = req.query.interviewId as string;

      if (!interviewId) {
        res.status(400).json({ message: "No interview id provided" });
        return;
      }

      const response = await prisma.feedback.findFirst({
        where: {
          intervieweeId: userId,
          interviewId: interviewId,
        },
        select: {
          id: true,
          totalScore: true,
          categoryScores: true,
          strengths: true,
          areasForImprovement: true,
          finalAssessment: true,
          createdAt: true,
        },
      });

      if (!response) {
        res.status(404).json({ message: "No feedback found" });
        return;
      }
      res.status(200).json({ message: "Feedback found", feedback: response });
    } catch (error) {
      res.status(500).json({ message: "Error fetching interviews" });
    }
  }
);

export default router;
