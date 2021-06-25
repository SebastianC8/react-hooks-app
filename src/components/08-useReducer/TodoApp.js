import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleAddTodo = (newTodo) => {
        dispatch({ type: 'add', payload: newTodo });
    }

    const handleDelete = (id) => {
        const action = { type: 'delete', payload: id }
        dispatch(action);
    }

    const handleToggle = (id) => {
        const action = { type: 'toggle', payload: id }
        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>TodoAPP ({ todos.length })</h1>
            <hr/>

            <div className="row">

                <div className="col-7">
                    <TodoList todos = { todos } handleDelete = { handleDelete } handleToggle = { handleToggle } />
                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo = { handleAddTodo }/>
                </div>
                
            </div>
            
        </div>
    )
}
