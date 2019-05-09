import React from 'react';
import superagent from 'superagent';
import dotenv from 'dotenv';
import SearchForm from './search.js'


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      city: '',
      alt: this.city,
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${ this.city }&key=${ process.env.GOOGLE_MAPS_API_KEY }`,
    };
  }

  handleForm = submission => {
    this.setState( { city: submission.toLowerCase() });
  }

  render() {
    return (
      <React.Fragment>
        <SearchForm handler={ this.handleForm } />
        {/* <img src={ this.state.url } alt={ this.props.alt } />
        <h2>{ this.props.query }</h2> */}
      </React.Fragment>
    );
  }
}

export default Map