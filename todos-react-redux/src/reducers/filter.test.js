import reducer from './filter'

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('all')
  })

  it('should handle SET_FILTER', () => {
    expect(
      reducer([], {
        type: 'SET_FILTER',
        filter: 'complete'
      })
    ).toEqual('complete')
  })
})