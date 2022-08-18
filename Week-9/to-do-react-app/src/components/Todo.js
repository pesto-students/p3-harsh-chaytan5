import React from 'react';

function Todo({ text, todos, setTodos, todo }) {

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
        <div className='todo-container'>
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className='btn complete-btn'><i className="fa-solid fa-check"></i></button>
            <button onClick={deleteHandler} className='btn delete-btn'><i className="fa-solid fa-trash"></i></button>
        </div>
    );
}

export default Todo;