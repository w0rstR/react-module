import {useEffect, useState} from "react";
import {getFlightDetails} from "../../services/service";
import './style.css'
export default function FlightDetails({id}){
    const [details,setDetails] = useState({})

    useEffect(()=>{
       const data = getFlightDetails(id).then(response=>setDetails(response))
    },[id])

    return(
        <div className={'flight-details'}>
            <div>Rocket name: {details.name}</div>
            <div>Launch date utc: {details.launch_utc}</div>
            <div>launch date local: {details.launch_local}</div>
            <div>Launch site: {details.siteId}</div>
        </div>
    )
}