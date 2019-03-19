import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const {id, firstName, lastName, active, imageUrl, gender, area} = props.host

  return (
    <Card
      className="host"
      onClick={() => props.onSelectHost(props.host)}
      image={imageUrl}
      raised
    />
  )
}

export default Host
