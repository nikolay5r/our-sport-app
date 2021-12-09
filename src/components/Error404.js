import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div className="page-content">
            <h1 className="heading">Error 404: Page Not Found</h1>
            <div className="error">
                <p>Check the url you have entered.</p>
                <p>Return to <Link to="">Home</Link></p>
            </div>
        </div>
    )
}