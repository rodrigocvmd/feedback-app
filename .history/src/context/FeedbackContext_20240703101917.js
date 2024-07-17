import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "This item feedback 1",
			rating: 10,
		},
		{
			id: 1,
			text: "This item feedback 2",
			rating: 9,
		},
		{
			id: 1,
			text: "This item feedback 3",
			rating: 7,
		},
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		ite
	})

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
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;