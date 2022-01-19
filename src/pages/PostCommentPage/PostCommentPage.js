import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../service/post.service";
import Comments from "../../components/Comments/Comments";

export default function PostCommentPage(){
    const {state} = useLocation();
    const [commentsList,setCommentsList] = useState([])

    useEffect(()=>{
        console.log(state)
        postService.getCommentById(state).then(value => setCommentsList(value))
    },[state])
    return(
        <div>
            { commentsList && commentsList.map(comment=><Comments key={comment.id} item={comment}/>)}
        </div>
    )
}