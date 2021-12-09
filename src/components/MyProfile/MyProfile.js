import User from "./User";
import Settings from "./Settings/Settings";

export default function MyProfile() {
    return (
        <div className="page-content">
            <h1 className="heading">My Profile</h1>
            <div className="profile">
                <User />
                <Settings />
            </div>
        </div>
    )
}