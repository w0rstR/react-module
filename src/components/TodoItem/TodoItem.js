import {useDispatch} from 'react-redux';

import {deleteTodo, setStatus} from '../store/todolist.conf';
import s from './TodoItem.module.css'

export default function TodoItem({item}) {

    const dispatch = useDispatch()
    const {todo, id, status} = item;

    const checked = () => {
        dispatch(setStatus({id}))
    }

    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <div>
                    <input defaultChecked={status} type='checkbox' id='scales' name='scales'
                           onChange={() => checked()}/>
                </div>
                <li className={status ? s.line : s.todo}>{todo}</li>
            </div>
            <div>
                <button className={s.btn} onClick={() => dispatch(deleteTodo({id}))}>delete</button>
            </div>
        </div>
    )
}