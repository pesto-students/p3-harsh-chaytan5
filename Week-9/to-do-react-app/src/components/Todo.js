import React from 'react';

function Todo({text, todos, setTodos, todo}) {
    
    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id))
    } 

    function completeHandler() {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div>
            <li>{text}</li>
            <button onClick={completeHandler}>Completed</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default Todo;