import { ADD, REMOVE } from "./todos.types";

export interface ITodo {
  date: Date | string;
  value: string | number;
  status: string;
  _id: string;
}

interface IReduxTodoState {
  todoList: ITodo[];
}

const INITIAL_STATE: IReduxTodoState = {
  todoList: [],
};

const reducer = (state = INITIAL_STATE, action: any): IReduxTodoState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todoList: action.payload,
      };

    case REMOVE:
      return {
        ...state,
        todoList: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
