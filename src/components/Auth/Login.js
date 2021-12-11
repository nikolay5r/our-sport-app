import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="page-content">
            <div className="account login">
                <form action="">
                    <h1 className="heading">Login</h1>

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="email@gmail.com" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        id="password" />
                    <input type="submit" value="Login" />
                    <p>You don't have an account? Go to <Link to="/register">Register</Link>!</p>
                </form>
            </div>
        </div>
    )
}