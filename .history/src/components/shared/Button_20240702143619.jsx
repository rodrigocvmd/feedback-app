import { isDisabled } from "@testing-library/user-event/dist/utils";

function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className={`btn btn-${version}`}>
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
	children: ropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	Version: PropTypes.bool,
};

export default Button;