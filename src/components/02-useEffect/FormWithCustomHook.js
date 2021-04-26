import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({ name: '', email: '', password: '' });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    useEffect(() => {
        console.log('cambió email');
    }, [email]);

    return (
        <form onSubmit = { handleSubmit }>

           <h1>Form con FormWithCustomHook</h1>
           <hr/>

            <div className="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" name="name" className="form-control" placeholder="Ingrese su nombre" autoComplete="off" value={ name } onChange = { handleInputChange } />
            </div>

            <div className="form-group col-md-6 mt-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control" placeholder="Ingrese su correo electrónico" autoComplete="off" value={ email } onChange = { handleInputChange } />
            </div>

            <div className="form-group col-md-6 mt-3">
                <label>Contraseña</label>
                <input type="password" name="password" className="form-control" placeholder="Ingrese su contraseña" value={ password } onChange = { handleInputChange } />
            </div>

            <button type="submit" className="btn btn-success mt-4">Enviar</button>

        </form>
    )
}
