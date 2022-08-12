const ToggleButton = ({ setIsClicked }) => {
	return (
		<button
			className="togglebutton"
			onClick={(event) => {
				if (event.target.innerText === "Show Done List") {
					setIsClicked(["hide", "show"]);
					event.target.innerText = "Show To Do List";
				} else {
					setIsClicked(["show", "hide"]);
					event.target.innerText = "Show Done List";
				}
			}}
		>
			Show Done List
		</button>
	);
};

export default ToggleButton;
