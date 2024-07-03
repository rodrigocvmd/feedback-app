import { useState } from "react";

function FeedbackItem() {
	// const [rating, setRating] = useState(7);
	// const [text, setText] = useState("This is an example");

    const [feedback, setFeedback] = useState(FeedbackData)

	return (
		<div className="card">
			{/* <div className="num-display">{rating}</div>
			<div className="text-display">{text}</div> */}
            <FeedbackList
		</div>
	);
}

export default FeedbackItem;
