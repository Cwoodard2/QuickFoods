import React from "react";
import "./Modal.scss";

export default function Modal(props) {

    if (!props.show) {
        return null;
    }

    return(
        <div className="modal">
            <div className="modalContent">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h3>Prep: {props.prepTime}</h3>
                <p>{props.prep}</p>
                <h3>Instructions</h3>
                <p>Cook Time: {props.cookTime}</p>
                <div className="wrapText">
                    <p>{props.instructions}</p>
                </div>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}