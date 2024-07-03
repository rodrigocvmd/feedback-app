import Card from "./shared/Card";

function FeedbackForm() {
	return (
		<Card>
			<form>
				<h2>Como você avalia o serviço?</h2>
                <div className="inout-group">
                    <input type="text" placeholder="Escreva uma avaliação                    
                </div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
