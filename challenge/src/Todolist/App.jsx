import React, {useReducer, useState} from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD: 'add_todo',
    TOGGLE: 'togg_todo',
    DELETE: 'del_todo',
}

const reducer = (todo, action) => {
    switch(action.type){
        case ACTIONS.ADD:
            return( [...todo, newTodo(action.payload.name)]);
        case ACTIONS.TOGGLE:
            return( todo.map( todo => {
                if (todo.id === action.payload.id) {
                    return{ ...todo, complete: !todo.complete}
                }
                return todo
            }));
        case ACTIONS.DELETE:
            return( todo.filter( todo => todo.id !== action.payload.id));
        default:
            return todo
    }
}

const newTodo = (name) => {
    return( {id: Date.now(), name: name, complete: false})
}



export default function App() {
    const [todo, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleEvents = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD, payload: {name: name}});
        setName('');
    }

    console.log(todo); // check the console

    return(
        <>
             <form onSubmit={handleEvents}>
                 <input type="text" value={name} 
                 onChange={e => setName(e.target.value) } />
             </form>
             {todo.map(todo => {
                 return <Todo key={todo.id} 
                 todo={todo} 
                dispatch={dispatch}  
                 />
             })}
        </>
    );
};
 