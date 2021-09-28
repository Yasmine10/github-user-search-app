import React from "react";

// import {ReactComponent as SunIcon} from "../assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";

export default function Header() {
    return (
        <div>
            <div id="header" className="container">
                <h1>devfinder</h1>
                <div className="color-switch">
                    <p>dark</p>
                    <MoonIcon className="icon"/>
                </div>
            </div>
        </div>
    );
}
