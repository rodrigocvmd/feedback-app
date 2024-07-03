function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className={`btn`} v>
			{children}
		</div>
	);
}

export default Button;
