import s from './Episode.module.css'
import {Link} from "react-router-dom";
export default function Episode({item}){
    const {id,name,air_date,episode,characters} = item
    return(
        <div className={s.wrap}>
            <div className={s.container}>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Air date: {air_date}</div>
                <div>Episode: {episode}</div>
                <div className={s.link}>
                    <Link to={`details/${id}`} state={characters}>Go to details episode</Link>
                </div>
            </div>

        </div>
    )
}