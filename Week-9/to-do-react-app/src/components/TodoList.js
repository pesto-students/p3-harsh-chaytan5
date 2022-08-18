import React from 'react';
import Todo from './Todo';

function TodoList({todos, setTodos}) {

    return (
        <div className='container-todolist'>
            <ul className='todolist'>
                {todos.map((todo) => <Todo
                    setTodos={setTodos}
                    todos={todos}
                    text={todo.text}
                    key={todo.id}
                    todo={todo}
                />)}
                
            </ul>
        </div>
    )
}

export default TodoList;
