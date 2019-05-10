import React from 'react';
import superagent from 'superagent';
import Header from './header.js';
import Map from './map.js';
import SearchForm from './search.js';
import Result from './result.js';

// weather, events, movies, yelp, trails
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      location: {},
      weather: [],
      events: [],
      movies: [],
      yelp: [],
      trails: [],
      mapUrl: "",
      serverUrl: "https://city-explorer-backend.herokuapp.com/"
    };
  }

  handleForm = async submission => {
    console.log(this.state.serverUrl);
    let locationData = await superagent.get(this.state.serverUrl+"location").query(`data=${ submission }`);
    let weatherData = superagent.get(this.state.serverUrl + "weather").query(locationData.body);
 
    this.setState({ location: locationData.body });
    this.setState({ mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=${locationData.body.latitude}%2c%20${locationData.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}` });
    this.setState({ weather: weatherData });

    console.log(this.state.location);

    console.log(this.state.weather);

  }

  render() {
    return (
      <React.Fragment>
        <Header title="City Explorer" prompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!" />
        <SearchForm handler={ this.handleForm } />
        <Map src={ this.state.mapUrl } title={ this.state.location.formatted_query } />
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
