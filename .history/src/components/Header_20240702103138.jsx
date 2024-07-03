import PropTypes from "prop-types";

function Header({ text }) {
	return (
		<header>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: "Feedback UI",
    bgColor: 'rgba('
};

Header.propTypes = {
	text: PropTypes.string,
};

export default Header;
