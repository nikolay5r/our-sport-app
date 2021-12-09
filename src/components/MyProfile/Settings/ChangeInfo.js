export default function ChangeInfo() {
    return (
        <div class="page-content">
            <h1 class="heading">Settings</h1>
            <div class="change-profile-settings">
                <h2>Change Profile Information</h2>
                <label for="first-name">First name</label>
                <input type="text" value="Ivan" id="first-name" name="first-name" />
                <label for="last-name">Last name</label>
                <input type="text" value="Volov" id="last-name" name="last-name" />
                <label for="username">Username</label>
                <input type="text" value="Ivan48" id="username" name="username" />
                <label for="email">Email</label>
                <input type="email" value="email@gmail.com" id="email" name="email" />
                <div class="account-details">
                    <div class="birthday">
                        <label for="birthday">Birthday</label>
                        <input type="date" name="birthday" id="birthday" value="2017-06-01" min="1950-01-01" max="" />
                    </div>
                    <div class="gender">
                        <p>Gender</p>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" checked />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female" />
                    </div>
                </div>
                <label for="password">Current password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id="password"
                    name="password" />
                <input type="submit" value="Confirm" />
            </div>
        </div>
    )
}