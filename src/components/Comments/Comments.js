import s from './Comments.module.css'

export default function Comments({item}){
    return(
        <div className={s.container}>
            <div>Comment id: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
            <div>Body: {item.body}</div>
        </div>
    )
}