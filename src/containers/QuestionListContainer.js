import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionList from '../components/questions/QuestionList';
import {getQuestionList} from '../actions';

class QuestionListContainer extends Component {
  
  componentDidMount() {
    this.props.getQuestionList();
  }
  
  render() {
    return (
      <QuestionList questions={this.props.questions} />
    );
  }
}


const mapStateToProps = state => {
  return {
    questions: state.questions,
  };
};

export default connect(mapStateToProps, {getQuestionList})(QuestionListContainer);
