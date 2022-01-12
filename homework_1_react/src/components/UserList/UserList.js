import {getUsers} from "../../services/service";
import {useEffect, useState} from "react";
import User from "../User/User";
import './style.css'

export default function UserList({idHendler}){
    const [userList,setUserList] = useState([])
    useEffect(()=>{
        const resnponse = getUsers().then(result=>setUserList(result))

    },[])
    return(
        <div className={'users-container'}>
            {userList.map(user=><User key={user.id} userId={user.id} userName={user.name} idHendler={idHendler}/>)}
        </div>
    )
}