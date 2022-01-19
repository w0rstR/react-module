import {useEffect, useState} from "react";
import {userService} from "../../service/user.service";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import s from './UserDetailsPage.module.css'

export default function UserDetailsPage(){
    const {id}=useParams();
    const [userDetails, setUserDetails] = useState({})
    const {state}=useLocation();

    useEffect(()=>{
        if(state){
            setUserDetails(state)
            return
        }
        userService.getById(id).then(value => value.data).then(value=>setUserDetails(...value))
    },[id])
    return(
        <div>
            {
                userDetails ?

                    <div className={s.user_details}>
                        <div className={s.item}>Id: {userDetails.id}</div>
                        <div className={s.item}>Name: {userDetails.name}</div>
                        <div className={s.item}>Username: {userDetails.username}</div>
                        <div className={s.item}>Email:  {userDetails.email}   </div>
                        <Link className={s.item} to={'posts'} state={id}>Go to posts</Link>

                    </div> : null
            }

            <Outlet/>
        </div>
    )
}