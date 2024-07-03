function Card({ children, reverse }) {
	return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defa

export default Card;
