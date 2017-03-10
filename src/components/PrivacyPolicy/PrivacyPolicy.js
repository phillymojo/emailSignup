import React from 'react';

class PrivacyPolicy extends React.Component
{
    render()
    {
        return (
          <div className="footer-container">      	
            <div className="emailPrivacyPolicy">
			        By signing-up, I agree to Nike’s <a href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike&amp;country=US&amp;language=en&amp;requestType=redirect">Terms of Use</a> and <a href="http://help-en-us.nike.com/app/answers/detail/article/privacy-policy">Privacy Policy</a>
			      </div> 
          </div>
        )
    } 
}

export default PrivacyPolicy;
