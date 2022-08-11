const MoveUp = ({ setFruits, fruit }) => {
	return (
		<button
			onClick={() => {
				setFruits((currFruits) => {
					const oldIndex = currFruits.indexOf(fruit);
					const aboveFruit = currFruits[oldIndex - 1];

					currFruits[oldIndex] = aboveFruit;
					currFruits[oldIndex - 1] = fruit;
					console.log(currFruits);
					return currFruits.map((f) => {
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
