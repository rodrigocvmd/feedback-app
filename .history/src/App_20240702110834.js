import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
impor

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