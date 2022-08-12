import { useState } from "react";
import ToDoInput from "./form";
import FinishedList from "./finishedlist";
import ToggleButton from "./ToggleButton";
import Mappingtodos from "./Mappingtodos";

function List() {
	const [todoitems, setToDoList] = useState([
		"Follow our githubs",
		"then like",
		"subscribe",
		"and share",
	]);

	const [doneItems, setDoneList] = useState([]);
	const [isShown, setIsClicked] = useState(["show", "hide"]);

	return (
		<div className="listItems">
			<ToDoInput setToDoList={setToDoList} />
			<ol className={isShown[0]}>
				<h3>To Do List</h3>
				<FinishedList todoitems={todoitems} />
				<Mappingtodos
					setDoneList={setDoneList}
					todoitems={todoitems}
					setToDoList={setToDoList}
				/>
			</ol>
			<ol className={isShown[1]}>
				<h3>Done List</h3>
				{doneItems.map((doneItem) => {
					return <li key={doneItem}>{doneItem}</li>;
				})}
			</ol>
			<ToggleButton setIsClicked={setIsClicked} />
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
