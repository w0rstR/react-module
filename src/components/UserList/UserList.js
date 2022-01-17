import {useEffect, useState} from "react";

import {getUsers} from "../../services/service";
import User from "../User/User";
import s from './UserList.module.css'

export default function UserList({idHeandler}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const response = getUsers().then(result => setUsers(result))
    }, [])

    return (
        <div className={s.user_list}>
            {users.map(user => <User key={user.id} item={user} idHeandler={idHeandler}/>)}
        </div>
    )
}