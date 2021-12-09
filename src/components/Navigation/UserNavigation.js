import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function UserNavigation() {
    return (
        <Fragment>
            <NavLink className="nav-link" to="/my-posts">My posts</NavLink>
            <NavLink className="nav-link" to="/posts/create">Create Post</NavLink>
            <NavLink className="nav-link" to="/profile/userId">My Profile</NavLink>
        </Fragment>
    )
}