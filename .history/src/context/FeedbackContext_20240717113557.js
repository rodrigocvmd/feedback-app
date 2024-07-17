import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	const fetchFeedback = async () => {
		const response = await fetch("/feedback?_sort=id&order=desc");
		const data = await response.json();

		setFeedback(data);
		setIsLoading(false);
	};

	const addFeedback = async (newFeedback) => {
		const response = await fetch("/feedback", {
			method: "POST",
			headers: {
				"Content-Type": "aplication/json",
			},
			body: JSON.stringify(newFeedback),
		});

		const data = await response.json();

		setFeedback([data, ...feedback]);
	};

	// Deletar feedback
	const deleteFeedback = async (id) => {
		if (window.confirm("Tem certeza que deseja deletar o feedback?")) {
			await fetch(`/feedback/${id}`, { method: "DELETE" });

			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Atualizar feedback
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updItem),
		});

		const data = await response.json();

		setFeedback(feedback.map((item) => (item.id === id ? { ...item, data } : item)));

		setFeedbackEdit({
			item: {},
			edit: false,
		  })

	};

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;