import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionList from '../components/questions/QuestionList';
import {changeQuestionVote, getQuestionList} from '../actions';

class QuestionListContainer extends Component {
  
  componentDidMount() {
    this.props.getQuestionList();
  }

  render() {
    return (
      <QuestionList questions={this.props.questions} 
        vote_changed={(id, new_vote) => this.props.changeQuestionVote(id, new_vote)
          .then(() => this.props.getQuestionList())} history={this.props.history} />
    );
  }
}


const mapStateToProps = state => {
  return {
    questions: state.questions,
  };
};

export default connect(mapStateToProps, {getQuestionList, changeQuestionVote})(QuestionListContainer);
