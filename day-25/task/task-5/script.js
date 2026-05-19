const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function patchData (){
    const queryString = `${API_URL}/1`;

    try {
        const response = await fetch(queryString, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "ben sultan Murat bin Mehmet Han Hazretleri"
            })

        });
        const data = await response.json();
        console.log(data);

    }
    catch (error) {
        console.log(error);
}

}

patchData();