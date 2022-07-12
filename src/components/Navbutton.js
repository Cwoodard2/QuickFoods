import React from "react";

export default function Navbutton(props) {
    var whichPage = props.whichPage;

    return(
        <button>{whichPage}</button>
    );
}