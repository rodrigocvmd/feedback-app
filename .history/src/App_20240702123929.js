import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} handleDelete={deleteDFe} />
			</div>
		</>
	);
}

export default App;
