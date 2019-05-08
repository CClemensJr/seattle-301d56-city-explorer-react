import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section class={ this.props.container}>
          <h3>{ this.props.heading }</h3>
          <ul class={ this.props.results }>
            <li>
              <p>Hike Name: Some trail, Location: Somewhere, Distance: A few miles</p>
              <p>On some date at some time, trail conditions were reported as: somewhat acceptable.</p>
              <p>This trail has a rating of a few stars out of 5</p>
            </li>
          </ul>

        </section>
      </React.Fragment>
    );
  }
}

export default Result;