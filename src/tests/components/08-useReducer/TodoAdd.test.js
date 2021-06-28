import { React } from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
    
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo = { handleAddTodo }/>);

    test('should show ok', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('NO debe llamar handleAddTodo', () => {

    });

});
