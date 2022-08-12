import { useState } from "react";
import DeleteButton from "./DeleteButton";
import MoveUp from "./MoveUp";
import MoveDown from "./MoveDown";
import ToDoInput from "./form";
import FinishedList from "./finishedlist";

function List() {
	const [todoitems, setToDoList] = useState([
		"Follow our githubs",
		"then like",
		"subscribe",
		"and share",
	]);

	return (
		<div className="listItems">
			<ToDoInput setToDoList={setToDoList} />
			<ol>
				<FinishedList todoitems={todoitems} />
				{todoitems.map((todoitem) => {
					return (
						<li key={todoitem}>
							{todoitem}
							<br />
							<DeleteButton setToDoList={setToDoList} todoitem={todoitem} />
							<MoveUp setToDoList={setToDoList} todoitem={todoitem} />
							<MoveDown setToDoList={setToDoList} todoitem={todoitem} />
						</li>
					);
				})}
			</ol>
			<footer>
				<h4>
					This to do list was brought to you by{" "}
					<a href="https://github.com/Malekf94">Malek</a> and{" "}
					<a href="https://github.com/Mooose17">Tommy</a> dont forget to like,
					subscribe and share
				</h4>
			</footer>
		</div>
	);
}

export default List;
