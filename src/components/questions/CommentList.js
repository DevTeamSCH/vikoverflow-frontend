import React from 'react';
import {Comment, Grid, GridColumn, Header} from 'semantic-ui-react';
import Votes from './Votes';

const CommentList = ({comments, comment_vote_changed}) => (
  <Comment.Group>
    <Header as={'h3'} dividing>Comments</Header>
    {comments.map(({id, owner, text, user_vote, vote_count}) => (
      <Grid columns={2} key={id}>
        <GridColumn width={1}>
          <Votes user_vote={user_vote} vote_count={vote_count} vote_changed={(new_vote) => comment_vote_changed(id, new_vote)} />
        </GridColumn>
        <GridColumn width={14}>
          <Comment>
            <Comment.Avatar src={'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'} />
            <Comment.Content>
              <Comment.Author as={'a'}>{owner ? owner.full_name : 'Anonymous user'}</Comment.Author>
              <Comment.Metadata><div>Just now</div></Comment.Metadata>
              <Comment.Text>{text}</Comment.Text>
            </Comment.Content>
          </Comment>
        </GridColumn>
      </Grid>
    ))}
    <a href={'#'}>New comment</a>
  </Comment.Group>
);

export default CommentList;