import React from 'react'
import { Segment, Header, Label, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Forbidden = () => {
  return (
    <Grid>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Segment raised padded textAlign='center'>
          <Label attached='top' size='large' color='red'>Oops</Label>
          <Header size='large'>Sorry, you're not allowed here</Header>
          <p>Contact the devs to gain access</p>
          <Link to='/welcome'>Back to welcome page</Link>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Forbidden
