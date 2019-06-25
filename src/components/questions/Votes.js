import React from "react";
import {Container, Header, Icon} from "semantic-ui-react";

const Votes = ({vote_count, user_vote}) => (
  <Container>
    <Icon name={'angle up'} size={'big'} fitted link/>
    <Container>{vote_count}</Container>
    <Icon name={'angle down'} size={'big'} fitted link/>
  </Container>
);

export default Votes;