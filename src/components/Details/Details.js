import { Link } from 'react-router-dom'

export default function Details() {
    return (
        <div className="page-content">
            <h1 className="heading">Details</h1>
            <div className="details">
                <div className="post-info">
                    <p>Title: Post title <br /> by: <Link to="/profile/userId">Owner</Link></p>
                    <p>Topic: Football</p>
                    <img src="./images/5e64d06674c6a.jpeg" alt="Post title" />
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam
                        nisi autem hic
                        sapiente explicabo natus itaque voluptates fugit nostrum.</p>
                </div>
                <div className="attributes">
                    {/* If not owner */}
                    <Link to="/posts/postId/like">Like</Link>
                    <Link to="/posts/postId/dislike">Dislike</Link>
                    {/* If owner */}
                    <Link to="/posts/postId/edit">Edit</Link>
                    <Link to="/posts/postId/delete">Delete</Link>
                </div>
                <div className="comments">
                    <h3>Comments: *Number of comments*</h3>
                    <div className="comment">
                        <Link to="/profile/userId">Username</Link>:
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Eligendi ex magnam distinctio iusto quam similique architecto, eveniet dolor rem
                            nobis
                            dolore iste, repellendus temporibus natus soluta consectetur illo veritatis.
                            Fuga blanditiis repudiandae magnam animi reiciendis explicabo cupiditate
                            architecto velit
                            dicta?</p>
                    </div>
                    <div className="comment">
                        <Link to="/profile/userId">Username</Link>:
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Eligendi ex magnam distinctio iusto quam similique architecto, eveniet dolor rem
                            nobis
                            dolore iste, repellendus temporibus natus soluta consectetur illo veritatis.
                            Fuga blanditiis repudiandae magnam animi reiciendis explicabo cupiditate
                            architecto velit
                            dicta?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}