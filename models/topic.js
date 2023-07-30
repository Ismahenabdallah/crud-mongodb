import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todos || mongoose.model("Todos", topicSchema);

export default Todo;
