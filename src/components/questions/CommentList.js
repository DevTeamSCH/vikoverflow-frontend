import React, {useState} from 'react';
import {Button, Comment, Grid, GridColumn, Header} from 'semantic-ui-react';
import Votes from './Votes';
import CommentFormContainer from '../../containers/CommentFormContainer';

const CommentList = ({comments, comment_vote_changed, question, answer, id}) => {
  const [commentFormVisible, setCommentFormVisible] = useState(false);

  return (
    <Comment.Group>
      <Header as={'h3'} dividing>Comments</Header>
      {comments.map(({id, owner, text, user_vote, vote_count}) => (
        <Grid columns={2} key={id}>
          <GridColumn width={1}>
            <Votes user_vote={user_vote} vote_count={vote_count}
              vote_changed={(new_vote) => comment_vote_changed(id, new_vote)}/>
          </GridColumn>
          <GridColumn width={14}>
            <Comment>
              <Comment.Avatar src={'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'}/>
              <Comment.Content>
                <Comment.Author as={'a'}>{owner ? owner.full_name : 'Anonymous user'}</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>{text}</Comment.Text>
              </Comment.Content>
            </Comment>
          </GridColumn>
        </Grid>
      ))}
      {commentFormVisible ?
        <CommentFormContainer question={question} answer={answer} id={id} onFormDone={() => setCommentFormVisible(false)}/> :
        <Button onClick={() => setCommentFormVisible(true)}>New comment</Button>
      }
    </Comment.Group>
  );
};

export default CommentList;