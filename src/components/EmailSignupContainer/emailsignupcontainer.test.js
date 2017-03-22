import React from 'react';
import { mount } from 'enzyme';
import EmailSignupContainer from './EmailSignupContainer';

describe('<EmailSignupContainer />', () => {
  let container;

  beforeEach(() => {
    container = mount(<EmailSignupContainer />);
  });

  it('EmailSignupContainer renders its nested componentst', () => {
    expect(container.find('EmailSignupForm').length).toEqual(1);
  });
});