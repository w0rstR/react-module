import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../service/user.service";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import s from './UserPhotosPage.module.css'

export default function UserPhotosPage(){
    const {id} = useParams();
    const [photoList,setPhotoList] = useState([])

    useEffect(()=>{
        userService.getPhotosById(id).then(value => setPhotoList(value))
    },[id])

    return(
        <div className={s.container}>
            {photoList? photoList.map(photo=><PhotoItem key={photo.id} item={photo}/>) :null}
        </div>
    )
}