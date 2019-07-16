import React from 'react';
import {connect} from 'react-redux';
import Question from '../components/questions/Question';
import {changeAnswerVote, changeCommentVote, changeQuestionVote, getQuestion} from '../actions';

class QuestionContainer extends React.Component  {
  componentDidMount() {
    this.props.getQuestion(this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.question.id ?
          <Question {...this.props.question} question_vote_changed={(id, new_vote) => {
            this.props.changeQuestionVote(id, new_vote).then(() => this.props.getQuestion(this.props.id));
          }}
          answer_vote_changed={(id, new_vote) => {
            this.props.changeAnswerVote(id, new_vote).then(() => this.props.getQuestion(this.props.id));
          }}
          comment_vote_changed={(id, new_vote) => {
            this.props.changeCommentVote(id, new_vote).then(() => this.props.getQuestion(this.props.id));
          }}
          />
          : <span>Loading...</span>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps, {getQuestion, changeQuestionVote, changeAnswerVote, changeCommentVote})(QuestionContainer);