export default function ChangePassword() {
    return (
        <div class="page-content">
            <h1 class="heading">Settings</h1>
            <div class="change-profile-settings">
                <h2>Change Password</h2>
                <label for="old-password">Old password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id="old-password"
                    name="email" />
                <label for="password">New password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id="password"
                    name="password" />
                <label for="repeat-password">Confirm new password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    id="repeat-password" name="repeat-password" />
                <input type="submit" value="Confirm" />
            </div>
        </div>
    )
}