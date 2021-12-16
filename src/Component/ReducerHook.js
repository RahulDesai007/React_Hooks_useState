import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {

    if(action.type === 'INCREMENT'){
        return 'Bitcoin';
    }

    if(action.type === 'DECREMENT'){
        return 'Ethereum';
    }

    if (action.type === 'CHANGE'){
      return 'Shiba'
    }
    return state
}

const ReducerHook = () => {


    const [state, dispatch] = useReducer(reducer, initialState)

    
    return (
        <div>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>+</button>
            <h1>{state}</h1>
            <button  onClick={()=> dispatch({type:"DECREMENT"})}>-</button>
            <h1>{state}</h1>
            <button  onClick={()=> dispatch({type:"CHANGE"})}>Click me!</button>
        </div>
    )
}

export default ReducerHook
