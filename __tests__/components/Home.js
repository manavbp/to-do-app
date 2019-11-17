import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from '../../src/components/Home'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    boards: {},
    addBoard: jest.fn(),
    deleteBoard: jest.fn(),
    renameBoard: jest.fn()
  }

  const enzymeWrapper = shallow(<Home {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      const boardFromProps = enzymeWrapper.find('BoardFrom').props()
      expect(boardFromProps.boards).toStrictEqual({})
      const boardListProps = enzymeWrapper.find('BoardList').props()
      expect(boardListProps.boards).toStrictEqual({})
    })
  })
})