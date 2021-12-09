import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <div className="settings">
            <Link to="/profile/userId/changeInfo">Change Profile Information</Link>
            <Link to="/profile/userId/changePassword">Change Password</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}