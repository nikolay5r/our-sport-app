export default function Header() {
    return (
        <header className="navigation">
            <a className="logo our-sport" href="#">Our Sport</a>
            <div className="right">
                <a className="nav-link" href="#">All Posts</a>
                {/*  User */}
                <a className="nav-link" href="#">My posts</a>
                <a className="nav-link" href="#">Create Post</a>
                <a className="nav-link" href="#">My Profile</a>
                {/* Guest */}
                <a className="nav-link" href="#">Login</a>
                <a className="nav-link" href="#">Register</a>
            </div>
        </header>
    )
}