import { Link } from 'react-router-dom';

export default function AttributesNotOwner() {
    return (
        <div className="attributes">
            <Link to="/posts/postId/like">Like</Link>
            <Link to="/posts/postId/dislike">Dislike</Link>
        </div>
    )
}