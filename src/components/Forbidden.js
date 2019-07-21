import React from 'react'
import { Segment, Header, Label, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Forbidden = () => {
  return (
    <Grid>
      <Grid.Column width={5}></Grid.Column>
      <Grid.Column width={6}>
        <Segment raised textAlign='center'>
          <Label attached='top' size='large' color='red'>Sorry, you're not allowed here</Label>
          <Header size='large'>Contact the devs to gain access</Header>
          <Link to='/welcome'>Back to welcome page</Link>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Forbidden
