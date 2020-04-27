import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, name: "laundry", complete: false },
		{ id: 2, name: "make  dinner", complete: false },
		{ id: 3, name: "wash hands", complete: false },
	]);

	const todoNameRef = useRef();

	function handleAddTodo(e) {
		// const myTodos = [...todos, newTodo];
		// console.log(myTodos);
		// setTodos(myTodos);
		const newTodo = todoNameRef.current.value;
		// console.log("todo added", newTodo);
		const updatedTodos = [...todos, newTodo];
		// console.log(updatedTodos);
		todoNameRef.current.value = "";
		setTodos(updatedTodos);
		// console.log(todos);
	}

	return (
		<>
			<TodoList todos={todos} />
			<input
				ref={todoNameRef}
				type="text"
				placeholder="enter Todo here"
			/>
			<button onClick={handleAddTodo}> Add Todo</button>
			<button> Clear Completed</button>
			<div> # of Todos left </div>
		</>
	);
}

export default App;
