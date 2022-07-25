import React from "react";
import "./Calendar.scss";

export default function Calendar() {
    var date = new Date();
    var getDay = date.getDay();
    var getDate = date.getDate();
    var getMonth = date.getMonth();

    return(
        <div>
            <div className="calendar-day">
                <h3>{getDate} {getDay} {getMonth}</h3>
                <h4>Breakfast</h4>
                <h4>Lunch</h4>
                <h4>Dinner</h4>
            </div>
        </div>
    )
}