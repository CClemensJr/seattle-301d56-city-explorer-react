import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ searchTerm: '' };
  }

  updateSearchTerm = async e => this.setState({ searchTerm: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();

    this.props.handler(this.state.searchTerm.toLowerCase());
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Search for a location

            <input type="text" value={ this.state.searchTerm } onChange={ this.updateSearchTerm } /> 
          </label>

          <button>Explore!</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;