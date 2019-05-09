import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <label>
            { this.props.label }

            <input type={ this.props.type } /> 
          </label>

          <button>{ this.props.prompt }</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;