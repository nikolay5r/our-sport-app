import { Link } from 'react-router-dom';
import PostCardOwner from './PostCardOwner';

export default function PostCard() {
    return (
        <div className="post-card">
            <PostCardOwner />
            <div className="post-content">
                <img src="./images/generic-basketball-shot.jpg" alt="Post Title" className="post-image" />
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quisquam sequi pariatur
                    quidem natus veritatis obcaecati quia modi odit quam, magni omnis!
                    Asperiores, assumenda expedita dolores libero inventore eos commodi. Lorem ipsum dolor sit amet ...
                </p>
                <div className="post-elements">
                    <Link to="/posts/postId" className="post-element">View Details</Link>
                </div>
            </div>
        </div>
    )
}