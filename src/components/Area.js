import React from 'react';
import '../stylesheets/Area.css'
import {startCase} from 'lodash'

const Area = (props) => {
  const key = props.area.name
  const name = startCase(key)

  return (
    <div className='area' id={key}>
      <h3 className='labels'>{name}</h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    </div>
  )
}

export default Area;
