import {useState} from "react";
import s from './Form.module.css'

export default function Form({formHendler,toggleToRefresh}){
    const [name,setName] = useState()
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()


    const sendValue=()=>{
        formHendler({name,username,email})
        refreshValue()
    }

    const refreshValue=()=>{
        setName('')
        setUsername('')
        setEmail('')
    }


    return(
        <div className={s.container}>
            <label className={s.item}>Name: <input type="text" onChange={(e=>setName(e.currentTarget.value))} value={name}/></label>
            <label className={s.item}>UserName: <input type="text" onChange={(e=>setUsername(e.currentTarget.value))} value={username}/></label>
            <label className={s.item}>Email: <input type="text" onChange={(e=>setEmail(e.currentTarget.value))} value={email}/></label>
            <button className={s.btn} onClick={()=>sendValue()}>Filter</button>
            <button className={s.btn} onClick={()=>toggleToRefresh()}>Refresh</button>
        </div>
    )
}