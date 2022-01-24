import s from './Photo.module.css'

import {useEffect, useState} from "react";

export default function Photo({tag, triggerUpdate}) {
    const [render, setRender] = useState(false)

    const update = (tag) => {
        triggerUpdate(tag)
        setRender(!render)
    }

    return (
        <div className={s.container}>
            <div><img src={`https://loremflickr.com/620/540/${tag}?` + new Date().getTime()} alt="Image"/></div>
            <button className={s.btn} onClick={() => update(tag)}>Update</button>
        </div>
    )
}