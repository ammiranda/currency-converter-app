import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrencyConverterContainer from '../components/CurrencyConverterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyConverterContainer />
      </div>
    );
  }
}

export default App;
