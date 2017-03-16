import React from 'react';
import {shallow} from 'enzyme';
import EmailInput from './EmailInput';

describe('<EmailInput />', () => {
    let input;

    beforeEach(() => {
        input = shallow(<EmailInput />);
    });

    it("EmailInput should render its html", () => {
        expect(input.find('.email-input-container').length).toEqual(1);
    });
});