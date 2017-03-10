import React from 'react';

class EmailInput extends React.Component {
	render() {
		return (
			<div className="input-container email-input-container">
	      <label className="email-input-label" htmlFor="email-input--email">
	          Email <b className="required">*</b>
	      </label>
	      <div className="email-input">
	          <input id="email-input--email" name="email" required="required" className="nsg-form--input text-input" data-validator="email" data-error="Please enter a valid email address." defaultValue="mbonar@gmail.com" data-has-validation="true" />
	      </div>
      </div> 
		)
	}
}

export default EmailInput;