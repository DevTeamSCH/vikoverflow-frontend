import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../actions';
import AddQuestionForm from '../components/forms/AddQuestionForm';

class NewQuestionContainer extends Component {
  render() {
    return (
      <div>
        <AddQuestionForm
          addQuestion={this.props.addQuestion}
        />             
      </div>
    );
  }
}

export default connect(() => {}, { addQuestion })(NewQuestionContainer);
