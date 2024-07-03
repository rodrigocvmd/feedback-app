function FeedbackStats({ feedback }) {
    // Calcular média das avaliações
    let average = feedback.reduce((acc, cur)=>{
        return acc +
    }, 0)

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} feedbacks</h4>
			<h4>Avaliação média: 10</h4>
		</div>
	);
}

export default FeedbackStats;
