import React from 'react';
import EmailSignupForm from '../EmailSignupForm';

class EmailSignup extends React.Component {

    render() {
        return (
            <div className="email-signup-container">
                <div className="title">Get News and Offers from Nike</div>
                <EmailSignupForm />
            </div>
        )
    }
}

export default EmailSignup;
