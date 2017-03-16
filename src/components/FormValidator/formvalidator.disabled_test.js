import React from 'react';
import {shallow} from 'enzyme';
import FormValidator from './FormValidator';

describe('<FormValidator />', () => {
    let validator;

    beforeEach(() => {
        validator = shallow(<FormValidator />);
    });

    it('FormValidator should render', () => {
        expect(validator.find('.error-message').length).toEqual(1);
    });
});