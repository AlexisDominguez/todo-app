import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../../redux/reduxTypedHooks";
import { addTodo } from "../../redux/todos/todos.actions";

const AddNewTodoForm: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSetNewTodo = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTodo(event.target.value);
  };

  const handleAddNewTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (todo) {
      // Initial todo status
      const newTodo = {
        _id: "1",
        date: new Date(),
        status: "new",
        value: todo,
      };

      dispatch(addTodo(newTodo));

      setTodo("");
    }
  };

  // TODO: In the form, add components that allow select a date for the new To do.
  return (
    <div className="d-flex flex-column mt-3">
      <form
        className="d-flex flex-column align-items-end"
        onSubmit={handleAddNewTodo}
      >
        <TextField
          value={todo}
          onChange={handleSetNewTodo}
          label="Write here your new TO DO ✅"
          className="mb-2"
          fullWidth
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className="mt-2"
          style={{ maxWidth: "200px" }}
        >
          Add new todo
        </Button>
      </form>
    </div>
  );
};

export default AddNewTodoForm;
