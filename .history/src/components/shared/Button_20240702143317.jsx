function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</div>
	);
}

Button.defaultProps = {
    versi
}

export default Button;
