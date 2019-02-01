import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'

const Details = () => {

  // We'll render the logo if no host is selected.
  //But if a host is not selected, is there a particular component you could render instead????? Hmmmm...
  const renderSomething = () => (
    <Image size='medium' src={Images.westworldLogo}/>
  )

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
