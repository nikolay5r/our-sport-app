import postService from '../../services/postService';

export default function CreatePost() {
    const submitHandler = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget)

        let title = formData.get('title');
        let imageUrl = formData.get('image-url');
        let description = formData.get('description');
        let topic = formData.get('topic');

        await postService.create(title, imageUrl, description, topic)
    }


    return (
        <div className="page-content">
            <h1 className="heading">Create Post</h1>
            <div className="create">
                <form method='POST' onSubmit={submitHandler} >
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="New goalkeeper" maxLength="20" />
                    <label htmlFor="image-url">Image</label>
                    <input type="text" name="image-url" id="image-url" placeholder="http://site.com/image-url.gif" />
                    <label htmlFor="topic">Topic</label>
                    <select name="topic" id="topic">
                        <option value="football">Football</option>
                        <option value="volleyball">Volleyball</option>
                        <option value="basketball">Basketball</option>
                        <option value="tennis">Tennis</option>
                        <option value="handball">Handball</option>
                        <option value="swimming">Swimming</option>
                    </select>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Write your description here . . ." maxLength="200" ></textarea>
                    <input type="submit" value="Create" />
                </form>
            </div>
        </div>
    )
}