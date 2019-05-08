import React from 'react';
import Header from './header.js';
import Map from './map.js';
import Search from './search';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="City Explorer" prompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!" />
        <Map src="https://placeimg.com/640/480/any" alt="A placeholder image" query="Some random city over here!" />
        <Search label="Search for a location" type="text" prompt="Explore!" />
      </React.Fragment>
    );
  }
}

export default App;
