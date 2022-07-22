import React from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import Calendar from "../components/Calandar";

export default function Calender() {
    return(
        <StandardPage>
            <Navigation />
            <Calendar />
        </StandardPage>
    );
}