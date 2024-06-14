const express = require('express');
const { createTodo, updateTodo } = require('./inputValidation');
const { todo } = require('./db')
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    // zod
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs Please try again"
        })
        return;
    }
    // moongooose
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created Successfully"
    })
});

app.get('/todos', async (req, res) => {
    const response = await todo.find({});
    res.send(response, 200);
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs Please try again"
        })
        return;
    }

    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })
    res.json({
        msg: "Todo Updated Successfully"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});