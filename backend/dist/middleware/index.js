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
exports.AuthMiddleware = AuthMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
function AuthMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
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
                const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
                req.userId = decoded.id;
                next();
            }
            catch (error) {
                res.status(401).json({ message: "Unauthorized" });
                return;
            }
        }
        catch (error) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
    });
}
