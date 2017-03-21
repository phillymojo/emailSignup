import React from 'react';
import $ from 'jquery';

import EmailInput from '../EmailInput';
import DOBInput from '../DOBInput';
import GenderInput from '../GenderInput';
import PrivacyPolicy from '../PrivacyPolicy';
import SignupButton from '../SignupButton';

class EmailSignupForm extends React.Component {

	constructor(props) {
		super(props);

		this.submitForm = this.submitForm.bind(this);
		this.getFormData = this.getFormData.bind(this);
	}

	submitForm(e) {
		e.preventDefault();

		if (!this.props.formIsValid) return false;

		let formData = this.getFormData();

		$.extend(formData, {
			locale: "en_US",
			registrationSiteId: "1420e",
			emailOnly: true,
			// optIns not used for account creation, only update
			optIns: [{
				'id': '1420',
				'email': true
			}],
			ofRequiredAge: false,
			account: {
				'email': formData.email
			},
			dateOfBirth: formData.dobYear + '-' + formData.dobMonth + '-' + formData.dobDay
		});

		//set the default to the currently selected country
		// self.$container.find('.js-countryDropdown select').data('default', formData["country"]);

		delete formData.dobYear;
		delete formData.dobMonth;
		delete formData.dobDay;
		delete formData.email;

		console.log(formData);

		const url = $('.exp-profile-email-signup-form').data('endpoint');
		$.ajax({
			type: 'POST',
			url: url,
			contentType: 'application/json',
			data: JSON.stringify(formData),
			headers: {
				'Authorization': 'CPC 1020',
				'Content-Locale': "en_US"
			}
		})
			.done($.proxy(self.signupSuccess, self))
			.fail($.proxy(self.signupFailure, self));
	}

	getFormData() {
		// Get all form values
		let value, input, data = {};
		const $form = $('.exp-profile-email-signup-form')
		$form.find(':input[name]').each(function () {
			input = $(this);
			if (input.is(':checkbox')) {
				data[input.attr('name')] = input.is(':checked');
			} else if (input.is(':radio')) {
				if (input.is(':checked')) {
					data[input.attr('name')] = input.val();
				}
			} else {
				value = input.val();
				//allow blank postal code for China
				if (input.attr('name') === 'postalCode') {
					if (!input.hasClass('inactivePostalCode')) {
						data[input.attr('name')] = value;
					}
				} else if (input.is('select') && input.attr('name') === 'state') {
					if (input.is(':visible') && value && value.length > 0) {
						data[input.attr('name')] = value;
					}
				} else {
					if (value && value.length > 0) {
						data[input.attr('name')] = value;
					}
				}
			}

		});

		return data;
	}

	componentDidMount() {
		//register the required input components
		this.props.registerRequiredInputs(this.refs);
	}

	render() {
		return (
			<form className="email-signup-form" data-endpoint="http://www.nike.com/profile/services/users">
				<input type="hidden" name="country" value="US" />
				<EmailInput
					ref={'emailinput'}
					required={true}
					setInputState={this.props.setInputState}
					langlocale={this.props.langlocale}
				/>
				<DOBInput
					ref={'dobinput'}
					required={true}
					setInputState={this.setInputState}
					langlocale={this.props.langlocale}
				/>
				<GenderInput
					ref={'genderinput'}
					required={true}
					setInputState={this.setInputState}
					langlocale={this.props.langlocale}
				/>
				<SignupButton
					activateButton={this.props.formIsValid}
					submitForm={this.submitForm}
					ref={'signupbutton'}
				/>
				<PrivacyPolicy />
			</form>
		)
	}
}

export default EmailSignupForm;