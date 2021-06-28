import { React } from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';

describe('Pruebas en TodoListItem', () => {
    
    const demoTodos = [
        { id: 1, desc: 'Aprender react', done : false },
        { id: 2, desc: 'Aprender Python', done : false }
    ];

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo = { demoTodos[0] }
            index = { 0 }
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />
    );

    test('Show ok', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('handleDelete()', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('handleToggle()', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('Texto ok', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);

    });

    test('Clase complete si done es true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo = { todo }
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

});
