import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
	return (
		<div className="about-link">
			<a href="/about"></a>
			<FaQuestion size={30} />
		</div>
	);
}

export default AboutIconLink;
