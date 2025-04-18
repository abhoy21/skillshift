import { Response, Router } from "express";
import { AuthReqProps } from "../types/types";
import prisma from "../prisma";

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
        userId: userId,
      },
      select: {
        id: true,
        userId: true,
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
        userId: { not: userId },
      },
      select: {
        id: true,
        userId: true,
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
        userId: userId,
        id: interviewId,
      },
      select: {
        id: true,
        userId: true,
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

export default router;
