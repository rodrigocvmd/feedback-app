import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
	const handleClick = (item) => {
		console.log(item.id);
	};

	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleClick(item.i)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
