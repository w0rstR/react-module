import {useEffect, useState} from "react";
import {postService} from "../../service/post.service";
import PostItem from "../../components/PostItem/PostItem";
import {Outlet} from "react-router-dom";

import s from './PostPage.module.css'

export default function PostPage(){
    const [postList, setPostList] = useState([])

    useEffect(()=>{
        postService.getAll().then(value => setPostList(value))
    },[])
    return(
        <div className={s.container}>
            <div>
                {postList.map(post=><PostItem key={post.id} item={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}