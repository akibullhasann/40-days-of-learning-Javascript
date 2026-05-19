const API_URL ="https://jsonplaceholder.typicode.com/posts";

const postData = async()=>{
    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userID : 5,
                id: 1,
                title: 'how to make video in AI',
                body: 'use leonardo AI to make video'
            }),
            
        })
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
}
postData();