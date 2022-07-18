import React from "react";
import './StandardPage.scss';

export default function StandardPage(props) {
    var style = props.style;

    if(style==null) {
        style = "standardPage"
    }
    return (
        <div className="standardPage">
            {props.children}
        </div>
    );
};