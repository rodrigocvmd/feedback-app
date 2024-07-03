import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackItem";
import FeedbackData from "./components/data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState( {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      })

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
}

export default App;
