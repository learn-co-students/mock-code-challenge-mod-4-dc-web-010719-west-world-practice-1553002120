import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={10}>
          <ColdStorage hosts={this.props.hosts} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Details />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
