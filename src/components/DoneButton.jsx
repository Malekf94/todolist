const DoneButton = ({ setDoneList, todoitem, setToDoList }) => {
	return (
		<button
			alt="button to delete item from todo List"
			className="doneButton"
			onClick={() => {
				setDoneList((currToDoList) => {
					const updatedList = [...currToDoList, todoitem];
					setToDoList((currToDoList) => {
						return currToDoList.filter((item) => {
							if (item !== todoitem) {
								return item;
							}
						});
					});
					return updatedList;
				});
			}}
		>
			<img
				className="tick"
				src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png"
			/>
		</button>
	);
};

export default DoneButton;
