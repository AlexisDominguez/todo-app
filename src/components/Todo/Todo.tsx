import React from "react";
import { ITodo as ITodoType } from "../../redux/todos/todos.reducer";

interface ITodo {
  data: ITodoType;
}

const Todo: React.FC<ITodo> = ({ data }) => {
  return <div className="border-bottom py-2">{data.value}</div>;
};

export default Todo;
