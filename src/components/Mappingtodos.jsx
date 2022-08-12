import DeleteButton from "./DeleteButton";
import MoveUp from "./MoveUp";
import MoveDown from "./MoveDown";
import DoneButton from "./DoneButton";
import ToggleButton from "./ToggleButton";

const Mappingtodos = ({ setDoneList, todoitems, setToDoList }) => {
	return (
		<div>
			{todoitems.map((todoitem) => {
				return (
					<li key={todoitem}>
						{todoitem}
						<br />
						<DeleteButton setToDoList={setToDoList} todoitem={todoitem} />
						<MoveUp setToDoList={setToDoList} todoitem={todoitem} />
						<MoveDown setToDoList={setToDoList} todoitem={todoitem} />
						<DoneButton
							setDoneList={setDoneList}
							todoitem={todoitem}
							setToDoList={setToDoList}
						/>
					</li>
				);
			})}
		</div>
	);
};

export default Mappingtodos;
