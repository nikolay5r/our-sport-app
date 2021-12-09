import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function GuestNavigation() {
    return (
        <Fragment>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
        </Fragment>
    )
}