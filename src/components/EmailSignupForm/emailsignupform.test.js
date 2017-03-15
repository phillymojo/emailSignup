import React from 'react';
import { shallow } from 'enzyme';
import EmailSignupForm from './emailsignupform';

describe('<EmailSignupForm />', () => {
  let form;

  beforeEach(() => {
    form = shallow(<EmailSignupForm />);
  });

  it("EmailSignupForm renders nested components", () => {
    expect(form.find('EmailInput').length).toEqual(1);
    expect(form.find('DOBInput').length).toEqual(1);
    expect(form.find('GenderInput').length).toEqual(1);
    expect(form.find('SignupButton').length).toEqual(1);
    expect(form.find('PrivacyPolicy').length).toEqual(1);
    expect(form.find('FormValidator').length).toEqual(1);
  });
});