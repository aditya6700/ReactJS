import React from 'react';
import {ACTIONS} from './App';

export default function Todo({todo, dispatch}) {
    return(
        <>
            <span style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                {todo.name}
            </span>
            <button onClick={() => 
                dispatch({type: ACTIONS.TOGGLE, payload: {id: todo.id}}) }>toggle </button> 
            <button onClick={() => 
                dispatch({type: ACTIONS.DELETE, payload: {id: todo.id}}) }>delete</button> 
        </>
    )    
};
