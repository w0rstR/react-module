import './style.css'
import FlightDetails from "../FlightDetails/FlightDetails";
import {useState} from "react";
export default function Flight({item}){
    const {mission_name,links:{mission_patch},flight_number,launch_year} = item;

    const [showDetails,setShowDetails] = useState(false)
   return(
       <div className={'flight-item'}>
           <h2>{mission_name}</h2>
           <h3>{launch_year}</h3>
           <img className={'flight-img'} src={mission_patch} alt="Flight"/>
           <button onClick={()=>setShowDetails(!showDetails)} className={'btn-details'}>Show details</button>
           {showDetails ? <FlightDetails id={flight_number}/> : null}
       </div>
   )
}