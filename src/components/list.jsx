import { useState } from "react";
import DeleteButton from "./DeleteButton";
import MoveUp from "./MoveUp";
import MoveDown from "./MoveDown";

function List() {
	const [fruits, setFruits] = useState(["kiwi", "lala", "Banana", "Pears"]);

	return (
		<div className="listItems">
			<ol>
				{fruits.map((fruit, index) => {
					return (
						<li key={fruit}>
							{fruit}
							<br />
							<DeleteButton setFruits={setFruits} fruit={fruit} />
							<MoveUp setFruits={setFruits} fruit={fruit} index={index} />
							<MoveDown setFruits={setFruits} fruit={fruit} />
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default List;
