export default function Header() {
    return (
        <header className="navigation">
            <a className="logo our-sport" href="/">Our Sport</a>
            <div className="right">
                <a className="nav-link" href="/posts">All Posts</a>
                {/*  User */}
                <a className="nav-link" href="/my-posts">My posts</a>
                <a className="nav-link" href="/posts/create">Create Post</a>
                <a className="nav-link" href="/profile/userId">My Profile</a>
                {/* Guest */}
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/register">Register</a>
            </div>
        </header>
    )
}