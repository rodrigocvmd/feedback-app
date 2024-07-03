function Button({ children, version, type, isDisabled`}) {
	return <div type={type} disabled={isDisabled}>
        {children}
    </div>;
}

export default Button;
