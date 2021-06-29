import { ADD, REMOVE } from "./todos.types";
import store from "../store";
import { ITodo } from "./todos.reducer";

export const addTodo = (newTodo: ITodo) => {
  const todoList = store.getState().todos.todoList;

  return {
    type: ADD,
    payload: [...todoList, newTodo],
  };
};

export const removeTodo = (todoIdToRemove: string) => {
  const todoList = store.getState().todos.todoList;

  const newTodoList = todoList.filter((todo) => todo._id !== todoIdToRemove);

  return {
    type: REMOVE,
    payload: newTodoList,
  };
};
