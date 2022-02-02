import {useSelector} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import s from './TodoList.module.css'

export default function TodoList(){
    const {todoList} = useSelector(state=> state['todoListReducer'])

    return(
        <div className={s.container}>
            <div className={s.wrap}>
                <h2 className={s.header}>Todo List</h2>
                {todoList ? todoList.map((todoItem,i)=> <TodoItem key={i} item={todoItem}/>) : null}
            </div>
        </div>
    )
}