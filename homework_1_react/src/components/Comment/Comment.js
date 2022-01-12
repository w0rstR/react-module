import './style.css'
export default function Comment({data}){
    const {name,email,body,id} =data
    return(
        <div className={'comment-item'}>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Body: {body}</li>
            </ul>
        </div>
    )
}