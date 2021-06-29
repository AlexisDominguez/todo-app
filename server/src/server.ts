import express from "express";
import helmet from "helmet";
import cors from "cors";
import { todoRoutes } from "./routes/todo.routes";

const app = express();

// Default middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// API
app.use(todoRoutes);

export default app;
