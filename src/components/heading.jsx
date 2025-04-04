import "../css/header.css"
import React from "react";


const Header = ({ heading }) => {
    return (
        <div class="heading-container">
            <span className="line start"></span> 
            <span className="diamond"></span>
            <span>◆</span>
            <span class="title">{heading}</span>
            <span>◆</span>
            <span className="diamond"></span>
            <span className="line"></span>
        </div>
    )
}

export default Header;