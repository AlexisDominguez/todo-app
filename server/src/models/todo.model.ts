import { ObjectId } from "mongodb";
import { model, Schema, Document, Model } from "mongoose";

interface ITodo extends Document {
  _id: string;
  createdAt: Date | string;
  status: string;
  value: string | number;
}

// TODO: Define schema for Todos properties and define schema for todos Status
const TodoSchema = new Schema(
  {
    value: {
      type: String,
      require: true,
    },
    status: {
      type: ObjectId,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel: Model<ITodo> = model("TodoModel", TodoSchema, "todos");

export { TodoModel, ITodo };
