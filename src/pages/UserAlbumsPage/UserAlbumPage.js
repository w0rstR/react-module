import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../service/user.service";
import s from './UserAlbumsPage.module.css'

export default function UserAlbumsPage(){
    const {id} = useParams()
    const [albums,setAlbums] = useState({})
    useEffect(()=>{
        userService.getAlbumById(id).then(value => setAlbums(value))
    },[id])
    return(
        <div className={s.wrap}>
            {albums ?
            <div className={s.container}>
                <div className={s.item}>Albums id: {albums.id}</div>
                <div className={s.item}>Title: {albums.title}</div>
                <Link to={`photos`}><p className={s.link}>Show photos</p></Link>
            </div> : null}
            <Outlet/>
        </div>
    )
}