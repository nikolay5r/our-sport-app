import { Fragment } from "react";

export default function UserNavigation() {
    return (
        <Fragment>
            <a className="nav-link" href="/my-posts">My posts</a>
            <a className="nav-link" href="/posts/create">Create Post</a>
            <a className="nav-link" href="/profile/userId">My Profile</a>
        </Fragment>
    )
}