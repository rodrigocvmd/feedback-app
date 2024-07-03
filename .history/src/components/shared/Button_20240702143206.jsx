function Button({ children, version, type, isDisabled}) {
	return <div type={type} disabled={isDisabled} cla>
        {children}
    </div>;
}

export default Button;
