import {useState} from "react";

import FormUpdate from "../FormUpdate/FormUpdate";
import s from './Car.module.css'


export default function Car({item, deleteCar, updateCar}) {
    const {id, model, price, year} = item

    const [carInput, setCarInput] = useState(false)

    return (
        <div className={s.container}>
            <div className={s.item}>Id: {id}</div>
            <div className={s.item}>Model: {model}</div>
            <div className={s.item}>Price: {price}</div>
            <div className={s.item}>Year: {year}</div>
            <button onClick={() => deleteCar(id)} className={s.btn}>Delete</button>
            <button onClick={() => setCarInput(!carInput)} className={s.btn}>Update</button>
            {carInput ? <FormUpdate item={item} updateCar={updateCar}/> : null}
        </div>
    )
}