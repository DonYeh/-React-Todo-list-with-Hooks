import React from "react";

export default function Todo({ todo }) {
	return (
		<div>
			<label>{todo.name}</label>
		</div>
	);
}
