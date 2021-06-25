import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
   
    test('Debe retornar valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('Debe retornar counter = 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect(result.current.state).toBe(100);

    });

    test('Prueba función increment()', () => {
        
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => increment());

        const { state } = result.current;

        expect(state).toBe(101);

    });

    test('Prueba función decrement()', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => decrement());

        const { state } = result.current;

        expect(state).toBe(99);

    });

    test('Prueba función reset()', () => {

        const { result } = renderHook(() => useCounter(100));
        const { reset } = result.current;

        act(() => reset());

        const { state } = result.current;

        expect(state).toBe(100);

    });
    
});
