import {useReducer} from 'react';

import './App.css';
import InputForm from './Components/InputForm/InputForm';
import CatList from './Components/CatList/CatList';
import DogList from './Components/DogList/DogList';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CAT_ADD':
            console.log(action.payload)
            return {
                ...state,
                catInput: [...state.catInput, action.payload]
            }
        case 'DOG_ADD':
            return {
                ...state,
                dogInput: [...state.dogInput, action.payload]
            }
        case 'CAT_DELETE':
            return {
                ...state,
                catInput: [...state.catInput.filter((_, id) => id !== action.payload)]
            }
        case 'DOG_DELETE':
            return {
                ...state,
                dogInput: [...state.dogInput.filter((_, id) => id !== action.payload)]
            }
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, {catInput: ['Tom'], dogInput: ['Ted']})
    return (
        <div className={'main'}>
            <div className={'wrap'}>
                <InputForm name={'Cat'} add={(data) => dispatch({type: 'CAT_ADD', payload: data})}/>
                <InputForm name={'Dog'} add={(data) => dispatch({type: 'DOG_ADD', payload: data})}/>
            </div>
            <div className={'listContainer'}>
                <CatList state={state.catInput} del={(id) => dispatch({type: 'CAT_DELETE', payload: id})}/>
                <DogList state={state.dogInput} del={(id) => dispatch({type: 'DOG_DELETE', payload: id})}/>
            </div>
        </div>
    );
}

export default App;
