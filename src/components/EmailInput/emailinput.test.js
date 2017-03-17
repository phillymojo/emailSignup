import React from 'react';
import {mount} from 'enzyme';
import EmailInput from './EmailInput';

describe('<EmailInput />', () => {
    let input;
    let setInputStateMock;

    beforeEach(() => {
        setInputStateMock = jest.fn();
        input = mount(<EmailInput setInputState={setInputStateMock} />);
    });

    it("EmailInput should render its html", () => {
        expect(input.find('.email-input-container').length).toEqual(1);
    });

    it('setInputState should be called when input is valid', () => {
        const emailinput = input.find('input').first();
        emailinput.simulate('change', {target: {value: 'mbonar@gmail.com'}});
        expect(setInputStateMock).toBeCalled();
    });
});