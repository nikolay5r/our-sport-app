import { Link } from "react-router-dom";

export default function MyPostCard() {
    return (
        <div className="my-post-card">
            <img src="./images/cover_image.jpg" alt="" />
            <div className="info">
                <p>Post name</p>
                <Link to="/posts/postId">View Details</Link>
            </div>
        </div>
    )
}