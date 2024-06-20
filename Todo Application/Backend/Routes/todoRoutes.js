import { Createtodo, UpdateTodo, getstodo } from "../Controllers/todo.js";
import { Router } from "express";

const router = Router();

router.post('/todo', Createtodo);
router.get('/todos', getstodo);
router.put('/completed', UpdateTodo);

export default router;
