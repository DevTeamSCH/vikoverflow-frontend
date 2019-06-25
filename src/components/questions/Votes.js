import React from 'react';
import {Container, Icon} from 'semantic-ui-react';

const Votes = ({vote_count, user_vote, vote_changed}) => {
  let upColor = user_vote === 'up' ? 'orange' : null;
  let downColor = user_vote === 'down' ? 'blue' : null;
  let upVote = user_vote === 'up' ? 'none' : 'up';
  let downVote = user_vote === 'down' ? 'none' : 'down';

  return (
    <Container>
      <Icon color={upColor} name={'angle up'} size={'big'} fitted link onClick={() => vote_changed(upVote)} />
      <Container>{vote_count}</Container>
      <Icon color={downColor} name={'angle down'} size={'big'} fitted link onClick={() => vote_changed(downVote)} />
    </Container>
  );
};

export default Votes;