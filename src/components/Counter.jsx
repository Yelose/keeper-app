import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);

    function add() {
        setCount(count + 1);
    }
    function substract(){
        setCount(count - 1);
    }
    return (
        <div className="counter-container">
            <h1>{count}</h1>
            <div className="buttons-set">
            <h2 onClick={add}>+</h2>
            <h2 onClick={substract}>-</h2>
            </div>
        </div>
    )
}