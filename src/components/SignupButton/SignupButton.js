import React from 'react';

class SignupButton extends React.Component {
	render () {
		const activeButton = <button type="submit" onClick={this.props.submitForm} className="active">Sign Up</button>;
		const disabledButton = <button className="disabled" disabled>Sign Up</button>;
		return (
			<div className="signupbutton-container">
				{this.props.activateButton ? activeButton : disabledButton }
			</div>
		)
	}
};

export default SignupButton;