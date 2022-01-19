import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {userService} from "../../service/user.service";
import Post from "../../components/Post/Post";

import s from './UserPostPage.module.css'

export  default function UserPostPage(){
    const {state} = useLocation()
    const [postList,setPostList] = useState([])

    useEffect(()=>{
        userService.getPostById(state).then(value => setPostList(value))
    },[state])
    return(
        <div className={s.container}>
            { postList && postList.map(post=><Post key={post.id} item={post}/>)}
        </div>
    )
}