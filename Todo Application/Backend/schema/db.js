import mongoose from "mongoose";

mongoose.connect('mongodb+srv://vanshkalra1379:kalra1379@cluster0.rjd2jaw.mongodb.net/Todo-App');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false,
    }
});

const Todo = mongoose.model('todos', todoSchema);

export default Todo;