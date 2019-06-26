import React from 'react';
import {connect} from 'react-redux';
import Question from '../components/questions/Question';
import {getQuestion} from '../actions';

class QuestionContainer extends React.Component  {
  componentDidMount() {
    this.props.getQuestion(this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.question.id ?
          <Question {...this.props.question} question_vote_changed={() => {
          }}/>
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

export default connect(mapStateToProps, {getQuestion})(QuestionContainer);