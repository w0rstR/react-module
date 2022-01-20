import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import s from './PostPage.module.css'
import PostItem from "../../components/PostItem/PostItem";
import {postService} from "../../service/post.service";

export default function PostPage(){
    const [postList, setPostList] = useState([])

    useEffect(()=>{
        postService.getAll().then(value => setPostList(value))
    },[])
    return(
        <div className={s.container}>
            <div className={s.posts}>
                {postList.map(post=><PostItem key={post.id} item={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}