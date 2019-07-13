import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../actions';
import AddQuestionForm from '../components/forms/AddQuestionForm';

class AddQuestionContainer extends Component {
  render() {
    return (
      <div>
        <AddQuestionForm  tags={this.props.tags} addQuestion={(question) => this.props.addQuestion(question)} />             
      </div>
    );
  }
}

export default connect(({tags}) => ({tags}), { addQuestion })(AddQuestionContainer);
