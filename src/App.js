import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
	const [todos, setTodos] = useState(["Todo1, Todo2, Todo3, Todo4"]);

	return (
		<>
			<TodoList todos={todos} />
			<input type="text" placeholder="enter Todo here" />
			<button> Add Todo</button>
			<button> Clear Completed</button>
			<div> # of Todos left </div>
		</>
	);
}

export default App;
