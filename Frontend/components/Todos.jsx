/*
    where todos is array 
    todos = [
        title : 
        description: 
    ]
  */
export function Todos({ todos }) {
    return (
        <>
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
        </>
    );
}