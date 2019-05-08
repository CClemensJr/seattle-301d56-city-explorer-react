import React from 'react';
import Header from './header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="City Explorer" prompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!" />
      </React.Fragment>
    );
  }
}

export default App;
