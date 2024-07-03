import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
	return (
		<butto type={type} disabled={isDisabled} className="btn">
			{children}
		</butto>
	);
}

Button.defaultProps = {
	version: "primary",
	type: "button",
	isDisabled: "false",
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	Version: PropTypes.bool,
};

export default Button;
