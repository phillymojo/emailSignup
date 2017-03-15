import React from 'react';
import $ from 'jquery';

import EmailInput from '../EmailInput';
import DOBInput from '../DOBInput';
import GenderInput from '../GenderInput';
import PrivacyPolicy from '../PrivacyPolicy';
import SignupButton from '../SignupButton';
import FormValidator from '../FormValidator';

class EmailSignupForm extends React.Component {

	constructor() {
		super();

		this.submitForm = this.submitForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
	}

	getRequiredInputs() {		
		return Object.keys(this.refs)
			.filter((key) => {return this.refs[key].props.required === true})
			.map((keyname) => {return this.refs[keyname]});
	}

	validateForm(){
		var requiredInputs = this.getRequiredInputs();

		console.log(requiredInputs);
	}

	submitForm(e) {
		e.preventDefault();

		this.validateForm();
		
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
		console.log(this._validator.clickHandler("Email Signup Form component"));
	}

	render() {
		return (
			<form className="email-signup-form" data-endpoint="http://www.nike.com/profile/services/users">
				<input type="hidden" name="country" value="US" />
				<EmailInput ref={'emailinput'} required={true} langlocale={this.props.langlocale} />
				<DOBInput ref={'dobinput'} required={true} langlocale={this.props.langlocale} />
				<GenderInput ref={'genderinput'} required={true} langlocale={this.props.langlocale} />
				<SignupButton submitForm={this.submitForm} ref={'signupbutton'} />
				<PrivacyPolicy />
				<FormValidator ref={ (validator) => this._validator = validator }/>
			</form>
		)
	}
}

export default EmailSignupForm;