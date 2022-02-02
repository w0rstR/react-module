import {createSlice} from "@reduxjs/toolkit";


const todoListSlice = createSlice({
    name:'todoListSlice',
    initialState:{
        todoList:[]
    },
    reducers:{
        createTodo:(state,action)=>{
            state.todoList.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todoList = state.todoList.filter(todo=> todo.id !== action.payload.id)
        },
        setStatus:(state,action)=>{
            state.todoList.forEach(todo=>{
                if(todo.id == action.payload.id){
                    console.log(todo.status)
                    todo.status = !todo.status
                    console.log(todo.status)
                }
            })
        }
    }
})
export const todoListReducer = todoListSlice.reducer
export const {createTodo,deleteTodo,setStatus} =todoListSlice.actions

