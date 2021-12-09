import { Fragment } from "react";
import PopularTopicCard from "./PopularTopicCard";
import PopularTopics from './PopularTopics';

export default function Home() {
    return (
        <Fragment>
            <div className="welcome">
                <p className="welcome-text">Welcome to<br />
                    <span className="our-sport">Our Sport</span>
                </p>
            </div>
            <hr />
            <PopularTopics />
        </Fragment>
    )
}