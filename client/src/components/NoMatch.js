import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>
        Page Not Found<br />
        <Link to='/'> Back</Link>
      </Header>
    )
  }
}

export default NoMatch;
