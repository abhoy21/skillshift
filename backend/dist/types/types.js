"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewsSchema = exports.SignInSchema = exports.SignUpSchema = void 0;
const zod_1 = require("zod");
exports.SignUpSchema = zod_1.z.object({
    name: zod_1.z.string().min(5).max(20),
    email: zod_1.z.string().email("Invalid email"),
    password: zod_1.z
        .string()
        .min(8, "password must be at least 8 characters long")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    profilePicture: zod_1.z
        .string()
        .url("Please provide a valid URL for the profile picture")
        .optional(),
    resume: zod_1.z
        .string()
        .url("Please provide a valid URL for the resume")
        .optional(),
});
exports.SignInSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email"),
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
});
exports.InterviewsSchema = zod_1.z.object({
    role: zod_1.z.string(),
    level: zod_1.z.string(),
    type: zod_1.z.string(),
    techstack: zod_1.z.array(zod_1.z.string()),
    questions: zod_1.z.string(),
});
