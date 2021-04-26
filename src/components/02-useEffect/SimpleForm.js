import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '' });

    const { name, email } = formState;

    useEffect(() => console.log('Efecto de start'), []);
    useEffect(() => { }, [formState]);
    useEffect(() => { }, [email]);

    const handleInputChange = ({ target }) => setFormState({ ...formState, [target.name]: target.value });

    return (
        <>
           <h1>Hook de useEffect</h1>
           <hr/>

            <div className="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" name="name" className="form-control" placeholder="Ingrese su nombre" autoComplete="off" value={ name } onChange = { handleInputChange } />
            </div>

            <div className="form-group col-md-6 mt-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control" placeholder="Ingrese su correo electrónico" autoComplete="off" value={ email } onChange = { handleInputChange } />
            </div>

            { name === 'Sebastián Corrales Sepúlveda' && <Message/> }

        </>
    )
}
