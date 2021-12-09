import AttributesOwner from './AttributesOwner';
import AttributesNotOwner from './AttributesNotOwner';
import Comment from './Comment';
import PostInfo from './PostInfo';

export default function Details() {
    return (
        <div className="page-content">
            <h1 className="heading">Details</h1>
            <div className="details">
                <PostInfo />
                {true ? <AttributesOwner /> : <AttributesNotOwner />}
                <div className="comments">
                    <h3>Comments: *Number of comments*</h3>
                    <Comment />
                </div>
            </div>
        </div>
    )
}