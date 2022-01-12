import {useEffect, useState} from "react";
import {getData} from "../../services/service";
import Flight from "../Flight/Flight";
import './style.css'

export default function FlightList(){

    const [flightsList, setFlightsList] = useState([])

    useEffect(()=>{
       const data = getData().then(result=>result.filter(flight=>flight.launch_year !== '2020')).then(res=>setFlightsList(res))
    },[])
    return(
        <div className={'flights-container'}>
            {flightsList.map(flight=> <Flight key={flight.flight_number} item={flight}/>)}
        </div>
    )
}