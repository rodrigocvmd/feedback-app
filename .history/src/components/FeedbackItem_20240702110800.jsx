import { useState } from "react";

function FeedbackItem() {
	// const [rating, setRating] = useState(7);
	// const [text, setText] = useState("This is an example");

	

	return (
		<div className="card">
			{/* <div className="num-display">{rating}</div>
			<div className="text-display">{text}</div> */}
            const [feedback, setFeedback] = useState(FeedbackData);
			<FeedbackList />
		</div>
	);
}

export default FeedbackItem;