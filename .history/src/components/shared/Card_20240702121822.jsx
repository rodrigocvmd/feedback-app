import PropTypes from 'prop-types'

function Card({ children, reverse }) {
	return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
	reverse: false,
};

Card.PropTypes = {
    children: PropTypes.node.isRequired,
    reverse: 
}

export default Card;