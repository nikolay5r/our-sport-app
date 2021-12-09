import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <div className="welcome">
                <p className="welcome-text">Welcome to<br />
                    <span className="our-sport">Our Sport</span>
                </p>
            </div>
            <hr />
            <div className="popular-topics">
                <h1 className="heading">Most popular sports</h1>
                <div className="popular-topic">
                    <a href="/posts/topic/football" className="popular-sport">Football</a>
                </div>
                <div className="popular-topic">
                    <a href="/posts/topic/volleyball" className="popular-sport">Volleyball</a>
                </div>
                <div className="popular-topic">
                    <a href="/posts/topic/basketball" className="popular-sport">Basketball</a>
                </div>
            </div>
        </Fragment>
    )
}