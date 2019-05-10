import React from 'react';
import superagent from 'superagent';
import Header from './header.js';
import Map from './map.js';
import SearchForm from './search.js';
import Result from './result.js';

//`https://maps.googleapis.com/maps/api/staticmap?center=${location.body.latitude}%2c%20${location.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      location: {},
      mapUrl: ""
    };
  }

  handleForm = async submission => {
    let url = "https://city-explorer-backend.herokuapp.com/";
    let city = await superagent.get(url+"location").query(`data=${ submission }`);

    await this.setState({ location: city.body });
    await this.setState({ mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=${city.body.latitude}%2c%20${city.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}` });

    console.log(this.state.location);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="City Explorer" prompt="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!" />
        <SearchForm handler={ this.handleForm } />
        <Map src={ this.state.mapUrl } title={ this.state.location.formatted_address } />
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
