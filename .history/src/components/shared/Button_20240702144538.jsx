import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className=`btn>
			{children}
		</div>
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