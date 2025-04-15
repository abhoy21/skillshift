import { Response, Router } from "express";
import { AuthReqProps } from "../types/types";
import prisma from "../prisma";

const router: Router = Router();

router.get("/get-user-details", async (req: AuthReqProps, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const user_details = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profilePicture: true,
        resume: true,
      },
    });

    if (!user_details) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User found", user: user_details });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details" });
  }
});

export default router;
