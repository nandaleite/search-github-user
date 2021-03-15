import React from 'react'
import renderer from 'react-test-renderer'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Loading from '../components/Loading'

describe('<Loading />', () => {
  
  it('renders without crashing', () => {
    const tree = renderer.create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})