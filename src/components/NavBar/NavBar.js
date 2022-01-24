import {useState} from "react";

import s from './NavBar.module.css'

export default function NavBar({trigger}) {

    const choose = (tag) => {
        trigger(tag)
    }

    return (
        <div className={s.container}>
            <button onClick={() => choose('cat')} className={s.btn}>Cat</button>
            <button onClick={() => choose('dog')} className={s.btn}>Dog</button>
            <button onClick={() => choose('girl')} className={s.btn}>Girl</button>
            <button onClick={() => choose('car')} className={s.btn}>Car</button>
            <button onClick={() => choose('bike')} className={s.btn}>Bike</button>
        </div>
    )
}