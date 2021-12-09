import { Link } from 'react-router-dom';

export default function PostCardOwner() {
    return (
        <div className="owner">
            <img src="./images/5e64d06674c6a.jpeg" alt="User Avatar" className="user-avatar" />
            <div className="info">
                <Link to="/profile/userId" className="user-name">Profile Name</Link>
                <p className="title">Title: Football</p>
            </div>
        </div>
    )
}