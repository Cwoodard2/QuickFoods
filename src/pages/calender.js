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
                <div className="row" style={{justifyContent: "space-evenly", border: "solid black", borderRadius: "6px"}}>
                    <h2 className="day-of-week">Sunday</h2>
                    <h2 className="day-of-week-off">Monday</h2>
                    <h2 className="day-of-week-off">Tuesday</h2>
                    <h2 className="day-of-week-off">Wednesday</h2>
                    <h2 className="day-of-week-off">Thursday</h2>
                    <h2 className="day-of-week-off">Friday</h2>
                    <h2 className="day-of-week-off">Saturday</h2>
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