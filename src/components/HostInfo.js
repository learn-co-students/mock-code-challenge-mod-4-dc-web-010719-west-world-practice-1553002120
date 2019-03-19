import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  toggle = () => {
    console.log("The radio button fired");
  }

  render(){
    const {id, firstName, lastName, active, imageUrl, gender, area} = this.props.host
    // const fullName = `${firstName} ${lastName}`
    const genderIcon = gender === 'Female' ? <Icon name='woman' /> : <Icon name='man' />

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} | {genderIcon}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={"Active" /* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                  checked={true /* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>

            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
