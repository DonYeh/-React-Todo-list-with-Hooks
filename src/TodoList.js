import React from "react";
import Todo from "./Todo";
export default function TodoList(todos) {
	return (
		<div todos={todos}>
			TodoList Component with {todos.length} todos to do
			<Todo />
		</div>
	);
}
