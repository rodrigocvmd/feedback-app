import { useState } from "react";

function RatingSelect() {

    const [selected, setSelected] = useState(10)

	return (

        <ul className="rating">
            <li><input type="radio" id="num1" name="rating" value="1" onChange={handleChange} checked={selected === 1}/>
            <label htmlFor="num1"
            </li>
        </ul>
    ) 
}

export default RatingSelect