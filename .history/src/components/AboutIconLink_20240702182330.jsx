import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
	return (
		<div className="about-link">
			<L href="/about">
				<FaQuestion size={30} />
			</L>
		</div>
	);
}

export default AboutIconLink;
