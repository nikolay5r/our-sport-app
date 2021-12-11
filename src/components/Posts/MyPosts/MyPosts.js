import MyPostCard from "./MyPostCard";

export default function MyPosts() {
    return (
        <div className="page-content">
            <div id="go-top"></div>
            <h1 className="heading">My Posts</h1>
            <div className="my-posts">
                
                <MyPostCard />
                <MyPostCard />
                <MyPostCard />
                <MyPostCard />

            </div>
        </div>
    )
}