import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'

const Details = (props) => {
  return(
    <Segment id="details" className="HQComps">
      {props.host ? 
        <HostInfo host={props.host} /> :
        <Image size='medium' src={Images.westworldLogo} /> 
      }
    </Segment>
  )
}

export default Details
