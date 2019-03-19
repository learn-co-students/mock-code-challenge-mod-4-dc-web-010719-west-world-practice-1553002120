import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hosts: [],
      areas: []
    }
  }

  componentDidMount() {
    this.loadHosts()
    this.loadAreas()
  }

  loadHosts() {
    fetch(`${App.api}/hosts`)
      .then(res => res.json())
      .then(hosts => {
        this.setState({hosts})
      })
  }

  loadAreas() {
    fetch(`${App.api}/areas`)
      .then(res => res.json())
      .then(areas => {
        this.setState({areas})
      })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} />
        <Headquarters />
      </Segment>
    )
  }
}

App.api = "http://localhost:4000"
export default App;
