import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import {isEmpty} from 'lodash'

import * as Images from '../services/Images'
import HostInfo from './HostInfo'

const Details = (props) => (
  <Segment id="details" className="HQComps">
    {isEmpty(props.host) ? 
      <Image size='medium' src={Images.westworldLogo} /> :
      <HostInfo host={props.host} onToggleHost={props.onToggleHost} />
    }
  </Segment>
)

export default Details
