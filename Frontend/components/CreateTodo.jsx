import "./CreateTodo.css"

export function CreateTodo() {
    return (
        <div className="CreateTodo">
            <h1>TODO APP</h1>
            <input type="text" placeholder="Title" />
            <br />
            <br />
            <input type="text" placeholder="Description" />
            <br />
            <br />
            <button className="Button">Add a Todo</button>
        </div>
    );
}