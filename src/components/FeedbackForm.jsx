import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const [placeholder, setPlaceholder] = useState("Escreva uma avaliação");

	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

	useEffect(() => {
		const updatePlaceholder = () => {
			if (window.innerWidth < 600) {
				setPlaceholder("Avalie");
			} else {
				setPlaceholder("Escreva uma avaliação");
			}
		};

		updatePlaceholder();

		window.addEventListener("resize", updatePlaceholder);

		return () => window.removeEventListener("resize", updatePlaceholder);
	}, []);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleTextChange = ({ target: { value } }) => {
		if (value === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (value.trim().length < 10) {
			setBtnDisabled(true);
			setMessage("A avaliação precisa ter ao menos 10 caracteres");
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}

			setBtnDisabled(true);
			setRating(10);
			setText("");
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>Como você avalia o serviço?</h2>
				<RatingSelect select={setRating} selected={rating} />
				<div className="input-group">
					<input onChange={handleTextChange} type="text" placeholder={placeholder} value={text} />
					<Button type="submit" isDisabled={btnDisabled}>
						Enviar
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
