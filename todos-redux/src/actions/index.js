let _nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: _nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})