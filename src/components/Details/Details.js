import { Link } from 'react-router-dom';
import AttributesOwner from './AttributesOwner';
import AttributesNotOwner from './AttributesNotOwner';
import Comment from './Comment';

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
                {true ? <AttributesOwner /> : <AttributesNotOwner />}
                <div className="comments">
                    <h3>Comments: *Number of comments*</h3>
                    <Comment />
                </div>
            </div>
        </div>
    )
}