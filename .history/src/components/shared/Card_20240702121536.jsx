function Card({ children, reverse }) {
	// return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

	return <div className="card" styke>{children}</div>;
}

export default Card;
