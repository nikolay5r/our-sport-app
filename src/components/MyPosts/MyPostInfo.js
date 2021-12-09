import { Link } from "react-router-dom";

export default function MyPostInfo({
    postTitle
}) {
    return (
        <div className="info">
            <p>{postTitle}</p>
            <Link to="/posts/postId">View Details</Link>
        </div>
    )
}