function FeedbackStats({ feedback }) {
	// Calcular média das avaliações
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating;
	}, 0);



	return (
		<div className="feedback-stats">
			<h4>{feedback.length} feedbacks</h4>
			<h4>Avaliação média: </h4>
		</div>
	);
}

export default FeedbackStats;
