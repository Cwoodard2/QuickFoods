import React from "react";
import './StandardPage.css';

export default function StandardPage(props) {
    return (
        <div className="standardPage">
            {props.children}
        </div>
    );
};