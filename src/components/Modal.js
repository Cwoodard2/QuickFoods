import React from "react";
import "./Modal.scss";
import "../pages/homepage.scss";

export default function Modal(props) {

    if (!props.show) {
        return null;
    }

    return(
        <div className="modal">
            <div className="modalContent">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="row" style={{justifyContent: "space-evenly", minWidth: "55vw"}}>
                <div className="column">
                    <h3>Prep Instructions</h3>
                    <p>{props.prep}</p>
                    <h3>Cooking Instructions</h3>
                    <p>{props.instructions}</p>
                </div>
                <div className="column">
                    <h3>Prep Time: {props.prepTime}</h3>
                    <h3>Cook Time: {props.cookTime}</h3>
                    <h3>Ingredients:</h3>
                    <h3>Attributes:</h3>
                </div>
                </div>
                <button onClick={props.onClose} className="close-modal">Close</button>
            </div>
        </div>
    );
}