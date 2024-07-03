function Button({ children, version, type, isDisabled}) {
	return <div type={type} disabled={isDisabled} className="">
        {children}
    </div>;
}

export default Button;
