import s from './PhotoItem.module.css'

export default function PhotoItem({item}){
    const {id,title,thumbnailUrl} = item
    return(
        <div className={s.container}>
            <div className={s.item}>Id: {id}</div>
            <div className={s.item}>Title: {title}</div>
            <img src={thumbnailUrl} alt="Photo"/>
        </div>
    )
}