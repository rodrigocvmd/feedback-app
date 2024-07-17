import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Tem certeza que deseja deletar o feedback?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
        <FeedbackProvider>
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList handleDelete={deleteFeedback} />
							</>
						}></Route>
					<Route path="/about" element={<AboutPage />} />
				</Routes>

				<AboutIconLink />
			</div>
		</Router>
        </FeedbackProvider>
	);
}

export default App;