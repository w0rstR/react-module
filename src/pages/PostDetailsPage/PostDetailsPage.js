import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../service/post.service";
import s from './PostDetailsPage.module.css'

export default function PostDetailsPage(){
    const {id} = useParams();
    const {state} = useLocation();
    const [postDetails,setPostDetails]=useState({})

    useEffect(()=>{
        if(state){
            setPostDetails(state)
            return
        }
        postService.getById(id).then(value => setPostDetails(value))
    },[id])
    return(
        <div className={s.block}>
            {postDetails ?
                <div className={s.wrap}>
                    <div className={s.container}>
                        <div>Post id: {postDetails.id}</div>
                        <div>Title: {postDetails.title}</div>
                        <div>Body: {postDetails.body}</div>
                        <Link  to={'comments'} state={id}>Go to comments</Link>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div> : null}
        </div>
    )
}