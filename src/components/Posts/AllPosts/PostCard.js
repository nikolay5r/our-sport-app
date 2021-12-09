import PostCardContent from './PostCardContent';
import PostCardOwner from './PostCardOwner';

export default function PostCard() {
    return (
        <div className="post-card">
            <PostCardOwner />
            <PostCardContent />
        </div>
    )
}