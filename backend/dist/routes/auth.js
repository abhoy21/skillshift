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
const prisma_1 = require("../prisma");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = types_1.SignUpSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ message: "Invalid data" });
            return;
        }
        const { name, email, password, profilePicture, resume } = validation.data;
        const existing_user = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (existing_user) {
            res.status(400).json({ message: "User already exists", existing_user });
            return;
        }
        const hashed_password = yield (0, bcrypt_1.hash)(password, 10);
        const user = yield prisma_1.prisma.user.create({
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
    }
    catch (error) {
        res
            .status(400)
            .json({ message: "Error signing up user!, please try again" });
    }
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = types_1.SignInSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ message: "Invalid data" });
            return;
        }
        const { email, password } = validation.data;
        const user = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }
        const isPasswordCorrect = yield (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Incorrect password" });
            return;
        }
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const jwtToken = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET);
        res
            .status(200)
            .json({ message: "User signed in successfully", token: jwtToken });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: "Error signing in user!, please try again" });
    }
}));
exports.default = router;
