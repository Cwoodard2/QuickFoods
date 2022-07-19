import React from "react";
import './StandardPage.scss';

export default function StandardPage(props) {
    var style = props.style;

    if(style==null) {
        style = "standard-page"
    }
    return (
        <div className="standard-page">
            {props.children}
        </div>
    );
};