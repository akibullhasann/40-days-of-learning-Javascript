console.log('Hello Fetch!');

// - 1. What is fetch() API and Syntax
// - 2. Using async/await with fetch()
// - 3. HTTP Methods
// - 4. fetch() Usage: Getting Resources
// - 5. fetch() Usage: Query Params
// - 6. fetch() Usage: Creating Resource
// - 7. fetch() Usage: Custom Headers
// - 8. fetch() Usage: Updating an Entire Resource
// - 9. fetch() Usage: Updating a Part of the Resource
// - 10. fetch() Usage: Deleting Resource
// - 11. Creating a Request Object
// - 12. Handling Response
// - 13. Handling Errors
// - 14. Canceling a Request
// - 15. Tasks and Assignments

// - 1. What is fetch() API and Syntax
/*
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

// - 2. using async/await with fetch();
/*
async function fetchData() {
    try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data); 
 }  catch (error){
    console.error('Error:', error);
}
}*/

// - 4. fetch() usage: Getting Resources


async function fetchPosts(){
    const API_URL = "http://localhost:3000/posts";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.error('Error:', error);
    }
}

fetchPosts();

// - 5. fetch() Usage: Query Params


async function fetchPostWithComments() {
    const API_URL = "http://localhost:3000/posts";

     const queryParams = {
     _embed: "comments",
    
    };

    try {
       const queryString = new URLSearchParams(queryParams).toString();
       const url = `${API_URL}?${queryString}`; 
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
       console.log(queryString);
       
       
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPostWithComments();

// - 6.FETCH() usage: Creating Resource

/*async function createPost(postData) {
    const API_URL = "http://localhost:3000/posts";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body : JSON.stringify(postData)
        });

        const result = await response.json();
        console.log(result);

    } catch (error){
        console.log('Error:', error);
    }
}

const newPostData = {
    id: crypto.randomUUID(),
    title: "How to use Fetch API",
    views: 1000
}

  
 createPost(newPostData);*/

 /* Update an entire resource or updating a part of the resource is similar to creating a resource, but we use different HTTP methods (PUT for updating an entire resource and PATCH for updating a part of the resource). The rest of the code structure remains the same, where you specify the URL, method, headers, and body as needed. and when selecting url you just need select id also. */



 // - 10. fetch() Usage: Deleting Resource

 /*async function deletePost(postId) {
    const API_URL = `http://localhost:3000/post/${postId}`;

    try {
        const response = await fetch(API_URL, {
            method: "DELETE"

        })
        const result = await respone.json();
        console.log(result);
    } catch (error) {
        conole.log(error);
    }
 }*/

    

// -7. fetch() Usage: Custom Headers

/*async function login() {
    const API_URL = "http://localhost:3000/login";

    try{
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "COntent-Type": "application/json",
                Authorization: "Bearer secret-token",
                "Custom-Header": "learn 40 days of JS"
            },
            body: JSON.stringify({
                username: "hasan",
                password: "hello"
            })
        })
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

login()*/

// -11. Creating a Request Object

/*const request1 = new Request("http://localhost:3000/posts", {
    method: "GET",
    headers: {
        "Content-Type": "applocation/json"
    },
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to cancel a Request",
        views: 0,
    })
})

async function post(request){
    try {
        const response = await fetch(request);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

post(request1);*/

/* the beauty of creating a request object is that you can reuse it multiple times, and you can also modify it before sending the request. This allows for greater flexibility and efficiency when making multiple requests to the same endpoint or when you need to make changes to the request parameters without having to create a new request object from scratch each time. ধরো তুমি রিকোয়েস্ট ১ বানালে এবং রিকোয়েস্ট ১ এর সব কিছু ঠিক রেখে তুমি যদি আরো নতুন বডি পাঠাতে চাও তা ও ইসিলি করতে পারবে। নিচে তার একটা উদাহরন দেওয়া রইলো। */

/*const rquest2 = new Request(request1, {
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to update a Request",
        views: 120,
        
    })
})

post(request2);*/

// - 12. Handling Response
/*if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);
};*/


// - 13. Handling Errors

/*using try-catch blocks to handle errors in asynchronous code is a common practice in JavaScript. It allows you to catch and handle any errors that may occur during the execution of the code, such as network errors, invalid responses, or other unexpected issues. By using try-catch, you can gracefully handle errors and provide feedback to the user or take appropriate actions without crashing the application.*/

// - 14. Canceling a Request

let controller;
const downloadBtn = document.querySelector("#download-btn");
const abortBtn = document.querySelector('#abort-btn');



downloadBtn.addEventListener('click', downLoadFile);
abortBtn.addEventListener('click', ()=>{
     if(controller){
        controller.abort('Download aborted by user');
        console.log('Download aborted');
     }
})

const url = './download/file.txt';

async function downLoadFile() {
    controller = new AbortController();
    const signal = controller.signal


    try{
        console.log('downloading');
        
        setTimeout(async ()=>{
            const response = await fetch(url, {signal});
            console.log('dowbload complete');
            const blob = await response.blob();
            const objectURL = URL.createObjectURL(blob);
            const link  = document.createElement('a');
            link.href = objectURL;
            link.download = "file.txt";
            link.click();
            URL.revokeObjectURL(objectURL);
        },2000);
        
    } catch (error) {
        console.error(error);
    }
}


