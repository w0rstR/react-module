import {useForm} from "react-hook-form";
import s from './InputForm.module.css'

export default function InputForm({name,add}){
    const {register, handleSubmit, watch, formState: {errors}} = useForm()

    const submit=(data)=>{
        add(data[name])
    }
    return(
        <div>
            <form  onSubmit={handleSubmit(submit)} className={s.form}>
                <div><label className={s.item}>{name} <input type='text' {...register(`${name}`)}/></label></div>
                <button className={s.btn}>Add</button>
            </form>
        </div>
    )
}