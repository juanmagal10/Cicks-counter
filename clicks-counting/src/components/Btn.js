import React from "react";
import '../stylesheet/button.css'

function Button({text,isClickBtn, manageClick }) {
    return (
        <button className={isClickBtn ? 'click-button' : 'restart-button'}
        onClick={manageClick}>
        {text}
        </button>
    )
}

export default Button