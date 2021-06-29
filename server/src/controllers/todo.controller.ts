import { Request, Response } from "express";

export const getTodoList = (req: Request, res: Response) => {
  res.send("Hello World from controller");
};

export const addNewTodo = (req: Request, res: Response) => {
  console.log(req.body);

  res.send("LLAMADA RECIBIDA");
};
