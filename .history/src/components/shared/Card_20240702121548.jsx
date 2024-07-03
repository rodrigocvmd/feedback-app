function Card({ children, reverse }) {
	// return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

	return <div className="card" style={{backgroundColor}}>{children}</div>;
}

export default Card;
