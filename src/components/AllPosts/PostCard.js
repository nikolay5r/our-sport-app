import { Link } from 'react-router-dom';

export default function PostCard() {
    return (
        <div className="post-card">
            <div className="user">
                <img src="./images/5e64d06674c6a.jpeg" alt="User Avatar" className="user-avatar" />
                <div className="info">
                    <Link to="/profile/userId" className="user-name">Profile Name</Link>
                    <p className="title">Title: Football</p>
                </div>
            </div>
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