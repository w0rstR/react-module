import {useEffect, useState} from "react";
import {getPosts} from "../../services/service";
import Post from "../Post/Post";
import './style.css'

export default function PostList(props){
    const [postList,setPostList] = useState([])
    useEffect(()=>{
        const data = getPosts(props.idUser).then(response=>setPostList(response))
    },[props.idUser])
    return(
        <div className={'post-container'}>
            {postList.map(post=><Post key={post.id} title={post.title} idHendler={props.idHendler}/>)}
        </div>
    )
}