import reducer from './todos'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: 'ADD_TODO',
          text: 'Run the tests',
          id: 1
        }
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
    ])
  })
})