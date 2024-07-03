function Button({ children, version, type, isDisabled}) {
	return <div type={type} disabled={isDisabled} clasN>
        {children}
    </div>;
}

export default Button;
