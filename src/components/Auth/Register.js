import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div class="page-content">
            <h1 class="heading">Register</h1>
            <div class="account">
                <form action="">
                    <label for="text">First name</label>
                    <input type="first-name" placeholder="Ivan" value="" id="first-name" name="first-name" />
                    <label for="text">Last name</label>
                    <input type="last-name" placeholder="Volov" value="" id="last-name" name="last-name" />
                    <label for="username">Username</label>
                    <input type="text" placeholder="Ivan48" value="" id="username" name="username" />
                    <label for="email">Email</label>
                    <input type="email" placeholder="email@gmail.com" value="" id="email" name="email" />
                    <label for="password">Password</label>
                    <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        value="" id="password" name="password" />
                    <label for="repeat-password">Repeat password</label>
                    <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        value="" id="repeat-password" name="repeat-password" />
                    <div class="account-details">
                        <div class="birthday">
                            <label for="birthday">Birthday</label>
                            <input type="date" name="birthday" id="birthday" />
                        </div>
                        <div class="gender">
                            <p>Gender</p>
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="female">Female</label>
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