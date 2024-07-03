import { useState } from "react";

function RatingSelect() {

    const [selected, setSelected] = useState(10)

	return (

        <ul className="rating">
            <li><input type="ra" /></li>
        </ul>
    ) 
}

export default RatingSelect