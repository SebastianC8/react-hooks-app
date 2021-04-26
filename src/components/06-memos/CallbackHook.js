import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(() => setCounter(c => c + 1), [setCounter]);

    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr/>

            <p>Contador: { counter } </p>
            <ShowIncrement increment = { increment } />
        </div>
    )
}
