
import './App.css';
import {useEffect, useState} from "react";
import UserDetails from "./components/UserDetails/UserDetails";
import UserList from "./components/UserList/UserList";
import PostList from "./components/PostList/PostList";

function App() {

    const [idUser,setIdUser]=useState(1)
    const [postId,setPostId] =useState(1)

    const idHeandler=(id)=>{
        setIdUser(id)
    }

    const postHendler=(id)=>{
        setPostId(id)
    }



    return (

    <div className="App">
        <div className="header">
            <UserList idHeandler={idHeandler}/>
            <UserDetails idUser={idUser} postHendler={postHendler}/>
        </div>
        <PostList idPost={postId}/>
    </div>
  );
}

export default App;
