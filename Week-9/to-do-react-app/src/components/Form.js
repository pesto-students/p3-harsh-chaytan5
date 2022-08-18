import React from 'react';



function Form({ setInputText, todos, setTodos, inputText }) {

    function inputTextHandler(event) {
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    function submitTodoHandler(event) {
        event.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');
    }
    return (
        <form className='container-form'>
            <input className='input' onChange={inputTextHandler} value={inputText} type="text" placeholder='Add a task' />
            
            <button className='submit-btn btn' onClick={submitTodoHandler} type='submit'><i class="fa-solid fa-plus"></i></button>
        </form>
    )
}

export default Form;