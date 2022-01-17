

async function getUsers(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    return data
}

export {
    getUsers
}