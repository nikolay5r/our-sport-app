import MyPostCard from "./MyPostCard";

export default function MyPosts() {
    return (
        <div class="page-content">
            <div id="go-top"></div>
            <h1 class="heading">My Posts</h1>
            <div class="my-posts">
                
                <MyPostCard />
                <MyPostCard />
                <MyPostCard />
                <MyPostCard />

            </div>
        </div>
    )
}