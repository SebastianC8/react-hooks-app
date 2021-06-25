import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
   
    test('Debe retornar la información por defecto', () => {

        const { result } = renderHook(() => useFetch(`https://reqres.in/api/users?page=2`));

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
        
    });

    test('Debe tener la info deseada', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/api/users?page=2`));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(typeof data).toBe('object');
        
    });

    test('', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2`));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('Algo falló');
        
    });

});
