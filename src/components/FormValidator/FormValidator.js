import React from 'react';

class FormValidator extends React.Component {
	clickHandler(data) {
		// console.log(`got it from ${data}`);
		return (`got it from ${data}`);
	}

	render() {
		return (
			<div style={{color: "red", fontSize: "10px", display: "none"}}>Error message Error message</div>
		)
	}
};

export default FormValidator;