import React from "react";
import {Container, Header, Icon} from "semantic-ui-react";

const Votes = () => (
  <Container>
    <Icon name={'angle up'} size={'big'} fitted link/>
    <Container>5</Container>
    <Icon name={'angle down'} size={'big'} fitted link/>
  </Container>
);

export default Votes;