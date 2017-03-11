import React, { Component } from 'react';
import './App.css';
import EmailSignupContainer from './components/EmailSignupContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmailSignupContainer />
      </div>
    );
  }
}

export default App;
