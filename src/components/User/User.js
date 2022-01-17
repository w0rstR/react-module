import s from './User.module.css'

export default function User({item}){
    const {id,name,username,email} = item
    return(
        <div className={s.wrap}>
            <div className={s.item}>Id:{id}---{name}---{username}---{email}</div>
        </div>
    )
}