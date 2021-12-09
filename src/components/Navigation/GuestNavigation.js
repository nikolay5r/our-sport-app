import { Fragment } from "react";

export default function GuestNavigation() {
    return (
        <Fragment>
            <a className="nav-link" href="/login">Login</a>
            <a className="nav-link" href="/register">Register</a>
        </Fragment>
    )
}