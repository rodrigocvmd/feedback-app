import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats({ feedback }) {


	
	// Calcular média das avaliações
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	average = average.toFixed(1).replace(/[.,]0$/, "");

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} feedbacks</h4>
			<h4>Avaliação média: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

FeedbackStats.propTypes = {
	feedback: PropTypes.array,
};

export default FeedbackStats;
