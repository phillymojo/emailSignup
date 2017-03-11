import React, { Component } from 'react';
import EmailInput from '../EmailInput';
import DOBInput from '../DOBInput';
import GenderInput from '../GenderInput';
import PrivacyPolicy from '../PrivacyPolicy';
import SignupButton from '../SignupButton';

class EmailSignupForm extends Component {

	render() {
		return (
			<form className="email-signup-form" data-endpoint="http://www.nike.com/profile/services/users">
		    <input type="hidden" name="country" value="US" />
		    <EmailInput />
		    <DOBInput />
		    <GenderInput />
		    <SignupButton submitForm={this.props.submitForm} />
		    <PrivacyPolicy />
			</form>
		)
	}
}

class ValidatorTest extends EmailSignupForm {


}

export default ValidatorTest;