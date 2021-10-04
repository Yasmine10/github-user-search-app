import React, { useEffect, useState } from "react";
import axios from "axios";

import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";

export default function SearchBar(props) {

    const [errorMessage, setErrorMessage] = useState(false)

    let callback = props.parentCallback;

    useEffect(() => {
        getRequest({user: "octocat"})
    }, [])

    const getRequest = (props) => {
        const apiUrl = "https://api.github.com/users/";

        setErrorMessage(false);
        
        axios.get(apiUrl + props.user, {
            header: {
                'accept': 'application/vnd.github.v3+json'
            }})
            .then((response) => {
                callback(response.data);
                
            })
            .catch((error) => {
                setErrorMessage(true);
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
                { errorMessage ? <p className="error">No results</p> : <p></p>}
                <button type="submit">Search</button>
            </form>
        </>
    );
}
