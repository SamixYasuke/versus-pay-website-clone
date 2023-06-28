import React from "react";

function Card(){
    return(
        <div className="card">
            <div className="card-text">
                <h1>With Versus AI Allocate you can</h1>
                <p>Our software is designed to help small businesses make smarter 
                    decisions. Whether you're a startup or a small business owner, 
                    Versus AI Allocate can help you achieve your business goals. Our intuitive user interface 
                    makes it easy to manage your finances, inventory, sales, and customer relationships all in 
                    one place.</p>
            </div>
            <div className="card-cards">
                <div className="card-1">
                    <img src="./Images/star-img.svg" alt="star-img" />
                    <p>Automate your accounting and bookkeeping tasks, saving you time and reducing the risk of errors.</p>
                </div>
                <div className="card-2"> 
                    <img src="./Images/todo-img.svg" alt="todo-img.svg" />
                    <p>Optimize your inventory management to ensure that you always have the right products in stock.</p>
                </div>
                <div className="card-3">
                    <img src="./Images/analytic-img.svg" alt="analytic-img" />
                    <p>Analyze your sales data to identify trends and opportunities for growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;