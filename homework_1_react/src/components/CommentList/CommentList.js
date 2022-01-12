import {useEffect, useState} from "react";
import {getComments} from "../../services/service";
import Comment from "../Comment/Comment";
import './style.css'

export default function CommentList({idComment}){
    const [commentList, setCommentList] = useState([])
    useEffect(()=>{
        const data = getComments(idComment).then(response=>setCommentList(response))
    },[idComment])
    return(
        <div className={'comment-container'}>
            {commentList.map(comment=><Comment key={comment.id} data={comment}/>)}
        </div>
    )
}