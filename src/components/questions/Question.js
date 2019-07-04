import React from 'react';
import {Container, Grid, GridColumn, GridRow, Header} from 'semantic-ui-react';
import Votes from './Votes';
import Answer from './Answer';
import CommentList from './CommentList';
import AnswerFormContainer from "../../containers/AnswerFormContainer";

const Question = ({id, title, answers, comments, owner, vote_count, user_vote, text, tags, question_vote_changed, answer_vote_changed, comment_vote_changed}) => (
  <Container>
    <Header as={'h1'}>{title}</Header>
    <hr />
    <Grid columns={2}>
      <GridRow>
        <GridColumn width={1}>
          <Votes vote_count={vote_count} user_vote={user_vote} vote_changed={(new_vote) => question_vote_changed(id, new_vote)} />
        </GridColumn>
        <GridColumn width={15}>
          <p>{text}</p>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={2}/>
        <GridColumn width={14}>
          <CommentList comments={comments} comment_vote_changed={comment_vote_changed} question id={id}/>
        </GridColumn>
      </GridRow>
    </Grid>
    <h3>{answers.length} answers</h3>
    <hr />
    {answers.map((answer) => (
      <Answer {...answer} comment_vote_changed={comment_vote_changed} answer_vote_changed={answer_vote_changed} key={answer.id} />
    ))}
    <hr />
    <h3>New answer</h3>
    <AnswerFormContainer />
  </Container>
);

export default Question;