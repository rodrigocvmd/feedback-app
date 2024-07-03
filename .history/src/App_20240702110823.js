import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    <FeedbackList />

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
