import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="page-content">
            <h1 className="heading">Register</h1>
            <div className="account">
                <form action="">
                    <label htmlFor="text">First name</label>
                    <input type="first-name" placeholder="Ivan" id="first-name" name="first-name" />
                    <label htmlFor="text">Last name</label>
                    <input type="last-name" placeholder="Volov" id="last-name" name="last-name" />
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Ivan48" id="username" name="username" />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="email@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        id="password" name="password" />
                    <label htmlFor="repeat-password">Repeat password</label>
                    <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        id="repeat-password" name="repeat-password" />
                    <div className="account-details">
                        <div className="birthday">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" name="birthday" id="birthday" />
                        </div>
                        <div className="gender">
                            <p>Gender</p>
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="female" value="female" />
                        </div>
                    </div>
                    <input type="submit" value="Register" />
                    <p>You have an account? Go to <Link to="/login">Login</Link>!</p>
                </form>
            </div>
        </div>
    )
}