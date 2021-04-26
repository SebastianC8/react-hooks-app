import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { state, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    /**
     * Gracias al useMemo(), la función procesoPesado(parm) se ejecutará únicamente cuando el valor de la variable state haya cambiado.
     */
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

    return (
        <div>
            <h3>MemoHook: <small>{ state }</small></h3>
            <hr/>

            <p> { memoProcesoPesado } </p>

            <button className="btn btn-primary" onClick = { increment } >+1</button>
            <button className="btn btn-outline-primary ml-3" onClick = { () => setShow(!show) }>Mostrar/Ocultar { JSON.stringify(show) }</button>
        </div>
    )
}