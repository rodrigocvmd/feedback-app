import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>Nenhum feedback foi postado</p>;
	}

	return (
		<div className="feedback-List">
			{feedback.map((item) => (
				<div></div>
			))}
		</div>
	);
}

export default FeedbackList;
