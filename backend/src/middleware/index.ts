import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthReqProps } from "../types/types";

const JWT_SECRET = process.env.JWT_SECRET;

export async function AuthMiddleware(
  req: AuthReqProps,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;

    if (!JWT_SECRET) {
      res.status(500).json({ message: "JWT secret not configured" });
      return;
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
      req.userId = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
}
