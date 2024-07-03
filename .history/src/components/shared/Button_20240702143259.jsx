function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className={`btn btn-${versio}`}>
			{children}
		</div>
	);
}

export default Button;
