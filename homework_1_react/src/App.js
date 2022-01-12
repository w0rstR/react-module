
import './App.css';
import UserList from "./components/UserList/UserList";
import PostList from "./components/PostList/PostList";
import CommentList from "./components/CommentList/CommentList";
import {useState} from "react";

function App() {

    const [idUser,setIdUser] =useState(1)

    const idHendler=(id)=>{
        console.log(id)
        setIdUser(id)
    }
  return (
    <div>
        <div className={'header'}>
            <UserList idHendler={idHendler}/>
            <PostList idUser={idUser}/>
        </div>
      <CommentList/>
    </div>
  );
}

export default App;
