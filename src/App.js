import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      areas: [],
      hosts: [],
      activeHost: {}
    }
  }

  componentDidMount() {
    this.loadAreas()
  }

  loadHosts(areas) {
    fetch(`${App.api}/hosts`)
      .then(res => res.json())
      .then(hosts => {
        this.setState({
          areas, hosts
        })
      })
  }

  loadAreas() {
    fetch(`${App.api}/areas`)
      .then(res => res.json())
      .then(areas => {
        this.loadHosts(areas)
      })
  }

  inactiveHosts() {
    return this.state.hosts.filter(host => {
      return !host.active
    })
  }

  onSelectHost = (host) => {
    this.setState({activeHost: host})
  }

  onToggleHost = (host) => {
    host.active = !host.active
    const hosts = this.state.hosts.map(h => {
      return h.id === host.id ? host : h
    })
    this.setState({hosts, activeHost: host})
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} 
          onSelectHost={this.onSelectHost} />
        <Headquarters hosts={this.inactiveHosts()} activeHost={this.state.activeHost} 
          onSelectHost={this.onSelectHost} onToggleHost={this.onToggleHost} />
      </Segment>
    )
  }
}

App.api = "http://localhost:4000"
export default App;
