import User from "./User";

export default function MyProfile() {
    return (
        <div className="page-content">
            <h1 className="heading">My Profile</h1>
            <div className="profile">
                <MyProfileUser />
                <div className="settings">
                    <Link to="/profile/userId/changeInfo">Change Profile Information</Link>
                    <Link to="/profile/userId/changePassword">Change Password</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <User />
            </div>
        </div>
    )
}