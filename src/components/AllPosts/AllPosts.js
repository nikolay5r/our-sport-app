import { Link } from 'react-router-dom';

export default function AllPosts() {
    return (
        <div className="page-content">
            <div id="go-top"></div>
            <h1 className="heading">All Posts</h1>

            {/* TODO: Search Engine and Filter by topic */}

            <div className="post-card">
                <div className="user">
                    <img src="./images/5e64d06674c6a.jpeg" alt="User Avatar" className="user-avatar" />
                    <div className="info">
                        <a href="/posts/userId" className="user-name">Profile Name</a>
                        <p className="title">Title: title</p>
                    </div>
                </div>
                <div className="post-content">
                    <img src="./images/generic-basketball-shot.jpg" alt="Post Title" className="post-image" />
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quisquam sequi pariatur
                        quidem natus veritatis obcaecati quia modi odit quam, magni omnis!
                        Asperiores, assumenda expedita dolores libero inventore eos commodi. Lorem ipsum dolor sit amet...
                    </p>
                    <div className="post-elements">
                        <a href="/profile/postId" className="post-element">View Details</a>
                    </div>
                </div>
            </div>
            <a href="#go-top" className="top">Go top</a>
        </div>
    )
}