import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const LayoutEffect = () => {

    const { state, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    /**
     * Si existe la data, asigna los valores de data
     */
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout efect - breaking bad</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p ref = { pTag } className="mb-0">{quote}</p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button className='btn btn-primary' onClick = { increment }>Siguiente frase</button>

        </div>
    )
}
