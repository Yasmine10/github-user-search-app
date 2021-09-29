import React, { useEffect } from "react";
import axios from "axios";

import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";

export default function SearchBar(props) {

    let callback = props.parentCallback;

    useEffect(() => {
        getRequest({user: "octocat"})
    }, [])

    const getRequest = (props) => {
        const apiUrl = "https://api.github.com/users/";
        
        axios.get(apiUrl + props.user, {
            header: {
                'accept': 'application/vnd.github.v3+json'
            }})
            .then((response) => {
            console.log(response);
            callback(response.data);
        })
    }

    const onTrigger = (event) => {
        event.preventDefault();

        getRequest({user: event.target.searchValue.value});
    }

    return (
        <>
            <form id="search-bar" className="container" onSubmit={onTrigger}>
                <SearchIcon className="icon" />
                <input type="text" name="searchValue" placeholder="Search GitHub username&hellip;" />
                <button type="submit">Search</button>
            </form>
        </>
    );
}
