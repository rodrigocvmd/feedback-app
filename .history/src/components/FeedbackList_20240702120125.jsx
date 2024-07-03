function FeedbackList({ feedback }) {
    if(!nofeedback || feedback.length === 0) {
        return <p>Nenhum feedback postado</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem
            ))}
        </div>
    )
}