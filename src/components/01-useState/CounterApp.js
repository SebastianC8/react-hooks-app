import React, { useState } from 'react';
import './counter.css';

/**
 * En este ejercicio, se aprecia la importancia del buen uso del state.
 * Debido a que al querer modificar solo uno de los valores del state, perdemos el valor de los otros que hayamos definido.
 * Importante usar el operador [...] para hacer una copia del array original y poder modificar alguna de sus propiedades
 */
export const CounterApp = () => {

    const [state, setState] = useState({ counter1: 10, counter2: 20 });

    const { counter1, counter2 } = state;

    return (
        <div>
            <h1>Counter uno: { counter1 }</h1>
            <h1>Counter dos: { counter2 }</h1>
            <hr/>

            <button className="btn btn-primary" onClick = { () => setState({ ...state, counter1: counter1 + 1 }) }>Counter uno: +1</button>
        </div>
    )
}
