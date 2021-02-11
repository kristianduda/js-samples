const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS_REQUEST':
    case 'GET_TODOS_FAILURE':
      return [];
    
    case 'GET_TODOS_SUCCESS':
      return action.data;

    case 'ADD_TODO_SUCCESS':
      return [...state, action.data];

    case 'TOGGLE_TODO_SUCCESS':
      return state.map(todo =>
        (todo._id === action.data._id) ? action.data : todo
      )
    
    case 'CLEAR_SUCCESS':
      return state.filter(todo => todo.completed === false);

    default:
      return state
  }
}

export default todos;