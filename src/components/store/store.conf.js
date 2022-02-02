import {configureStore} from "@reduxjs/toolkit";
import {todoListReducer} from "./todolist.conf";


const store = configureStore({
    reducer:{
        todoListReducer:todoListReducer
    }
})

export default store