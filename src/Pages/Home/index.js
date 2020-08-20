import React from 'react'

import useStateContext from '../../store/useStateContext'
import { INCREMENT, DECREMENT } from '../../store/types'
import './style.scss'

const Home = () => {
    const { state, dispatch } = useStateContext()

    return (
        <div className='container'>
            <div className='count'>
                <h1>Count : {state.count}</h1>
                <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
                <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
            </div>
        </div>
    )
}

export default Home
