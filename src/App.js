import './App.css';
import {useReducer} from 'react';

import CounterComponent from './CounterComponent/CounterComponent';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FIRST_INC':
            return {
                ...state,
                firstCount: state.firstCount + 1
            }
        case 'FIRST_DEC':
            return {
                ...state,
                firstCount: state.firstCount - 1
            }
        case 'FIRST_RES':
            return {
                ...state,
                firstCount: 0
            }
        case 'SECOND_INC':
            return {
                ...state,
                secondCount: state.secondCount + 1
            }
        case 'SECOND_DEC':
            return {
                ...state,
                secondCount: state.secondCount - 1
            }
        case 'SECOND_RES':
            return {
                ...state,
                secondCount: 0
            }
        case 'THIRD_INC':
            return {
                ...state,
                thirdCound: state.thirdCound + 1
            }
        case 'THIRD_DEC':
            return {
                ...state,
                thirdCound: state.thirdCound - 1
            }
        case 'THIRD_RES':
            return {
                ...state,
                thirdCound: 0
            }
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, {firstCount: 0, secondCount: 0, thirdCount: 0})

    return (
        <div className={'container'}>
            <CounterComponent state={state.firstCount}
                              inc={() => dispatch({type: 'FIRST_INC'})}
                              dec={() => dispatch({type: 'FIRST_DEC'})}
                              res={() => dispatch({type: 'FIRST_RES'})}/>
            <CounterComponent state={state.secondCount}
                              inc={() => dispatch({type: 'SECOND_INC'})}
                              dec={() => dispatch({type: 'SECOND_DEC'})}
                              res={() => dispatch({type: 'SECOND_RES'})}/>
            <CounterComponent state={state.thirdCount}
                              inc={() => dispatch({type: 'THIRD_INC'})}
                              dec={() => dispatch({type: 'THIRD_DEC'})}
                              res={() => dispatch({type: 'THIRD_RES'})}/>
        </div>
    );
}

export default App;
