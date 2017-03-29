import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it('wraps a container in a div with a .navbar class', () => {
    expect(wrapper.find('.navbar').length).toEqual(1)
  })

  describe('links', () => {

    it('renders a Home link', () => {
      const navLink = wrapper.find('Link').first()
      expect(navLink).toBeDefined();
      expect(navLink.childAt(0).text()).toBe('Home');
      expect(navLink.props().to).toBe('/');
    })

    it('renders a Surfboards link', () => {
      const navLink = wrapper.findWhere(node => node.props().to === '/surfboards');
      expect(navLink).toBeDefined();
      expect(navLink.childAt(0).text()).toBe('Surfboards');
      expect(navLink.props().to).toBe('/surfboards');
    })

  // it('renders a About link')
  })
})

  