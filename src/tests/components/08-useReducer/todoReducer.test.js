import { todoReducer } from "../../../components/08-useReducer/todoReducer";

const demoTodos = [{
    id: 1,
    desc: 'Aprender react',
    done : false
}, {
    id: 2,
    desc: 'Aprender Python',
    done : false
}];

describe('Pruebas en todoReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    });

    test('Debe agregar un todo', () => {
        
        const payload = { id: 3, desc: 'bigdata', done: true };
        const state = todoReducer(demoTodos, { type: 'add', payload });

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, payload]);

    });

    test('Debe borrar un todo', () => {
        
        const id = 1;
        const state = todoReducer(demoTodos, { type: 'delete', payload: id });

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);

    });

    test('Debe borrar un todo', () => {

        const id = 1;
        const state = todoReducer(demoTodos, { type: 'toggle', payload: id });

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

    });

});
