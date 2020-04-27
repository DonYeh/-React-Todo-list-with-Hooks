import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, name: "laundry", complete: false },
		{ id: 2, name: "make  dinner", complete: false },
		{ id: 3, name: "wash hands", complete: false },
	]);

	const todoNameRef = useRef();

	const LOCAL_KEY = "todoApp.todos";

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_KEY));
		if (storedTodos) setTodos(storedTodos);
	}, []);

	useEffect(() => localStorage.setItem(LOCAL_KEY, JSON.stringify(todos)), [
		todos,
	]); //saves to local storage whenver todos changes

	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	}

	function handleAddTodo(e) {
		// const myTodos = [...todos, newTodo];
		// console.log(myTodos);
		// setTodos(myTodos);
		const newTodo = todoNameRef.current.value;
		// console.log("todo added", newTodo);
		// const updatedTodos = [...todos, newTodo];
		// console.log(updatedTodos);
		setTodos((oldTodos) => {
			return [
				...oldTodos,
				{ id: uuidv4(), name: newTodo, complete: false },
			];
		});
		todoNameRef.current.value = "";
		// console.log(todos);
	}

	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input
				ref={todoNameRef}
				type="text"
				placeholder="enter Todo here"
			/>
			<button onClick={handleAddTodo}> Add Todo</button>
			<button> Clear Completed</button>
			<div>
				{" "}
				{todos.filter((todo) => !todo.complete).length} of Todos left{" "}
			</div>
		</>
	);
}

export default App;
