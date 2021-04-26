import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const style = { marginRight: '10px' }

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <div>
            <h1>Counter con Hook: { state } </h1>
            <hr/>

            <button onClick = { () => increment(3) } className="btn btn-success" style = { style }>+1</button>
            <button onClick = { () => reset() } className="btn btn-dark" style = { style }>Reset</button>
            <button onClick = { () => decrement(2) } className="btn btn-primary">-1</button>
        </div>
    )
}