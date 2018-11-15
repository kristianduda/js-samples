export const addTodo = text => ({
  type: 'ADD_TODO',
  id: Date.now(),
  completed: false,
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