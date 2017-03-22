import React from 'react';
import EmailSignupForm from '../EmailSignupForm';
import FormValidatorHOC from '../FormValidatorHOC';

const WrappedEmailSignupForm = FormValidatorHOC(EmailSignupForm);

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
