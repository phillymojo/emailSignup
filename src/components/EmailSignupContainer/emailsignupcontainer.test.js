import React from 'react';
import { shallow } from 'enzyme';
import EmailSignupContainer from './EmailSignupContainer';

describe('<EmailSignupContainer />', () => {
  let container;

  beforeEach(() => {
    container = shallow(<EmailSignupContainer />);
  });

  it('EmailSignupContainer renders its nested componentst', () => {
    expect(container.find('EmailSignupForm').length).toEqual(1);
  });
});