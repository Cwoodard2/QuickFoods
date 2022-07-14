import React from "react";
import "./Modal.css";

export default function Modal(props) {

    if (!props.show) {
        return null;
    }

    return(
        <div className="modal">
            <div className="modalContent">
                <h1>Content</h1>
                <button onClick={props.onClose}>Hewo</button>
            </div>
        </div>
    );
}