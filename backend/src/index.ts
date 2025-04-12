import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", AuthRouter);

app.listen(8000, () => {
  console.log("Server is running on Port: 8000");
});
