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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = run;
const genai_1 = require("@google/genai");
const prompt_1 = require("./prompt");
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new genai_1.GoogleGenAI({ apiKey: apiKey });
function run(_a) {
    return __awaiter(this, arguments, void 0, function* ({ prompt }) {
        const response = yield genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
            config: {
                systemInstruction: prompt_1.systemPrompt,
                maxOutputTokens: 1000,
                temperature: 0.5,
            },
        });
        return response.text;
    });
}
