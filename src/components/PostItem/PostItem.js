import {Link} from "react-router-dom";

import s from './PostItem.module.css'

export default function PostItem({item}){
    const {id,title} = item
    return(
        <div className={s.item}>
            <Link  to={id.toString()} state={item}><p className={s.link}>{id} - {title}</p></Link>
        </div>
    )
}