import { Fragment } from "react";
import PopularTopics from './PopularTopics';
import Welcome from "./Welcome";

export default function Home() {
    return (
        <Fragment>
            <Welcome />
            <hr />
            <PopularTopics />
        </Fragment>
    )
}