import { Link } from 'react-router-dom';

export default function PostAttributesOwner() {
    return (
        <div className="attributes">
            <Link to="/posts/postId/edit">Edit</Link>
            <Link to="/posts/postId/delete">Delete</Link>
        </div>
    )
}