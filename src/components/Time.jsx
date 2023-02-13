import React from "react";
export default function Time() {
;
    let [time, setTime] = React.useState(new Date().toLocaleTimeString());

    function getCurrentTime() {
        setTime(time = new Date().toLocaleTimeString());
    }
    return(
        <div className="time-container">
            <h1>{time}</h1>
            <button onClick={getCurrentTime}>Get Time</button>
        </div>
    )
}