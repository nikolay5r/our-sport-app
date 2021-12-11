export default function ChangePassword() {
    return (
        <div className="page-content">
            <h1 className="heading">Settings</h1>
            <div className="change-profile-settings">
                <h2>Change Password</h2>
                <label htmlFor="old-password">Old password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id="old-password"
                    name="email" />
                <label htmlFor="password">New password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id="password"
                    name="password" />
                <label htmlFor="repeat-password">Confirm new password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    id="repeat-password" name="repeat-password" />
                <input type="submit" value="Confirm" />
            </div>
        </div>
    )
}