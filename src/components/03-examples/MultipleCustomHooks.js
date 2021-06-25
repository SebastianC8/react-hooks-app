import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    /**
     * Si existe la data, asigna los valores de data
     */
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad quotes - useFetch</h1>
            <hr/>

            {
                loading
                ?
                (
                    <div className="alert alert-info text-center">Loading...</div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer mt-0">{author}</footer>
                    </blockquote>
                )
            }

            <button className='btn btn-primary' onClick = { increment }>Siguiente frase</button>

        </div>
    )
}
