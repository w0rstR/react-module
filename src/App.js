
import './App.css';
import InputForm from "./Components/InputForm/InputForm";
import {useReducer} from "react";
import CatList from "./Components/CatList/CatList";
import DogList from "./Components/DogList/DogList";

const reducer=(state,action)=>{
    switch (action.type){
        case 'CAT_ADD':
            return{
                ...state,
                catInput:[...state.catInput,action.payload]
            }
        case 'DOG_ADD':
            return {
                ...state,
                dogInput:[...state.dogInput,action.payload]
            }
    }
}


function App() {
    const [state,dispatch] =  useReducer(reducer,{catInput:['ss','ss'],dogInput:[]})
  return (
    <div className={'main'}>
        <div className={'wrap'}>
            <InputForm name={'Cat'} add={(data)=>dispatch({type:'CAT_ADD',payload:data})}/>
            <InputForm name={'Dog'} add={(data)=>dispatch({type:'DOG_ADD',payload:data})}/>
        </div>
        <div className={'listContainer'}>
            <CatList state={state.catInput} />
            <DogList state={state.dogInput} />
        </div>
    </div>
  );
}

export default App;
