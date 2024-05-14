import React from 'react';

export function Todos({ todos }) {
    return <div>
        {/* The error you're encountering is caused by the todos array being initially undefined when the Todos component tries 
        to map over it. This is because the fetch call in the App.jsx file is asynchronous, and the component is rendering before
         the data has been fetched and updated in the state.
        To fix this issue, you can add a conditional check in the Todos component to render the list of todos only when the
        todos array is not empty or undefined. Here's how you can modify the Todos.jsx file: */}
        {todos && todos.length > 0 ? (
            todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <button>{todo.complete ? "Completed" : "Mark as Completed"}</button>
                </div>
            ))
        ) : (
            <p>No todos available.</p>
        )}
        {/* {
            todos.map(function (todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <button>{todo.complete == true ? "Completed" : "Mark as Completed"}</button>
                    </div>
                );
            })
        } */}
    </div>

}

