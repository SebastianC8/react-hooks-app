const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const toDoReducer = (state = initialState, action) => {

    switch (action?.type) {

        case 'add':
            return [...state, action.payload];
        break;

    }

    return state;
}

const newToDo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const actionAdd = {
    type: 'add',
    payload: newToDo
}

const tareas = toDoReducer(initialState, actionAdd);
console.log(tareas);