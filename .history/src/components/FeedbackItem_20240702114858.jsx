function FeedbackItem({ item }) {
	return (
		<div className="card">
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.tet}</div>
		</div>
	);
}

export default FeedbackItem;
