import {useEffect, useState} from "react";

import s from './PostList.module.css'
import {getPosts} from "../../services/service";
import Post from "../Post/Post";


export default function PostList({idPost}) {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        const data = getPosts(idPost).then(response => setPostList(response))
    }, [idPost])
    return (
        <div className={s.post}>
            {postList.map(post => <Post key={post.id} postId={post.id} title={post.title} body={post.body}/>)}
        </div>
    )
}