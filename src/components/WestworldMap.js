import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

class WestworldMap extends React.Component {
  constructor(props) {
    super(props)
  }

  areaHosts(area) {
    return this.props.hosts.filter(host => {
      return host.area === area.name
    })
  }

  render() {
    return (
      <Segment id="map" >
        {this.props.areas.map(area => {
          const hosts = this.areaHosts(area)
          return <Area key={area.id} area={area} hosts={hosts} />
        })}
      </Segment>
    )
  }
}

export default WestworldMap
