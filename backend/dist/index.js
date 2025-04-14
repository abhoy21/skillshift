"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const middleware_1 = require("./middleware");
const user_1 = __importDefault(require("./routes/user"));
const agent_1 = __importDefault(require("./routes/agent"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("This Works!");
});
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/user", middleware_1.AuthMiddleware, user_1.default);
app.use("/api/v1/agent", middleware_1.AuthMiddleware, agent_1.default);
app.listen(8000, () => {
    console.log("Server is running on Port: 8000");
});
