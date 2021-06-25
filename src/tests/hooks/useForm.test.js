import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
   
    const initialForm = {
        name: 'Sebastián',
        email: 'sebas@gmail.com'
    }

    test('Regresar un formulario por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('cambiar el valor del formulario {name}', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Messi'
                }
            });
        });

        const [ formValues ] = result.current;
        expect(formValues).toEqual({...initialForm, name: 'Messi'});

    });

    test('Restablecer formulario - reset()', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Messi'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialForm);

    });

});
