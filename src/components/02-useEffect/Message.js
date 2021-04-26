import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coords;

    useEffect(() => {

        /**
         * Cuerpo del effect
         * Se ejecuta cuando se ejecuta el componente
         */
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        /**
         * Se ejecuta cuando se desmonta el componente
         */
        return () => window.removeEventListener('mousemove', mouseMove);

    }, []);

    return (
        <div>
            <h3>Desde message</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
