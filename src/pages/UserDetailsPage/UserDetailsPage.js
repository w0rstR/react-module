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
                        <div>Id: {userDetails.id}</div>
                        <div>Name: {userDetails.name}</div>
                        <div>Username: {userDetails.username}</div>
                        <div>Email:  {userDetails.email}   </div>
                        {/*<div className={s.address_block}>*/}
                        {/*    <div>Address Block:</div>*/}
                        {/*    <ul>*/}
                        {/*        <li>{userDetails.address.street}</li>*/}
                        {/*        <li>{userDetails.address.suite}</li>*/}
                        {/*        <li>{userDetails.address.city}</li>*/}
                        {/*        <li>{userDetails.address.zipcode}</li>*/}
                        {/*        <li>{userDetails.address.geo.lat}</li>*/}
                        {/*        <li>{userDetails.address.geo.lng}</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div>Phone number: {userDetails.phone}</div>*/}
                        {/*<div>Website: {userDetails.website}</div>*/}
                        {/*<div className={s.company_block}>*/}
                        {/*    <div>Company block:</div>*/}
                        {/*    <ul>*/}
                        {/*        <li>{userDetails.company.name}</li>*/}
                        {/*        <li>{userDetails.company.catchPhrase}</li>*/}
                        {/*        <li>{userDetails.company.bs}</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <Link to={'posts'} state={id}>Go to posts</Link>

                    </div> : null
            }

            <Outlet/>
        </div>
    )
}