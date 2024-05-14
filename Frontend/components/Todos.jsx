/*
    where todos is array 
    todos = [
        title : 
        description: 
    ]
  */
export function Todos({ todos }) {
    return <div>
        {
            todos.map(function (todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <button>{todo.complete == true ? "Completed" : "Mark as Completed"}</button>
                    </div>
                );
            })
        }
    </div>

}

{/* export function Todos({todos}) {

return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
} */}