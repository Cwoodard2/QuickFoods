import React from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import Calendar from "../components/Calendar";

export default function Calender() {
    return(
        <StandardPage>
            <Navigation />
            <div className="row" style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>
                <Calendar />
                <Calendar />
                <Calendar />
                <Calendar />
                <Calendar />
                <Calendar />
                <Calendar />
            </div>
        </StandardPage>
    );
}