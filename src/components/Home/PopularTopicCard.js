export default function PopularTopicCard({
    sport
}) {
    return (
        <div className="popular-topic">
            <a href={`/posts/topic/${sport}`} className="popular-sport">{sport}</a>
        </div>
    )
}