import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{ this.props.title }</h1>
        <p>{ this.props.prompt }</p>
      </React.Fragment>
    );
  }
}

export default Header;