import {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";
import s from './EpisodePage.module.css'
import NavigationButton from "../../components/NavigationButton/NavigationButton";

export default function EpisodePage({episodes}) {
    const [episodeList, setEpisodeList] = useState([])
    const {id} = useParams();

    useEffect(async () => {
        const res = await episodeService.getById(id).then(value => {
            setEpisodeList(value.results)
        })
    }, [id])

    return (
        <div>
            <div className={s.container}>
                {episodeList ? episodeList.map(episode => <Episode key={episode.id} item={episode}/>) : null}
            </div>
            <div className={s.wrap}>
                <NavigationButton id={id}/>
            </div>
        </div>
    )
}