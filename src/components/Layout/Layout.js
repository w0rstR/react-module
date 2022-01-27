import s from './Layout.module.css'

import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Layout() {
    const [episodeId, setEpisodeId] = useState(1)
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            setEpisodeId(id)
        } else {
            setEpisodeId(1)
        }
    })
    return (
        <div>
            <div className={s.container}>
                <Link to={`episode/${episodeId}`}><p className={s.item}>Go to Episode</p></Link>
            </div>
            <Outlet/>
        </div>
    )
}