import Header from "./components/Header";
import FeedbackList from "./components/FeedbackItem";
import FeedbackData from "./components/data/FeedbackData";
import { useState } from "react";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackI />
			</div>
		</>
	);
}

export default App;
