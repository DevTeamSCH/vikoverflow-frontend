import {Container, Grid, GridColumn} from 'semantic-ui-react';
import React from 'react';
import Votes from './Votes';

const Comment = ({id, owner, text, user_vote, vote_count, comment_vote_changed}) => (
  <Container>
    <hr />
    <Grid columns={2}>
      <GridColumn width={1}>
        <Votes user_vote={user_vote} vote_count={vote_count} vote_changed={comment_vote_changed} />
      </GridColumn>
      <GridColumn width={14}>
        <p>{text}</p>
      </GridColumn>
    </Grid>
  </Container>
);

export default Comment;