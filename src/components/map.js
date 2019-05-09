import React from 'react';
import superagent from 'superagent';
import dotenv from 'dotenv';
import SearchForm from './search.js'


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      url: "https://city-explorer-backend.herokuapp.com/location"
    };
  }

  handleForm = submission => {
    this.setState( { city: submission });
  }

  render() {
    return (
      <React.Fragment>
        <SearchForm handler={ this.handleForm } />
        <img id="map" class="hide" src="" alt="Map of search query" />
        <h2 class="query-placeholder"></h2>
      </React.Fragment>
    );
  }
}

export default Map