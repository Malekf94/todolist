const DeleteButton = ({ setFruits, fruit }) => {
	return (
		<button
			onClick={() => {
				setFruits((currFruits) => {
					return currFruits.filter((item) => {
						if (item !== fruit) {
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
