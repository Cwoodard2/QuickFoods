import React from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import Calendar from "../components/Calendar";
import "./calender.scss";

export default function Calender() {
    return(
        <StandardPage>
            <Navigation />
            <div className="column">
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    <h3 className="day-of-week">Sunday</h3>
                    <h3 className="day-of-week-off">Monday</h3>
                    <h3 className="day-of-week-off">Tuesday</h3>
                    <h3 className="day-of-week-off">Wednesday</h3>
                    <h3 className="day-of-week-off">Thursday</h3>
                    <h3 className="day-of-week-off">Friday</h3>
                    <h3 className="day-of-week-off">Saturday</h3>
                </div>
                <div className="row" style={{flexWrap: "wrap", justifyContent: "center"}}>
                <Calendar day="Sunday"/>
                <Calendar day="Monday"/>
                <Calendar day="Tuesday"/>
                <Calendar day="Wednesday"/>
                <Calendar day="Thursday"/>
                <Calendar day="Friday"/>
                <Calendar day="Saturday"/>
            </div>
            </div>
        </StandardPage>
    );
}