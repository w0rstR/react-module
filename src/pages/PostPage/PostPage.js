import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {userService} from "../../service/user.service";
import Post from "../../components/Post/Post";

export  default function PostPage(){
    const {state} = useLocation()
    const [postList,setPostList] = useState([])

    useEffect(()=>{
        userService.getPostById(state).then(value => setPostList(value))
    },[state])
    return(
        <div>
            { postList && postList.map(post=><Post key={post.id} item={post}/>)}
        </div>
    )
}