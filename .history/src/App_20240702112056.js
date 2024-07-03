import Header from "./components/Header";
import FeedbackList from "./components/FeedbackItem";
import Feedback

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className="container">
				<List />
			</div>
		</>
	);
}

export default App;
