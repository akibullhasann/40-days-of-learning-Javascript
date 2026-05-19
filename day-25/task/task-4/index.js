const API_URL ="https://jsonplaceholder.typicode.com/posts";

async function updateData(){
    const queryParams ={
        userId: 1
    }
    try{
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}/1`;
        const response = await fetch (url, {
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "am I insane or Am i insane?",
                body: "based on circumstance"
            })
        })
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}
updateData();