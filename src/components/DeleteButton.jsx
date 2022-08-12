const DeleteButton = ({ setToDoList, todoitem }) => {
	return (
		<button
			alt="button to delete item from todo List"
			className="deletebutton"
			onClick={() => {
				setToDoList((currToDoList) => {
					return currToDoList.filter((item) => {
						if (item !== todoitem) {
							return item;
						}
					});
				});
			}}
		>
			Delete
		</button>
	);
};

export default DeleteButton;
