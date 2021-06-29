import React from "react";
import Todo from "../Todo";
import { useAppSelector } from "../../redux/reduxTypedHooks";

const TodoList: React.FC = () => {
  const todoList = useAppSelector((state) => state.todos.todoList);

  console.log(todoList);

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <Todo data={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
