import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => (
  <Card.Group itemsPerRow={6}>
    {props.hosts.map(host => {
      return <Host key={host.id} host={host} 
        onSelectHost={props.onSelectHost} />
    })}
  </Card.Group>
)

export default HostList
