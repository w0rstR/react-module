import s from './UserDetails.module.css'
import {useEffect, useState} from "react";
import {getUserDetails} from "../../services/service";

export default function UserDetails({idUser,postHendler}){
    const [userDetails,setUserDetails] = useState(null)

    useEffect(()=>{
        const data = getUserDetails(idUser).then(result=>setUserDetails(result))
    },[idUser])


    return(
        <div className={s.user_details_conteiner}>
            {
                userDetails ?
                    <div className={s.user_details}>
                        <div>Id: {userDetails.id}</div>
                        <div>Name: {userDetails.name}</div>
                        <div>Username: {userDetails.username}</div>
                        <div>Email: {userDetails.email}</div>
                        <div className={s.address_block}>
                            <div>Address Block: </div>
                            <ul>
                                <li>{userDetails.address.street}</li>
                                <li>{userDetails.address.suite}</li>
                                <li>{userDetails.address.city}</li>
                                <li>{userDetails.address.zipcode}</li>
                                <li>{userDetails.address.geo.lat}</li>
                                <li>{userDetails.address.geo.lng}</li>
                            </ul>
                        </div>
                        <div>Phone number: {userDetails.phone}</div>
                        <div>Website: {userDetails.website}</div>
                        <div className={s.company_block}>
                            <div>Company block: </div>
                            <ul>
                                <li>{userDetails.company.name}</li>
                                <li>{userDetails.company.catchPhrase}</li>
                                <li>{userDetails.company.bs}</li>
                            </ul>
                        </div>
                        <button onClick={()=>postHendler(idUser)} className={s.btn}>Show posts</button>
                    </div> : null
            }
        </div>
    )
}