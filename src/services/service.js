
async function getUsers(){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`).then(response=>response.json())
    return data
}

async function getUserDetails(id){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response=>response.json())
    return data
}

async function getPosts(id){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(response=>response.json())
    return data
}

export {
    getUsers,
    getUserDetails,
    getPosts
}