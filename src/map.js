import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <img src={ this.props.src } alt={ this.props.alt } />
        <h2>{ this.props.query-placeholder }</h2>
      </React.Fragment>
    );
  }
}

export default Map