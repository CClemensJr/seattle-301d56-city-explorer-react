import React from 'react';
import superagent from 'superagent';
import dotenv from 'dotenv';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={  query: 'Seattle' };
  }


  handleSubmit = async e => {
    e.preventDefault();

    let apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${ this.query }&key=${ process.env.GOOGLE_MAPS_API_KEY}`;
    let data = await superagent.get(apiUrl);
    
    this.props.handler(apiUrl);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={ this.handleSubmit }>
          <label>
            { this.props.label }

            <input type={ this.props.type } onChange={ this.handleChange }/> 
          </label>

          <button>{ this.props.prompt }</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;