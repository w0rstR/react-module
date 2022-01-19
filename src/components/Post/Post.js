import s from './Post.module.css'

export default function Post({item}){
    const {id,title,body} = item
    return(
        <div className={s.container}>
            <div className={s.item}>Post id: {id}</div>
            <div className={s.item}>Tittle: {title}</div>
            <div className={s.item}>Body: {body}</div>
        </div>
    )
}