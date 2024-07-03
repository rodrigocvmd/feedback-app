import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>Nenhum feedback foi postado</p>;
	}

	return (
		<div className="feedback-List">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>

	);
}

export default FeedbackList;
