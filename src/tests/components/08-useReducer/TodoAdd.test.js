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

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('Debe llamar handleAddTodo', () => {
        
        const descripcion = 'Aprender JAVA';

        wrapper.find('input').simulate('change', {
            target: {
               value: descripcion,
               name:  'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: descripcion,
            done: false
        });

    });

});
