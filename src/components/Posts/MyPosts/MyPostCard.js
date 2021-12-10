import MyPostInfo from "./MyPostInfo";

export default function MyPostCard() {
    return (
        <div className="my-post-card">
            <img src="/images/5e64d06674c6a.jpeg" alt="My Post" />
            <MyPostInfo postTitle={'My post'} />
        </div>
    )
}