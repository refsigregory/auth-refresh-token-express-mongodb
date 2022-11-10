import express from "express";
import dotenv from "dotenv";
import authRoutes from "../../routes/auth.routes.js";
import userRoutes from "../../routes/users.routes.js";

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;