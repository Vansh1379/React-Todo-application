import mongoose from "mongoose";
const { boolean } = require("zod");

mongoose.connect('mongodb+srv://vanshkalra1379:kalra1379@cluster0.rjd2jaw.mongodb.net/Todo-App');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const Todo = mongoose.model('todos', todoSchema);

export default Todo;