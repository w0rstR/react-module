import './App.css';
import UserList from "./components/UserList/UserList";
import PostList from "./components/PostList/PostList";
import CommentList from "./components/CommentList/CommentList";
import {useState} from "react";

function App() {

    const [idUser,setIdUser] =useState(1)
    const [idComment,setIdComment] = useState(1)

    const idHendler=(id)=>{
        setIdUser(id)
    }

    const idHendlerOfComment=(id)=>{
        setIdComment(id)
    }


  return (
    <div>
        <div className={'header'}>
            <UserList idHendler={idHendler}/>
            <PostList idUser={idUser} idHendler={idHendlerOfComment}/>
        </div>
      <div className={'footer'}>
          <CommentList idComment={idComment}/>
      </div>
    </div>
  );
}

export default App;
