
const create = (title, imageUrl, description, topic) => {
    return fetch('http://localhost:3030/data/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            imageUrl,
            description,
            topic
        })
    }).then(res => res.json())
        .catch(err => console.log(err))
}

const postService = {
    create
}

export default postService;
