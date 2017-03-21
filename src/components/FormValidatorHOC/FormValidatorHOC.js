import React from 'react';

export default function FormValidatorHOC (WrappedFormComponent) {
	return class FormValidatorHOC extends React.Component {

		constructor(props) {
			super(props);

			this.registerRequiredInputs = this.registerRequiredInputs.bind(this);
			this.setInputState = this.setInputState.bind(this);

			this.state = {
				requiredInputs: [],
				formIsValid: false
			};
		}

		/**
		 * Method to allow child inputs to report their validation state
		 * 
		 * @param obj inputObj The React component that made this call
		 * @param bool validState If the React component is in a valid state
		 */
		setInputState(inputObj, validState) {
			let updatedInputs = this.state.requiredInputs.map((input) => {
				if (input.input === inputObj) {
					input.valid = validState;
				}
				return input;
			});
			this.setState({ requiredInputs: updatedInputs });
			this.checkIfFormIsValid();
		}

		/**
		 * This check will determine if the Form is valid by
		 * looping over the requiredInputs and checking for their valid state
		 */
		checkIfFormIsValid() {			
			if(this.state.requiredInputs.every((input) => {return input.valid})) {
				this.setState({formIsValid: true})
			}
		}

		/**
		 * Create an array of components that have been implemented with required set to TRUE
		 * this will be used for checkIfFormIsValid
		 * 
		 * @param object refs Map of the components in the form that have a ref value
		 */
		registerRequiredInputs(refs) {
			const requiredInputs = Object.keys(refs)
				.filter((key) => { return refs[key].props.required === true })
				.map((keyname) => { return refs[keyname] });
			const inputlist = requiredInputs.map((input) => {
				return ({ input: input, valid: false })
			});
			this.setState({
				requiredInputs: inputlist
			});
		}

		render() {
			const newProps = {
				setInputState: this.setInputState,
				registerRequiredInputs: this.registerRequiredInputs,
				checkIfFormIsValid: this.checkIfFormIsValid,
				formIsValid: this.state.formIsValid
			}
			return <WrappedFormComponent {...this.props} {...newProps} />;
		}
	}
}


