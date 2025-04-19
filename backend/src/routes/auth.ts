import { Request, Response, Router } from "express";
import { SignInSchema, SignUpSchema } from "../types/types";

import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma";

const router: Router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const validation = SignUpSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({ message: "Invalid data" });
      return;
    }

    const { name, email, password, profilePicture, resume } = validation.data;
    const existing_user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existing_user) {
      res.status(400).json({ message: "User already exists", existing_user });
      return;
    }

    const hashed_password = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed_password,
        name,
        profilePicture,
        resume,
      },
      select: {
        id: true,
        email: true,
        name: true,
        profilePicture: true,
        resume: true,
      },
    });

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error signing up user!, please try again" });
  }
});

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const validation = SignInSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({ message: "Invalid data" });
      return;
    }

    const { email, password } = validation.data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res
      .status(201)
      .json({ message: "User signed in successfully", token: jwtToken });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error signing in user!, please try again" });
  }
});

export default router;
