import React from "react";

import {ReactComponent as SunIcon} from "../assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";

export default function Header(props) {

    const { darkMode, onClick } = props;

    return (
        <>
            <div id="header" className="container">
                <h1>devfinder</h1>
                <div className="color-switch" onClick={onClick}>
                    <span>{ darkMode ? "Light" : "Dark" }</span>
                    {darkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon"/>}
                </div>
            </div>
        </>
    );
}
