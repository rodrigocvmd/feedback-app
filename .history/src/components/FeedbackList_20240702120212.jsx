function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>Nenhum feedback postado</p>;
	}

	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	);
}

