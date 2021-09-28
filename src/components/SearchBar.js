import React from "react";

import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";

export default function SearchBar() {
    return (
        <>
            <div id="search-bar" className="container">
                <SearchIcon className="icon" />
                <input type="text" placeholder="Search GitHub username&hellip;" />
                <button type="submit">Search</button>
            </div>
        </>
    );
}
