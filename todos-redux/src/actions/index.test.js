import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to toggle todo', () => {
    const id = 1;
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to set filter', () => {
    const filter = 'all';
    const expectedAction = {
      type: 'SET_FILTER',
      filter
    }
    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })
})