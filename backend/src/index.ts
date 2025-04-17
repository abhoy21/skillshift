import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth";
import { AuthMiddleware } from "./middleware";
import userRouter from "./routes/user";
import agentRouter from "./routes/agent";
import interviewRouter from "./routes/interview";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This Works!");
});

app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/user", AuthMiddleware, userRouter);
app.use("/api/v1/agent", AuthMiddleware, agentRouter);
app.use("/api/v1/interview", AuthMiddleware, interviewRouter);

app.listen(8000, () => {
  console.log("Server is running on Port: 8000");
});
