function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</div>
	);
}

Button.defaultProps = {
    version: 'primary'
    type: ''
}

export default Button;