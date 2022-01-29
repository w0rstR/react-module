import s from './Cat.module.css'

export default function Cat({item,index,delItem}){
    return(
        <div className={s.container}>
            <div>{index+1} - {item}</div>
            <button className={s.btn} onClick={()=>delItem(index)}>delete</button>
        </div>
    )
}