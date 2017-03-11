import React from 'react';

class FormValidator extends React.Component {
	clickHandler(data) {
		return (`got it from ${data}`);
	}

	render() {
		return (
			<div className="error-message">Error message Error message</div>
		)
	}
};

export default FormValidator;