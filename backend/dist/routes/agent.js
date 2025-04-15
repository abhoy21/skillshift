"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../types/types");
const prompt_1 = require("../gemini/prompt");
const gemini_1 = __importDefault(require("../gemini"));
const prisma_1 = __importDefault(require("../prisma"));
const router = (0, express_1.Router)();
function parseGeminiResponse(response) {
    try {
        const cleanedResponse = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
        return JSON.parse(cleanedResponse);
    }
    catch (error) {
        console.error("Failed to parse Gemini response:", error);
        throw new Error("Invalid response format from Gemini API");
    }
}
router.get("/checkpoint", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: "Endpoint up and running" });
    }
    catch (error) {
        res.status(500).json({ message: "Error checking checkpoint" });
    }
}));
router.post("/generate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const validation = yield types_1.InterviewsSchema.safeParseAsync(req.body);
        if (!validation.success) {
            res.status(400).json({ message: "Invalid request body" });
            return;
        }
        const { role, level, type, techstack, questions } = validation.data;
        const prompt = (0, prompt_1.createUserPrompt)({
            role,
            level,
            techstack,
            type,
            questions,
        });
        const rawResponse = yield (0, gemini_1.default)({ prompt });
        if (!rawResponse) {
            throw new Error("No response received from Gemini API");
        }
        const parsedQuestions = parseGeminiResponse(rawResponse);
        const newInterview = yield prisma_1.default.interviews.create({
            data: {
                role,
                level,
                type,
                techstack,
                questions: parsedQuestions,
                finalized: true,
                User: {
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error generating questions" });
    }
}));
exports.default = router;
