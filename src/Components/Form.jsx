import React from "react";

function Form(){
    return(
        <div className="form" id="form">
            <div className="form-text">
                <h1>Don't let the complexity of managing a business hold you back.</h1>
                <p>Let Versus AI Allocate do the heavy lifting for you. Join the waitlist
                    and be the first to know when we launch </p>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Enter email address"/>
            </div>
            <button>Join Waitlist</button>
        </div>
    )
}

export default Form;