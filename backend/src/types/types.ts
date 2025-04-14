import { Request } from "express";
import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(5).max(20),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  profilePicture: z
    .string()
    .url("Please provide a valid URL for the profile picture")
    .optional(),
  resume: z
    .string()
    .url("Please provide a valid URL for the resume")
    .optional(),
});

export const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const InterviewsSchema = z.object({
  role: z.string(),
  level: z.string(),
  type: z.string(),
  techstack: z.array(z.string()),
  questions: z.string(),
});

export interface AuthReqProps extends Request {
  userId?: string;
}
