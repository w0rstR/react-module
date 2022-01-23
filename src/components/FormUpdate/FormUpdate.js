import {useForm} from "react-hook-form";
import {useState} from "react";

import s from './FormUpdate.module.css'

export default function FormUpdate({item, updateCar}) {
    const {register, handleSubmit, watch, formState: {errors}} = useForm()


    const submit = (data) => {
        updateCar(item.id, data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label className={s.item}>Id: <input value={item.id} type="text" {...register('id')}/></label>
                </div>
                <div><label className={s.item}>Model: <input type="text" {...register('model')}/></label></div>
                <div><label className={s.item}>Price: <input type="text"  {...register('price')}/></label></div>
                <div><label className={s.item}>Year: <input type="text"  {...register('year')}/></label></div>
                <button className={s.btn}>Update car</button>
            </form>
        </div>
    )
}