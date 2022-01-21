import {useEffect, useState} from "react";
import {carService} from "../../service/car.service";
import Car from "../Car/Car";
import s from './CarList.module.css'
export default function CarList({car,deleteCar}){

    const [carList,setCarList]=useState([])

    useEffect(()=>{
        carService.getAll().then(value => setCarList(value))
    },[car])

    return(
        <div className={s.container}>
            {carList ? carList.map(car=><Car key={car.id} item={car} deleteCar={deleteCar}/>) : null}
        </div>
    )
}