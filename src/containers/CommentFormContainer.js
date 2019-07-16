import {connect} from 'react-redux';
import NewCommentForm from '../components/questions/NewCommentForm';
import React from 'react';
import {addAnswerComment, addQuestionComment} from '../actions';


class CommentFormContainer extends React.Component {
  postComment(text, anonymous) {
    if (this.props.question) {
      this.props.addQuestionComment(this.props.id, text, anonymous);
    } else if (this.props.answer) {
      this.props.addAnswerComment(this.props.id, text, anonymous);
    }
  }

  render() {
    return (
      <NewCommentForm postComment={(text, anonymous) => this.postComment(text, anonymous)}
        onFormDone={this.props.onFormDone} />
    );
  }
}

export default connect(() => {return {};}, {addQuestionComment, addAnswerComment})(CommentFormContainer);