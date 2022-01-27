import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {episodeService} from "../../services/episode.service";
import s from './NavigationButton.module.css'

export default function NavigationButton({id}) {
    const [next, setNext] = useState(1)
    const [prev, setPrev] = useState(1)
    useEffect(() => {
        episodeService.getById(id).then(value => {
            if (value.info.next) {
                const res = value.info.next.slice(-1)
                setNext(res)
            }


            if (value.info.prev) {
                const res = value.info.prev.slice(-1)
                setPrev(res)
            } else {
                const res = value.info.next.slice(-1)
                setPrev(res)
            }
        })
    }, [id])
    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <Link to={`/episode/${(prev)}`}><p className={s.item}>Show prev page</p></Link>
            </div>
            <div className={s.wrap}>
                <Link to={`/episode/${(next)}`}><p className={s.item}>Show next page</p></Link>
            </div>
        </div>
    )
}