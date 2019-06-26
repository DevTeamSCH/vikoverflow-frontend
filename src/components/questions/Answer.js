import React from 'react';
import {Grid, GridColumn, GridRow, Icon, Segment} from 'semantic-ui-react';
import Votes from './Votes';
import CommentList from './CommentList';

const Answer = ({id, text, owner, is_accepted, user_vote, vote_count, comments, answer_vote_changed, comment_vote_changed}) => (
  <Segment>
    <Grid columns={2}>
      <GridRow>
        <GridColumn width={1} textAlign={'center'}>
          <Votes user_vote={user_vote} vote_count={vote_count} vote_changed={answer_vote_changed} />
          {is_accepted ? <Icon color={'green'} name={'check'} size={'large'}/> : ''}
        </GridColumn>
        <GridColumn width={15}>
          <p>{text}</p>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={2}/>
        <GridColumn width={14}>
          <CommentList comments={comments} comment_vote_changed={comment_vote_changed} />
        </GridColumn>
      </GridRow>
    </Grid>
  </Segment>
);

export default Answer;
