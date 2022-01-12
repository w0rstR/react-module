import './style.css'
export default function Post({title,body,idHendler,postId}){
    return(
        <div>

            <ul>
                <li>Id: {postId}</li>
                <li>Title: {title}</li>
                <div>Body: {body}</div>
                <button onClick={()=>idHendler(postId)} className={'btn'}>Show comments</button>
            </ul>
        </div>
    )
}