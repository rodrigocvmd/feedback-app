import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
	const [text, setText] = useState("");

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>Como você avalia o serviço?</h2>
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Escreva uma avaliação"
						value={text}
					/>
					<Button type="submit">Send					</Button>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
