import React from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import Calendar from "../components/Calendar";

export default function Calender() {
    return(
        <StandardPage>
            <Navigation />
            <div className="column">
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    <h3>Sunday</h3>
                    <h3>Monday</h3>
                    <h3>Tuesday</h3>
                    <h3>Wednesday</h3>
                    <h3>Thursday</h3>
                    <h3>Friday</h3>
                    <h3>Saturday</h3>
                </div>
                <div className="row" style={{flexWrap: "wrap"}}>
                <Calendar day="Sunady"/>
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