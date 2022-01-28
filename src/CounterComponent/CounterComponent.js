import s from './CounterComponent.module.css'

export default function CounterComponent({state, inc, dec, res}) {
    return (
        <div className={s.container}>
            <div className={s.item}>{state}</div>
            <div className={s.wrap}>
                <button className={s.btn} onClick={inc}>INC</button>
                <button className={s.btn} onClick={dec}>DEC</button>
                <button className={s.btn} onClick={res}>RES</button>
            </div>
        </div>
    )
}