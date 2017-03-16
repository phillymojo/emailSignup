import React from 'react';
import {shallow} from 'enzyme';
import SignupButton from './SignupButton';

describe('<SignupButton />', () => {
    let button;

    beforeEach(() => {
        button = shallow(<SignupButton />);
    });

    it('SignupButton renders its html', () => {
        expect(button.find('.signupbutton-container').length).toEqual(1);
    });
})