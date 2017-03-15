import React from 'react';
import EmailSignupForm from '../EmailSignupForm';

class EmailSignupContainer extends React.Component {

    render() {
        return (
            <div className="email-signup-container">
                <div className="title">Get News and Offers from Nike</div>
                <EmailSignupForm langlocale="en_us" />
            </div>
        )
    }
}

export default EmailSignupContainer;
