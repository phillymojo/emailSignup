import React from 'react';

export default function FormValidatorHOC (WrappedFormComponent) {
	return class FormValidatorHOC extends React.Component {

		constructor(props) {
			super(props);

			this.registerRequiredInputs = this.registerRequiredInputs.bind(this);

			this.state = {
				requiredInputs: [],
				formIsValid: false
			};
		}

		/**
		 * Method to allow children to report their validation state
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
		}

		/**
		 * Create an array of components that have been implemented with required set to TRUE
		 * this will be used for checkIfFormIsValid
		 * 
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

		checkIfFormIsValid() {
			//run this check every time that an input state is changed.
			//if all inputs in the requiredInputs array are valid, then set formIsValid to true
			//TODO: yea, let's add this code...

		}

		componentDidMount() {
			//register the required input components
			// this.registerRequiredInputs();
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


