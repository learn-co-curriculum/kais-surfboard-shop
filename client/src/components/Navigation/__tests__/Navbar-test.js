import React, { Component } from 'react';
import { shallow } from 'enzyme';

jest.unmock('../Navbar');
import Navbar from '../Navbar';

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  })

  it('wraps content in a div with .navbar class', () => {
    expect(wrapper.find('.navbar').length).toEqual(1);
  })

  describe('link', () => {
    let NavLinks;

    beforeEach(() => {
      NavLinks = wrapper.find('NavLink');
    })

    it('renders a Home link', () => {
      const navLink = NavLinks.first();
      expect(navLink).toBeDefined();
      expect(navLink.childAt(0).text()).toBe('Home');
      expect(navLink.props().to).toBe('/home');
    })

    it('renders an About link', () => {
      const navLink = wrapper.findWhere(n => n.props().to === '/about')
      expect(navLink).toBeDefined();
      expect(navLink.childAt(0).text()).toBe('About');
    })

    it('renders a Surfboard link', () => {
      const navLink = wrapper.findWhere(n => n.props().to === '/surfboards')
      expect(navLink).toBeDefined();
      expect(navLink.childAt(0).text()).toBe('Surfboards');
    })
  })

  describe('with a currentUser', () => {

    describe('that is not logged in', () => {

    })

    describe('that is logged in', () => {

    })
  })
})