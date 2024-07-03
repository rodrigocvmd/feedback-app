import Header from "./components/Header";
import FeedbackList from "./components/FeedbackItem";
import FeedbackData from "./components/data/FeedbackData";
import

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList />
			</div>
		</>
	);
}

export default App;
