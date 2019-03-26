import React, { Component } from 'react';
import CardContainer from './CardContainer';
import 'bulma/css/bulma.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <CardContainer/>
      </div>
    );
  }
}

export default App;
