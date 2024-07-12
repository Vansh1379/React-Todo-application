import Todo from "../schema/db";
const { createTodo, updateTodo } = require('./Zod/inputValidation');

export const Createtodo = async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs Please try again"
        })
        return;
    }
    // moongooose
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo Created Successfully"
    })
}

export const getstodo = async (req, res) => {
    const response = await Todo.find({});
    res.send(response, 200);
}

export const UpdateTodo = async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs Please try again"
        })
        return;
    }

    await Todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })
    res.json({
        msg: "Todo Updated Successfully"
    })
}

