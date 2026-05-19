const API_URL ="https://jsonplaceholder.typicode.com/posts";
const showTitle = document.querySelector(".showTitle");
const btn = document.querySelector(".btn");

async function fetchingData(){
    const queryParams = {
        userId: 1
    };
    
    try {
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}?${queryString}`;
        const response = await fetch(url);
        const data = await response.json();
        const allPosts = data.filter(post =>{
            return post.userId === 1;        
        });

        const netPost = allPosts.map(post => {
            return post.title;
        });
        displayTitle(netPost);
    }
    catch (error){
        console.log(error);
    }
}

function displayTitle(netPost){
    for(i=0; i<netPost.length; i++){
        const title = document.createElement("p");
        title.textContent = netPost[i];
        showTitle.appendChild(title);
    }
}




btn.addEventListener("click", fetchingData);


