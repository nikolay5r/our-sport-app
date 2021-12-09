import PostCard from "./PostCard";

export default function AllPosts() {
    return (
        <div className="page-content">
            <h1 className="heading">All Posts</h1>

            {/* TODO: Search Engine and Filter by topic */}

            <PostCard />

            <PostCard />

            <PostCard />
            
            <p className="top" onClick={(e) => {
                e.preventDefault();
                document.documentElement.scrollTop = 0;
            }}>Go top</p>
        </div>
    )
}

