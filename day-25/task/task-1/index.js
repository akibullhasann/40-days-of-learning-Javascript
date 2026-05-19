const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsersNames(){
    try {
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error (`status: ${response.status}`);
        }
        const data = await response.json();
        const names = data.map(name =>{
            return name.name;
        });
        console.log(names);
    } catch (error){
        console.log(error);
    }
}

getUsersNames();