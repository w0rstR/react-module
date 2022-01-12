
const API = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(){
    const data = await fetch(API).then(result=>result.json())
    return data
}

async function getPosts(id){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(result=>result.json())
    return data
}

async function getComments(postId){
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(result=>result.json())
    return data
}

export{
    getUsers,
    getPosts,
    getComments
}