import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createTodo} from "../store/todolist.conf";
import s from './Form.module.css'

export default function Form(){
    const {handleSubmit, register, reset} = useForm()
    const dispatch = useDispatch();

    const create=(data)=>{
        console.log({...data,id:new Date().getTime()})
        dispatch(createTodo({...data,id:new Date().getTime(),status:false}))
        reset()
    }



    return(
        <div className={s.container}>
            <div>
                <form onSubmit={handleSubmit(create)}>
                    <div className={s.wrap}>
                        <label>
                            <input type="text" {...register('todo')} placeholder={'Todo.....'}/>
                        </label>
                        <button className={s.btn}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}