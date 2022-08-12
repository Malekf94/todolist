const FinishedList = ({ todoitems }) => {
	if (todoitems.length <= 0) {
		return (
			<p>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					Congratulations, this is your prize for finishing all your tasks
				</a>
			</p>
		);
	}
};

export default FinishedList;
