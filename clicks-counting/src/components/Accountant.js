import React from "react";
import '../stylesheet/accountant.css'

function Accountant({numClicks}) {
    return (
        <div className="accountant">
            {numClicks}
        </div>
    );
}

export default Accountant