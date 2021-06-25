import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const formatArray = {
        id : 987,
        name: 'Anonymous'
    };

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary" onClick = { () => setUser(formatArray) }>Asignar</button>
        </div>
    )
}
