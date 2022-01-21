import s from './Car.module.css'
export default function Car({item}){
    const {id,model,price,year} = item

    return(
        <div className={s.container}>
            <div className={s.item}>Id: {id}</div>
            <div className={s.item}>Model: {model}</div>
            <div className={s.item}>Price: {price}</div>
            <div className={s.item}>Year: {year}</div>
        </div>
    )
}