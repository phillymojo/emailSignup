import React from 'react';

class GenderInput extends React.Component
{
    render()
    {
        return (
            <div className="input-container gender-input-container">
	            <label className="register-label exp-global-label">
	                Gender<b className="nsg-form--required">*</b>
	            </label>
	            <div className="field gender exp-input-wrapper">
	                <div className="exp-form--radio">
	                    <input id="email-signup-female-radio" name="gender" type="radio" className="nsg-form--radio email-signup-gender-female" required="required" value="female" />
	                    <div></div>
	                </div>
	                <label className="exp-global-label email-signup-label" htmlFor="email-signup-female-radio">
	                    Female
	                </label>
	                <div className="exp-form--radio">
	                    <input id="email-signup-male-radio" name="gender" type="radio" className="nsg-form--radio email-signup-gender-male" required="required" value="male" defaultChecked />
	                    <div></div>
	                </div>
	                <label className=" exp-global-label email-signup-label" htmlFor="email-signup-male-radio">
	                    Male
	                </label>
	            </div>
		    		</div>
        )
    }
}

export default GenderInput;
