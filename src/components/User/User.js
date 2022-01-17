import s from './User.module.css'

export default function User({item, idHeandler}) {
    const {id, name} = item;
    return (
        <div className={s.item}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={() => idHeandler(id)} className={s.btn}>Show UserDetails</button>
        </div>
    )
}