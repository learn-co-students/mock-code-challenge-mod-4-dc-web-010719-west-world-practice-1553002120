import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => (
  <Card
    className="host"
    onClick={() => props.onSelectHost(props.host)}
    image={props.host.imageUrl}
    raised />
)

export default Host
