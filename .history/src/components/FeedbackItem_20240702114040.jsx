function FeedbackItem({ item }) {
	return (
		<div className="card">
			<div className="num-display">{item.reating}</div>
			<div className="text-display">{item.text}</div>
		</div>
	);
}

export default FeedbackItem;
