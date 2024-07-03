import Header from "./components/Header";
import FeedbackList from "./components/FeedbackItem";
import FeedbackData from "./"

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
