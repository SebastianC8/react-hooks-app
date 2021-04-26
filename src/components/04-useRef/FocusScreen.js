import { useRef } from 'react';
import '../02-useEffect/effects.css';

/**
 * Referencia de elementos HTML, objetos, valores...etc
 */
export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => inputRef.current.select();

    return (
        <div>
            <h1>Focus scren - useRef</h1>
            <hr/>

            <input ref = { inputRef } className="form-control col-md-6" placeholder="Nombre"/>

            <button className="btn btn-outline-primary mt-5" onClick = { handleClick }>Focus</button>
        </div>
    )
}
