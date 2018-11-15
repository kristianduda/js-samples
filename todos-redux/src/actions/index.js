export const addTodo = text => ({
  type: 'ADD_TODO',
  id: Date.now(),
  text
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})