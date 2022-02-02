import {createSlice} from '@reduxjs/toolkit';


const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState: {
        todoList: [],
        count: null,
        completed: null
    },
    reducers: {
        createTodo: (state, action) => {
            state.todoList.push(action.payload)
            state.count++
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id)
            state.count--
        },
        setStatus: (state, action) => {
            state.todoList.forEach(todo => {
                if (todo.id == action.payload.id) {
                    todo.status = !todo.status
                    todo.status ? state.completed++ : state.completed--
                }
            })
        }
    }
})
export const todoListReducer = todoListSlice.reducer
export const {createTodo, deleteTodo, setStatus} = todoListSlice.actions

