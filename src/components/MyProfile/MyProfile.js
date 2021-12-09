import { Link } from "react-router-dom";

export default function MyProfile() {
    return (
        <div className="page-content">
            <h1 className="heading">My Profile</h1>
            <div className="profile">
                <div className="user">
                    <img src="./images/b2ap3_large_Football---carousel.jpg" alt="Profile" className="profile-picture" />
                    <div className="profile-info">
                        <h3>Profile info:</h3>
                        <ul>
                            <li>First name: First</li>
                            <li>Last name: Last</li>
                            <li>Username: asdasdas123</li>
                            <li>Email: abc@abv.bg</li>
                            <li>Date of Birth: 15 December 2003</li>
                            <li>Number of posts: 69</li>
                        </ul>
                    </div>
                </div>
                <div className="settings">
                    <Link to="/profile/userId/changeInfo">Change Profile Information</Link>
                    <Link to="/profile/userId/changePassword">Change Password</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </div>
    )
}