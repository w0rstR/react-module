import s from './Form.module.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export default function Form(){
    const {handleSubmit,register,reset,setValue} = useForm()
    const dispatch = useDispatch()

    const submit=(data)=>{
        console.log(data)

        reset()
    }

    const update=(data)=>{
        console.log(data)

        reset()
    }

    useEffect(()=>{
       if(true){
           setValue('id',`${carForm.id}`)
           setValue('model',`${carForm.model}`)
           setValue('price',`${carForm.price}`)
           setValue('year',`${carForm.year}`)
       }
    },[])


    return(
        <div>
            { carForm ?
                <div>
                    <form onSubmit={handleSubmit(update)} className={s.container}>
                        <div className={s.item}><label>Id:<input type="text" {...register('id')}/></label></div>
                        <div className={s.item}><label>Model:<input type="text" {...register('model')}/></label></div>
                        <div className={s.item}><label>Price:<input type="text" {...register('price')}/></label></div>
                        <div className={s.item}><label>Year:<input type="text" {...register('year')}/></label></div>
                        <div className={s.item}><button className={s.btn}>
                            Update
                        </button></div>
                    </form>
                </div> :
                <form onSubmit={handleSubmit(submit)} className={s.container}>
                    <div className={s.item}><label>Model:<input type="text" {...register('model')}/></label></div>
                    <div className={s.item}><label>Price:<input type="text" {...register('price')}/></label></div>
                    <div className={s.item}><label>Year:<input type="text" {...register('year')}/></label></div>
                    <div className={s.item}><button className={s.btn}>
                        Add
                    </button></div>
                </form>}
        </div>
    )
}