export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter((row) => row.id !== action.payload);

        case 'toggle':
            return state.map((row) => (row.id === action.payload) ? { ...row, done: !row.done } : row );
    
        default:
            return state;
    }

}