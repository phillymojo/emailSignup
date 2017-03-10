import React, { Component } from 'react';
import './App.css';
import EmailSignup from './components/EmailSignup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmailSignup />
      </div>
    );
  }
}

export default App;
