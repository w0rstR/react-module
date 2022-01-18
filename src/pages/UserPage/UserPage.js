
import s from './UserPage.module.css'
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../service/user.service";
import User from "../../components/User/User";

export default function UserPage(){
    const [userList, setUserList] = useState([])
    useEffect(()=>{
        const data = userService.getAll().then(result=>setUserList(result))
    },[])
    return(
        <div className={s.container}>
            <div className={s.userslist}>{userList.map(user=><User key={user.id} item={user}/>)}</div>
            <div className={s.outlet}>
                <Outlet/>
            </div>
        </div>
    )
}