import React, { useState } from "react";
import TodoList from "./TodoList";
import Todo from "./Todo";

function App() {
	const [todos, setTodos] = useState(["Todo1, Todo2, Todo3"]);

	return (
		<>
			<TodoList todos={todos} />
			<input type="text" placeholder="enter Todo here" />
			<button> Add Todo</button>
			<button> Clear Completed</button>
			<div> {todos.length} of Todos left </div>
		</>
	);
}

export default App;
