function FeedbackStats({ feedback }) {
	// Calcular média das avaliações
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating;
	}, 0);

    average  =average.toFixed(1).replace(/)

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} feedbacks</h4>
			<h4>Avaliação média: {isNaN(average / feedback.length) ? 0 : average}</h4>
		</div>
	);
}

export default FeedbackStats;
