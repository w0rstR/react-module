import {useEffect, useState} from "react";
import User from "../User/User";
import {userService} from "../../service/user.service";

export default function UserList(){
    const [userList, setUserList] = useState([])
    useEffect(()=>{
        const data = userService.getAll().then(result=>setUserList(result))
    },[])
    return(
        <div>
            {userList.map(user=><User key={user.id} item={user}/>)}
        </div>
    )
}