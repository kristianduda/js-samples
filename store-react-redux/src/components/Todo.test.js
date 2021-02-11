import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Todo from './Todo'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    text: 'Finish docs',
    onClick: jest.fn().mockImplementation(e => console.log('clicked')),
    completed: false
  }

  const enzymeWrapper = shallow(<Todo {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Todo', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup();
      
      expect(enzymeWrapper.find('li').text()).toBe(props.text);
    })

    it('should call onClick', () => {
      const { enzymeWrapper, props } = setup();
      
      const item = enzymeWrapper.find('li');
      item.props().onClick();
      expect(props.onClick.mock.calls.length).toBe(1);
    })
  })
})