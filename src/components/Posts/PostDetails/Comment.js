import { Link } from 'react-router-dom'

export default function Comment() {
    return (
        <div className="comment">
            <Link to="/profile/userId">Username</Link>:
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi ex magnam distinctio iusto quam similique architecto, eveniet dolor rem
                nobis
                dolore iste, repellendus temporibus natus soluta consectetur illo veritatis.
                Fuga blanditiis repudiandae magnam animi reiciendis explicabo cupiditate
                architecto velit
                dicta?</p>
        </div>
    )
}