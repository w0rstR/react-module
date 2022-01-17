import {useEffect, useState} from "react";
import {getUsers} from "../../services/service";
import User from "../User/User";
import Form from "../Form/Form";

export default function UserList(){

    const [users,setUsers]=useState([])
    const [filterUser,setFilterUser]=useState([])

    const [filteredUser,setFilteredUser] = useState()


    const formHendler=(obj)=>{
        setFilter(obj)
    }

    const toggleToRefresh=()=>{
        setFilterUser(users)
    }

    useEffect(()=>{
        const data = getUsers().then(response=>{
            setFilterUser(response)
            setUsers(response)
        })
    },[])


    const setFilter=(obj)=>{
        const {name,username,email}=obj
        let filterArrayOfUsers = [...filterUser]


        if(name!=undefined){
            filterArrayOfUsers=filterArrayOfUsers.filter(user=>{
                if(user.name.toLowerCase().includes(name.toLowerCase())){
                    return user
                }
            })

        }
        if(username!=undefined){
            filterArrayOfUsers=filterArrayOfUsers.filter(user=>{
                if(user.username.toLowerCase().includes(username.toLowerCase())){
                    return user
                }
            })

        }
        if(email!=undefined){

            filterArrayOfUsers=filterArrayOfUsers.filter(user=>{
                if(user.email.toLowerCase().includes(email.toLowerCase())){
                    return user
                }
            })

        }

        setFilterUser(filterArrayOfUsers)
    }

    return(
        <div>
            <Form formHendler={formHendler} toggleToRefresh={toggleToRefresh}/>
            {filterUser.map(user=><User key={user.id} item={user}/>)}
        </div>
    )
}