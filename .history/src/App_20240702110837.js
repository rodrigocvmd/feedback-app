import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

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
