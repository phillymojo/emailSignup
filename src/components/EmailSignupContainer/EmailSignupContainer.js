import React from 'react';
import EmailSignupForm from '../EmailSignupForm';
import FormValidator from '../FormValidatorHOC/FormValidatorHOC';

const WrappedEmailSignupForm = FormValidator(EmailSignupForm);

class EmailSignupContainer extends React.Component {

    render() {
        return (
            <div className="email-signup-container">
                <div className="title">Get News and Offers from Nike</div>
                <WrappedEmailSignupForm />
            </div>
        )
    }
}

export default EmailSignupContainer;
