import React from 'react';
import '../stylesheets/Area.css'
import {startCase} from 'lodash'

import HostList from './HostList'

const Area = (props) => {
  const key = props.area.name
  const name = startCase(key)

  return (
    <div className='area' id={key}>
      <h3 className='labels'>{name}</h3>
      <HostList hosts={props.hosts} onSelectHost={props.onSelectHost} />
    </div>
  )
}

export default Area;
