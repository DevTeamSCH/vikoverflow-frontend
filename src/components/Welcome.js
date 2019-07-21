import React from 'react'
import { Segment, Button, Header, Label, Grid } from 'semantic-ui-react';

const Welcome = () => {
  return (
    <Grid>
      <Grid.Column width={5}></Grid.Column>
      <Grid.Column width={6}>
          <Segment raised textAlign='center'>
            <Label attached='top' size='large' color='blue'>Welcome to VikOverflow Pre-release!</Label>
            <Header size='large'>Please log in to continue</Header>
            <Button as='a' primary href='/api/v1/login/authsch'>Log in</Button>
          </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Welcome