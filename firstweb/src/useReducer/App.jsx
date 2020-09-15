import React, {useReducer} from 'react';

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.INCREMENT:
            return( {count: state.count+1});
        case ACTIONS.DECREMENT:
            return( {count: state.count-1});
        default:
            return state
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, {count:0});

    return(
        <>
            <button onClick={ () => dispatch({type: ACTIONS.INCREMENT}) }> inc </button>
            <h1> {state.count} </h1>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT})}> dec </button>
        </>
    );
};
 