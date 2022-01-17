import {useEffect, useState} from "react";
import {getPosts} from "../../services/services";
import Post from "../Post/Post";
import s from './PostList.module.css'

export default function PostList({idPost}){
    const [postList,setPostList] = useState([])
    useEffect(()=>{
        const data = getPosts(idPost).then(response=>setPostList(response))
    },[idPost])
    return(
        <div className={s.post}>
            {postList.map(post=><Post key={post.id} postId={post.id} title={post.title} body={post.body}/>)}
        </div>
    )
}