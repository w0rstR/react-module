import {useState} from "react";
import {useForm} from "react-hook-form";

export default function Form({onSubmit}){

    const {register,handleSubmit,watch,formState:{errors}} = useForm()

    const submit=(data)=>{
        onSubmit(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" {...register('model')}/></label></div>
                <div><label>Price: <input type="text"  {...register('price')}/></label></div>
                <div><label>Year: <input type="text"  {...register('year')}/></label></div>
                <button>Create a new car</button>
            </form>
        </div>
    )
}