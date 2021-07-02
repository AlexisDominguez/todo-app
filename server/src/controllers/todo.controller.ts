import { Request, Response } from "express";
import { TodoModel } from "../models/todo.model";
import { TODO_STATUS_NEW } from "../config";

export const getTodoList = (req: Request, res: Response) => {
  res.send("Hello World from controller");
};

export const addNewTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { body } = req;

  const response = await TodoModel.create({
    ...body,
    status: body.status || TODO_STATUS_NEW,
  });

  console.log(response);

  res.send("LLAMADA RECIBIDA");
};
