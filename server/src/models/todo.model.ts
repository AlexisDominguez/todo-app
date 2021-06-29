import { Schema } from "mongoose";

// TODO: Define schema for Todos properties and define schema for todos Status
const TodoSchema = new Schema(
  {
    value: {
      type: String,
      require: true,
    },
    status: {
      type: 
    },
  },
  {
    timestamps: {
      createdAt: String(new Date().toISOString),
    },
  }
);
