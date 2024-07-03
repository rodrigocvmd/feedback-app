function FeedbackItem({ item }) {
	return (
		<div className="card">
			<div className="num-display">{item.id}</div>
			<div className="text-display">{item}</div>
		</div>
	);
}

export default FeedbackItem;
