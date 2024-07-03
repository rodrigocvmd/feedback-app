function FeedbackItem({ item }) {
	return (
		<div className="card">
			<div className="num-display">{item}</div>
			<div className="text-display">{item.text}</div>
		</div>
	);
}

export default FeedbackItem;
