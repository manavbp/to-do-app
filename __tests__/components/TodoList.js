import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ToDoList } from '../../src/components/ToDoList'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    match: {
        params: {
            boardId: Math.random().toString( '36' )
        }
    }, 
    boards: {}, 
    addListItem: jest.fn(), 
    deleteListItem: jest.fn(), 
    toggleItemCompleted: jest.fn(), 
    renameListItem: jest.fn()
  }

  const enzymeWrapper = shallow(<ToDoList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      const toDoFormProps = enzymeWrapper.find('ToDoForm').props()
      expect(toDoFormProps.boards).toStrictEqual({})
      const inCompleteList = enzymeWrapper.find('InCompleteList').props()
      expect(inCompleteList.boards).toStrictEqual({})
    })
  })
})