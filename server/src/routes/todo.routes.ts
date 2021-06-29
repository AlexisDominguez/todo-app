import { Router } from "express";
import { getTodoList, addNewTodo } from "../controllers/todo.controller";

const router = Router();

router.get("/todo-list", getTodoList);
router.post("/todo-list", addNewTodo);

export { router as todoRoutes };
