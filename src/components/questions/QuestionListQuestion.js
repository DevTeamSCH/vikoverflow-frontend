import React from "react";
import {Container, Grid, GridColumn, GridRow, Header, Segment} from "semantic-ui-react";
import Votes from "./Votes";

const QuestionListQuestion = ({id, title, answerd, answer_count, owner, user_vote, vote_count}) => (
  <Segment>
    <Grid columns={3} divided verticalAlign={'middle'}>
      <GridColumn width={1} textAlign={'center'}>
        <Votes user_vote={user_vote} vote_count={vote_count}/>
      </GridColumn>
      <GridColumn width={2} textAlign={'center'}>
        <Segment className={'green-border'} height={12}>
          <Container color={'green'} className={'green-text'}>{answer_count}</Container>
          <Container as={'small'} className={'green-text'}>answers</Container>
        </Segment>
      </GridColumn>
      <GridColumn width={13}>
        <p>{title}</p>
        <p>Created by  {owner.full_name}</p>
      </GridColumn>
    </Grid>
  </Segment>
);

export default QuestionListQuestion;