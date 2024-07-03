function Button({ children, version, type, isDisabled }) {
	return (
		<div type={type} disabled={isDisabled} className={`btn`} b>
			{children}
		</div>
	);
}

export default Button;
