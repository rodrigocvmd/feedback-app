import { useState } from "react";

function RatingSelect() {

    const [selected, setSelected] = useState(10)

	return (

        <ul className="rating">
            <li><input type="radio" id="num1" name="rating" value="1" onChange={handleChange} checked={}   /></li>
        </ul>
    ) 
}

export default RatingSelect