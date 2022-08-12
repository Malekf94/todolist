import { useState } from "react";

const ToDoInput = ({ setToDoList }) => {
	const [todoInput, setTodoInput] = useState("");

	const handleChange = (event) => {
		setTodoInput(event.target.value);
	};

	// console.log(setToDoList);

	const handleSubmit = (event) => {
		event.preventDefault();
		setToDoList((currToDoList) => {
			if (todoInput.length < 1) {
				return currToDoList;
			}
			const updatedList = [...currToDoList, todoInput];
			return updatedList;
		});
		setTodoInput("");
	};

	return (
		<form onSubmit={handleSubmit} className="inputForm">
			<label alt="Input box for adding to todo List" htmlFor="userInput">
				{" "}
				Insert to do item here:-
			</label>
			<input
				id="userInput"
				type="text"
				value={todoInput}
				onChange={handleChange}
			/>
			<button alt="button to submit todo List item" type="submit">
				Add
			</button>
		</form>
	);
};

export default ToDoInput;
