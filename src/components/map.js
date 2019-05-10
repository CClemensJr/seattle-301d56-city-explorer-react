import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img id="map" src={ this.props.src } alt="Map of search query" />
        <h2>{ this.props.title }</h2>
      </React.Fragment>
    );
  }
}

export default Map