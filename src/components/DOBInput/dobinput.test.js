import React from 'react';
import {shallow} from 'enzyme';
import DOBInput from './DOBInput';

describe('<DOBInput />', () => {
  let input;

  beforeEach(() => {
    input = shallow(<DOBInput />);
  });

  it('DOBInput renders html', () => {
    expect(input.find('.dob-input-container').length).toEqual(1);
  });
});