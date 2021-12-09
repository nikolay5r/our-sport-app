export default function EditPost() {
    return (
        <div class="page-content">
            <h1 class="heading">Edit</h1>
            <div class="edit">
                <form action="">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" value="New goalkeeper" />
                    <label for="image-url">Image url</label>
                    <input type="text" name="image-url" id="image-url" value="http://site.com/image-url.gif" />
                    <label for="topic">Topic</label>
                    <select name="topic" id="topic">
                        <option value="football">Football</option>
                        <option value="volleyball">Volleyball</option>
                        <option value="basketball">Basketball</option>
                        <option value="tennis" selected>Tennis</option>
                        <option value="handball">Handball</option>
                        <option value="swimming">Swimming</option>
                    </select>
                    <label for="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10"
                        maxlength="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam doloremque facilis, dolorum aliquid dolorem omnis architecto? Autem, tenetur minima.</textarea>
                    <input type="submit" value="Edit" />
                </form>
            </div>
        </div>
    )
}