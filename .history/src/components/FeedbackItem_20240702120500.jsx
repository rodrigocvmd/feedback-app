import Card from "./shared/Card";

function FeedbackItem({ item }) {
	return (
		<dC
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
		</dC>
	);
}

export default FeedbackItem;
