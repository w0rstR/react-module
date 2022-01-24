import {useEffect, useState} from "react";
import {episodeService} from "../services/episode.service";
import Episode from "../components/Episode/Episode";
import s from './EpisodePage.module.css'
import {Outlet} from "react-router-dom";

export default function EpisodePage(){
    const [episodeList,setEpisodeList] = useState([])

    useEffect(()=>{
        episodeService.getAll().then(value => setEpisodeList(value.results))
    },[])

    return(
        <div className={s.container}>
            {episodeList ? episodeList.map(episode=><Episode key={episode.id} item={episode}/>) : null}
        </div>
    )
}