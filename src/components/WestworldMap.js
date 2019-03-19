import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {
  // Remember, there's many ways to do this. This doesn't have to be a function component. It can be a class. It's up to you.

  return (
    <Segment id="map" >
      {props.areas.map(area => {
        return <Area area={area} />
      })}
    </Segment>
  )
}

export default WestworldMap
