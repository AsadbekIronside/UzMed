import { useState } from "react";
import { Link } from "react-router-dom";
import "./DropHover.css";

const DropHover = ({ props }) => {

    const [ toggleDropdown, setToggleDropdown ] = useState(true);

    const { name, lists } = props;

    return(
        <div class="cart-dropdown">
            <button className="text-white" type="button" onMouseOver={() => {setToggleDropdown(false)}} onMouseLeave={() => {setToggleDropdown(true)}}>
                {name} <i className={toggleDropdown?"fa-solid fa-angle-down":"fa-solid fa-angle-up"}></i>
            </button>
            <ul className={toggleDropdown?"cart-dropdown-menu":"cart-dropdown-menu show"} onMouseOver={() => {setToggleDropdown(false)}} onMouseLeave={() => {setToggleDropdown(true)}}>
                {lists.map(elem => <li><Link to={elem['url']}>{elem['name']}</Link></li>)}
            </ul>
        </div>
    );
}

export default DropHover;