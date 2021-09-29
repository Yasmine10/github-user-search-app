import React from "react";
import Moment from 'react-moment';

import { ReactComponent as LocationIcon } from "../assets/images/icon-location.svg";
import { ReactComponent as WebsiteIcon } from "../assets/images/icon-website.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../assets/images/icon-company.svg";

export default function Content(props) {
    return (
        <>
            <div id="content" className="container">
                <div className="profile">
                    <div className="profile-content">
                        <img src={props.user.avatar_url} alt="" />
                        <div>
                            <div className="profile-name">
                                <h1>{props.user.name}</h1>
                                <h3>&#64;{props.user.login}</h3>
                            </div>
                            <p>Joined <Moment format="DD MMM YYYY">{props.user.created_at}</Moment></p>
                        </div>
                    </div>
                    <p className="profile-bio">
                        {props.user.bio == null && "I'm a mysterious individual who has yet to fill out my bio." }
                    </p>
                </div>
                <div className="statistics">
                    <div className="repos">
                        <h4>Repos</h4>
                        <h1>{props.user.public_repos}</h1>
                    </div>
                    <div className="followers">
                        <h4>Followers</h4>
                        <h1>{props.user.followers}</h1>
                    </div>
                    <div className="following">
                        <h4>Following</h4>
                        <h1>{props.user.following}</h1>
                    </div>
                </div>
                <div className="links">
                    <div className="link">
                        <LocationIcon className={props.user.location == null ? "icon not-available" : "icon" }/>
                        { props.user.location == null ? <p className="not-available">Not available</p> : <p>{props.user.location}</p> }
                        
                    </div>
                    <div className="link">
                        <WebsiteIcon className={props.user.blog == null ? "icon not-available" : "icon" } />
                        { props.user.blog == null ? <p className="not-available">Not available</p> : <a>{props.user.blog}</a> }
                    </div>
                    <div className="link">
                        <TwitterIcon className={props.user.twitter_username == null ? "icon not-available" : "icon" } />
                        { props.user.twitter_username == null ? <p className="not-available">Not available</p> : <p>{props.user.twitter_username}</p> }
                    </div>
                    <div className="link">
                        <CompanyIcon className={props.user.company == null ? "icon not-available" : "icon" } />
                        { props.user.company == null ? <p className="not-available">Not available</p> : <p>{props.user.company}</p> }
                    </div>
                </div>
            </div>
        </>
    );
}
