import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  toggle = () => {
    this.props.onToggleHost(this.props.host)
  }

  render(){
    const {firstName, active, imageUrl, gender} = this.props.host
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
                  label={active ? "Active" : "Decomissioned"}
                  checked={active}
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
