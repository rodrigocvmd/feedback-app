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
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a'
};

Header.propTypes = {
	text: PropTypes.string,
};

export default Header;
