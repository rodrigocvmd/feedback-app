import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
	const { feedback, isLoading } = useContext(FeedbackContext);

	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <p>Nenhum feedback postado</p>;
	}

	return isLoading ? <h3>Carregando...</h3> : ()

	return (
		
	);

	// return (
	// 	<div className="feedback-list">
	// 		{feedback.map((item) => (
	// 			<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
	// 		))}
	// 	</div>
	// );
}

export default FeedbackList;
