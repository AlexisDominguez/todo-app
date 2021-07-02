import { model, Schema, Model, Document } from "mongoose";

interface ITodoStatus extends Document {
  _id: string;
  code: string;
  name: string;
}

const TodoStatusSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const TodoStatusModel: Model<ITodoStatus> = model(
  "TodoStatus",
  TodoStatusSchema,
  "todos_status"
);

export { TodoStatusModel, ITodoStatus };
