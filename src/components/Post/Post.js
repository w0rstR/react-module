import s from './Post.module.css'
export default function Post({title,body,postId}){
    return(
        <div>
            <ul>
                <li className={s.item}>Post id: {postId}</li>
                <li className={s.item}>Title: {title}</li>
                <div className={s.item}>Body: {body}</div>
            </ul>
        </div>
    )
}