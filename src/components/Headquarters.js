import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'

const Headquarters = (props) => (
  <Grid celled='internally'>
    <Grid.Column width={10}>
      <ColdStorage hosts={props.hosts} 
        onSelectHost={props.onSelectHost} />
    </Grid.Column>
    <Grid.Column width={6}>
      <Details host={props.activeHost} 
        onToggleHost={props.onToggleHost} />
    </Grid.Column>
  </Grid>
)

export default Headquarters;
