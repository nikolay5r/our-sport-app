import UserNavigation from "./UserNavigation";
import GuestNavigation from "./GuestNavigation";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <header className="navigation">
            <NavLink className="logo our-sport" to="/">Our Sport</NavLink>
            <div className="right">
                <NavLink className="nav-link" to="/posts">All Posts</NavLink>
                {/*  User */}
                <UserNavigation />
                {/* Guest */}
                <GuestNavigation />
            </div>
        </header>
    )
}