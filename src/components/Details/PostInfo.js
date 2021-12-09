import { Link } from 'react-router-dom';

export default function PostInfo() {
    return (
        <div className="post-info">
            <p>Title: Post title <br /> by: <Link to="/profile/userId">Owner</Link></p>
            <p>Topic: Football</p>
            <img src="/images/5e64d06674c6a.jpeg" alt="Post title" />
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam
                nisi autem hic
                sapiente explicabo natus itaque voluptates fugit nostrum.</p>
        </div>
    )
}