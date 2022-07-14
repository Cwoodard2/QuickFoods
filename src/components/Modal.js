import React from "react";
import "./Modal.css";

export default function Modal(props) {

    if (!props.show) {
        return null;
    }

    return(
        <div className="modal">
            <div className="modalContent">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <h3>Prep</h3>
                <p>{props.ingredients}</p>
                <h3>Instructions</h3>
                <p>{props.instructions}</p>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}