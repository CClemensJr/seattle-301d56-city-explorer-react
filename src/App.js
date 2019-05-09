import React from 'react';
import Header from './header.js';
import Map from './map.js';
import SearchForm from './search.js';
import Result from './result.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="City Explorer" prompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!" />
        <Map src="https://placeimg.com/640/480/any" alt="A placeholder image" query="Some random city over here!" />
        <SearchForm label="Search for a location" type="text" prompt="Explore!" />

        <div class="column-container">
          <Result container="weather-container" heading="Results from the Dark Sky API" results="weather-results" />
          <Result container="yelp-container" heading="Results from the Yelp API" results="yelp-results" />
          <Result container="events-container" heading="Results from the Eventbrite API" results="events-results" />
          <Result container="movies-container" heading="Results from the Internet Movie Database API" results="movies-results" />
          <Result container="trails-container" heading="Results from the Hiking Project API" results="trails-results" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
