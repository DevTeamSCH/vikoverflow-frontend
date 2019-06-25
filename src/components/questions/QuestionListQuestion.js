import React from 'react';
import {Container, Grid, GridColumn, Segment} from 'semantic-ui-react';
import Votes from './Votes';

const QuestionListQuestion = ({id, title, answered, answer_count, owner, user_vote, vote_count, vote_changed}) => {
  let cls = answered ? 'green-text' : '';
  let segmentCls = answered ? 'green-border' : '';
  return (
    <Segment>
      <Grid columns={3} divided verticalAlign={'middle'}>
        <GridColumn width={1} textAlign={'center'}>
          <Votes user_vote={user_vote} vote_count={vote_count} vote_changed={vote_changed}/>
        </GridColumn>
        <GridColumn width={2} textAlign={'center'}>
          <Segment className={segmentCls} height={12}>
            <Container className={cls}>{answer_count}</Container>
            <small className={cls}>answers</small>
          </Segment>
        </GridColumn>
        <GridColumn width={13}>
          <p>{title}</p>
          <p>Created by  {owner.full_name}</p>
        </GridColumn>
      </Grid>
    </Segment>
  );
};

export default QuestionListQuestion;