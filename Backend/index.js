const express = require('express');
const { createTodo, updateTodo } = require('./inputValidation');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs Please try again"
        })
        return;
    }
});

app.get('/todos', (req, res) => {

});

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs Please try again"
        })
        return;
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});