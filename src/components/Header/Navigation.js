import UserNavigation from "./UserNavigation";
import GuestNavigation from "./GuestNavigation";

export default function Navigation() {
    return (
        <header className="navigation">
            <a className="logo our-sport" href="/">Our Sport</a>
            <div className="right">
                <a className="nav-link" href="/posts">All Posts</a>
                {/*  User */}
                <UserNavigation />
                {/* Guest */}
                <GuestNavigation />
            </div>
        </header>
    )
}