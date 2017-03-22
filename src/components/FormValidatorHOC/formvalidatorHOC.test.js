import React from 'react';
import { shallow } from 'enzyme';
import FormValidatorHOC from './FormValidatorHOC';

describe('<FormValidatorHOC />', () => {
    let MockEmailForm, MockWrappedComponent, MockWrappedComponentInstance;
    let mockRefs = {}, mockRef1, mockRef2;

    beforeEach(() => {
        MockEmailForm = class extends React.Component {
            render() {
                return (<div className="fake-component">I am a fake component!</div>)
            }
        }

        const WrappedComponent = FormValidatorHOC(MockEmailForm);
        MockWrappedComponent = shallow(<WrappedComponent />);
        MockWrappedComponentInstance = MockWrappedComponent.instance();

        mockRef1 = {
            input1: {
                props: {
                    required: true
                }
            }
        };

        mockRef2 = {
            input2: {
                props: {
                    required: true
                }
            }
        };
        Object.assign(mockRefs, mockRef1, mockRef2);

    });

    it("renders its children", () => {
        expect(MockWrappedComponent.first().is(MockEmailForm)).toBeTruthy();
        expect(MockWrappedComponent.find(MockEmailForm).length).toEqual(1);
    });

    describe('calls the component methods', () => {

        beforeEach(() => {
            MockWrappedComponentInstance.registerRequiredInputs(mockRefs);
        });

        it("registers input components", () => {

            expect(Object.keys(MockWrappedComponentInstance.state.requiredInputs).length).toEqual(2);
        });

        it("checkIfFormIsValid sets the proper state", () => {
            MockWrappedComponentInstance.setInputState(mockRef1.input1, true);
            MockWrappedComponentInstance.setInputState(mockRef2.input2, true);
            MockWrappedComponentInstance.checkIfFormIsValid();

            expect(MockWrappedComponentInstance.state.formIsValid).toBeTruthy();
        });

        it("setInputState updates the requiredInputs properly", () => {
            MockWrappedComponentInstance.setInputState(mockRef1.input1, true);
            expect(MockWrappedComponentInstance.state.requiredInputs.find((input) => input.valid )).toBeTruthy();
        });
    });


});