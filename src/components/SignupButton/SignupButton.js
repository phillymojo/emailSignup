import React from 'react';

class SignupButton extends React.Component {
	render () {
		return (
			<div className="signupbutton-container">
				<button type="submit" className="button-medium nsg-button nsg-grad--nike-orange email-button" onClick={this.props.submitForm}> SIGN UP </button>
			</div>
		)
	}
};

export default SignupButton;