import PostCard from "./PostCard";

export default function AllPosts() {
    return (
        <div className="page-content">
            <div id="go-top"></div>
            <h1 className="heading">All Posts</h1>

            {/* TODO: Search Engine and Filter by topic */}

            <PostCard />

            <PostCard />

            <PostCard />
            
            <a href="#go-top" className="top">Go top</a>
        </div>
    )
}