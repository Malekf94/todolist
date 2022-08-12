const MoveUp = ({ setToDoList, todoitem }) => {
	return (
		<button
			alt="button to move item up the todo List"
			className="moveup"
			onClick={() => {
				setToDoList((currToDoList) => {
					const oldIndex = currToDoList.indexOf(todoitem);
					const aboveItem = currToDoList[oldIndex - 1];
					if (oldIndex === 0) {
						return currToDoList;
					}

					currToDoList[oldIndex] = aboveItem;
					currToDoList[oldIndex - 1] = todoitem;
					return currToDoList.map((f) => {
						return f;
					});
				});
			}}
		>
			Move Up
		</button>
	);
};

export default MoveUp;
