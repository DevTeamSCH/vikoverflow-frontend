import React from "react";
import {Container, Grid, GridColumn, GridRow, Header, Segment} from "semantic-ui-react";
import Votes from "./Votes";

const QuestionListQuestion = ({title}) => (
  <Segment>
    <Grid columns={3} divided verticalAlign={'middle'}>
      <GridColumn width={1} textAlign={'center'}>
        <Votes/>
      </GridColumn>
      <GridColumn width={2} textAlign={'center'}>
        <Segment className={'green-border'} height={12}>
          <Container color={'green'} className={'green-text'}>3</Container>
          <Container as={'small'} className={'green-text'}>answers</Container>
        </Segment>
      </GridColumn>
      <GridColumn width={13}>
        <p>{title}</p>
        <p>Created by USERNAME</p>
      </GridColumn>
    </Grid>
  </Segment>
);

export default QuestionListQuestion;