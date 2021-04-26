import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul>
            {
                todos.map((row, ix) => <TodoListItem key = { row.id }  todo = { row } index = { ix } handleDelete = { handleDelete } handleToggle = { handleToggle } /> )
            }
        </ul>
    )
}
