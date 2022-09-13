import React, {useState} from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import Calendar from "../components/Calendar";
import "./calender.scss";

export default function Calender() {
    const [dayToShow, setDayToShow] = useState("Tuesday");

    const changeDay = (whichDay) => {
        switch(whichDay) {
            case "sunday":
                setDayToShow("Sunday");
                break;
            case "monday":
                setDayToShow("Monday");
                break;
            case "tuesday":
                setDayToShow("Tuesday");
                break;
            case "wednesday":
                setDayToShow("Wednesday");
                break;
            case "thursday":
                setDayToShow("Thursday");
                break;
            case "friday":
                setDayToShow("Friday");
                break;
            case "saturday":
                setDayToShow("Saturday");
                break;
        }
    }
   
    return(
        <StandardPage>
            <Navigation />
            <div className="column">
                <div className="row" style={{justifyContent: "space-evenly", border: "solid black", borderRadius: "6px"}}>
                    <h3 className="day-of-week" onClick={() => changeDay("sunday")}>Sunday</h3>
                    <h3 className="day-of-week-off" onClick={() => changeDay("monday")}>Monday</h3>
                    <h3 className="day-of-week-off" onClick={() => changeDay("tuesday")}>Tuesday</h3>
                    <h3 className="day-of-week-off" onClick={() => changeDay("wednesday")}>Wednesday</h3>
                    <h3 className="day-of-week-off" onClick={() => changeDay("thursday")}>Thursday</h3>
                    <h3 className="day-of-week-off" onClick={() => changeDay("friday")}>Friday</h3>
                    <h3 className="day-of-week-off" onClick={() => changeDay("saturday")}>Saturday</h3>
                </div>
                <div className="row" style={{flexWrap: "wrap", justifyContent: "center"}}>
                    <Calendar day="Sunday" setDay={dayToShow}/>
                    <Calendar day="Monday" setDay={dayToShow}/>
                    <Calendar day="Tuesday" setDay={dayToShow}/>
                    <Calendar day="Wednesday" setDay={dayToShow}/>
                    <Calendar day="Thursday" setDay={dayToShow}/>
                    <Calendar day="Friday" setDay={dayToShow}/>
                    <Calendar day="Saturday" setDay={dayToShow}/>
                </div>
            </div>
        </StandardPage>
    );
}