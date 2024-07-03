function Card({ children, reverse }) {
	return <div className={`card ${reverse && re}`}>{children}</div>;
}



export default Card;
