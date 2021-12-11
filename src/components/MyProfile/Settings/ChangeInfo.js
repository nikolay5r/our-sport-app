export default function ChangeInfo() {
    return (
        <div className="page-content">
            <h1 className="heading">Settings</h1>
            <div className="change-profile-settings">
                <h2>Change Profile Information</h2>
                <label htmlFor="first-name">First name</label>
                <input type="text" defaultValue="Ivan" id="first-name" name="first-name" />
                <label htmlFor="last-name">Last name</label>
                <input type="text" defaultValue="Volov" id="last-name" name="last-name" />
                <label htmlFor="username">Username</label>
                <input type="text" defaultValue="Ivan48" id="username" name="username" />
                <label htmlFor="email">Email</label>
                <input type="email" defaultValue="email@gmail.com" id="email" name="email" />
                <div className="account-details">
                    <div className="birthday">
                        <label htmlFor="birthday">Birthday</label>
                        <input type="date" name="birthday" id="birthday" defaultValue="2017-06-01" min="1950-01-01" max="" />
                    </div>
                    <div className="gender">
                        <p>Gender</p>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" defaultChecked />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female" />
                    </div>
                </div>
                <label htmlFor="password">Current password</label>
                <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id="password"
                    name="password" />
                <input type="submit" value="Confirm" />
            </div>
        </div>
    )
}