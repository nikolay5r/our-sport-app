import PopularTopicCard from "./PopularTopicCard";

export default function PopularTopics() {
    return (
        <div className="popular-topics">
            <h1 className="heading">Most popular sports</h1>
            <PopularTopicCard key="1001" sport="football" />
            <PopularTopicCard key="1002" sport="volleyball" />
            <PopularTopicCard key="1003" sport="basketball" />
        </div>
    )
} 