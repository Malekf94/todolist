const MoveDown = ({ setToDoList, todoitem }) => {
	return (
		<button
			alt="button to move item down the todo List"
			className="movedown"
			onClick={() => {
				setToDoList((currToDoList) => {
					const oldIndex = currToDoList.indexOf(todoitem);
					const BelowItem = currToDoList[oldIndex + 1];
					console.log();
					if (oldIndex + 1 === currToDoList.length) {
						return currToDoList;
					}

					currToDoList[oldIndex] = BelowItem;
					currToDoList[oldIndex + 1] = todoitem;
					return currToDoList.map((f) => {
						return f;
					});
				});
			}}
		>
			Move Down
		</button>
	);
};

export default MoveDown;
