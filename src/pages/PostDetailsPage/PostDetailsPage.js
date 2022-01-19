import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../service/post.service";
import s from "../UserDetailsPage/UserDetailsPage.module.css";

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
        <div>
            {postDetails ?
            <div>
               <div>{postDetails.id}</div>
                <div>{postDetails.title}</div>
                <div>{postDetails.body}</div>
                <Link  to={'comments'} state={id}>Go to comments</Link>
                <Outlet/>
            </div> : null}
        </div>
    )
}