import React from 'react';

class Map extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     imgSrc: '',
  //     queryPlaceHolder: 'Placeholder',
  //     url: "https://city-explorer-backend.herokuapp.com/location"
  //   };
  // }

  // handleForm = async submission => {
  //   let location = await superagent.get(this.state.url).query(`data=${ submission }`);

  //   await this.setState({ imgSrc: `https://maps.googleapis.com/maps/api/staticmap?center=${location.body.latitude}%2c%20${location.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`});
  //   await this.setState({ queryPlaceHolder: `Here are the results for ${location.body.formatted_query}`});
  // }

  render() {
    return (
      <React.Fragment>
        <img id="map" src={ this.props.src } alt="Map of search query" />
        <h2>{ this.props.city_name }</h2>
      </React.Fragment>
    );
  }
}

export default Map