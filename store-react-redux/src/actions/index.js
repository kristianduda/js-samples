import * as storeUtils from '../utils/storeUtils';


export const addTodo = text => async dispatch => {
  try {
    dispatch(addTodoRequest());
    const data = await storeUtils.addTodo(text);
    dispatch(addTodoSuccess(data));
  }
  catch(error) {
    dispatch(addTodoFailure());
  }
}

const addTodoRequest = () => ({
  type: 'ADD_TODO_REQUEST'
})

const addTodoFailure = () => ({
  type: 'ADD_TODO_FAILURE'
})

const addTodoSuccess = (data) => ({
  type: 'ADD_TODO_SUCCESS',
  data
})

export const toggleTodo = item => async dispatch => {
  try {
    dispatch(toggleTodoRequest());
    const data = await storeUtils.toggleTodo(item);
    dispatch(toggleTodoSuccess(data));
  }
  catch(error) {
    dispatch(toggleTodoFailure());
  }
}

const toggleTodoFailure = error => ({
  type: 'TOGGLE_TODO_FAILURE',
  error
})

const toggleTodoRequest = () => ({
  type: 'TOGGLE_TODO_REQUEST'
})

const toggleTodoSuccess = (data) => ({
  type: 'TOGGLE_TODO_SUCCESS',
  data
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const getTodos = () => async dispatch => {
  try {
    dispatch(getTodosRequest())
    const data = await storeUtils.getTodos();
    dispatch(getTodosSuccess(data));
  }
  catch(error) {
    dispatch(getTodosFailure())
  }
}

const getTodosFailure = error => ({
  type: 'GET_TODOS_FAILURE',
  error
})

const getTodosRequest = () => ({
  type: 'GET_TODOS_REQUEST'
})

const getTodosSuccess = (data) => ({
  type: 'GET_TODOS_SUCCESS',
  data
})

export const clear = () => async dispatch => {
  try {
    dispatch(clearRequest());
    const data = await storeUtils.clear();
    dispatch(clearSuccess(data));
  }
  catch(error) {
    dispatch(clearFailure());
  }
}

const clearFailure = error => ({
  type: 'CLEAR_FAILURE',
  error
})

const clearRequest = () => ({
  type: 'CLEAR_REQUEST'
})

const clearSuccess = (data) => ({
  type: 'CLEAR_SUCCESS',
  data
})