import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {episodeService} from "../../services/episode.service";

export default function NavigationButton({id}){

    const [next,setNext] = useState(1)
    useEffect(()=>{
        episodeService.getById(id).then(value => {
            if(value.info.next){
                const res = value.info.next.slice(-1)
                setNext(res)
            }else {
                setNext(1)
            }
        })
    },[id])
    return(
        <div>
            <Link to={`/episode/${(next)}`}>Show next page</Link>
        </div>
    )
}