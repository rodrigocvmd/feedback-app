import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        clf
    }

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
