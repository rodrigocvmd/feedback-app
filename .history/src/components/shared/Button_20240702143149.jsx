function Button({ children, version, type, isDisabled ``}) {
	return <div type={type} disabled={isDisab}>
        {children}
    </div>;
}

export default Button;
