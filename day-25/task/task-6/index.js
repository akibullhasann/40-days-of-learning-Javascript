const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function deletePost(){
    const URL = `${API_URL}/1`;

    try {
        const response = await fetch (URL, {
            method: "DELETE"
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

deletePost();