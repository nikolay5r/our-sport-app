import PostAttributesOwner from './PostAttributesOwner';
import PostAttributesNotOwner from './PostAttributesNotOwner';
import PostInfo from './PostInfo';
import Comments from './Comments';

export default function PostDetails() {
    return (
        <div className="page-content">
            <h1 className="heading">Details</h1>
            <div className="details">
                <PostInfo />
                {true ? <PostAttributesOwner /> : <PostAttributesNotOwner />}
                <Comments />
            </div>
        </div>
    )
}