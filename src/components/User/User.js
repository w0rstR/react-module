import s from './User.module.css'

import {Link} from "react-router-dom";

export default function User({item}){
    const {id,name} = item
    return(
        <div className={s.container}>
            <Link to={id.toString()} className={s.item} state={item}>
                <p className={s.item}>{id}-{name}</p>
                <Link to={`${id.toString()}/albums`}>
                    <p>Show Albums</p>
                </Link>
            </Link>
        </div>
    )
}