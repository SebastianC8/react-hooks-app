import { React } from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Pruebas en TodoList', () => {

    const demoTodos = [
        { id: 1, desc: 'Aprender React', done : false },
        { id: 2, desc: 'Aprender Python', done : false }
    ];

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos = { demoTodos }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    );

    test('Show ok', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener 2 <TodoListItem/>', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));

    });

});