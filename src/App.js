import React from 'react';
import Header from './header.js';
import Map from './map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="City Explorer" prompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!" />
        <Map src="https://placeimg.com/640/480/any" alt="A placeholder image" query="Some random city over here!" />
      </React.Fragment>
    );
  }
}

export default App;
