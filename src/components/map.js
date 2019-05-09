import React from 'react';
import SearchForm from './search.js'

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url = ''};
  }

  render() {
    return (
      <React.Fragment>
        <SearchForm label="Search for a location" type="text" prompt="Explore!" handler={ this.handleForm } />
        <img src={ this.props.src } alt={ this.props.alt } />
        <h2>{ this.props.query }</h2>
      </React.Fragment>
    );
  }
}

export default Map