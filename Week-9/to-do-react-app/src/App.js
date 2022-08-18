import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		<ErrorBoundary>
			<div className='container-main'>
				<header className='header'>
					<h1>Chaytan's ToDo App</h1>
				</header>
				<Form
					todos={todos}
					setTodos={setTodos}
					setInputText={setInputText} inputText={inputText} />
				<TodoList
					setTodos={setTodos}
					todos={todos} />
			</div>
		</ErrorBoundary>
	)
}

export default App;
