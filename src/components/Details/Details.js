import AttributesOwner from './AttributesOwner';
import AttributesNotOwner from './AttributesNotOwner';
import PostInfo from './PostInfo';
import Comments from './Comments';

export default function Details() {
    return (
        <div className="page-content">
            <h1 className="heading">Details</h1>
            <div className="details">
                <PostInfo />
                {true ? <AttributesOwner /> : <AttributesNotOwner />}
                <Comments />
            </div>
        </div>
    )
}