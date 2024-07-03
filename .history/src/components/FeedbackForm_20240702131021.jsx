import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
const [text, se]

	return (
		<Card>
			<form>
				<h2>Como você avalia o serviço?</h2>
				<div className="inout-group">
					<input type="text" placeholder="Escreva uma avaliação" />
					<button type="submit">Send</button>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
