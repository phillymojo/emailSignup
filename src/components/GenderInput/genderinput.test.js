import React from 'react';
import {shallow} from 'enzyme';
import GenderInput from './GenderInput';

describe('<GenderInput />', () => {
  let input = shallow(<GenderInput />);

  it('GenderInput renders its markup', () => {
    expect(input.find('.gender-input-container').length).toEqual(1);
  });
});