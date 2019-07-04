import NewAnswerForm from '../components/questions/NewAnswerForm';
import React from 'react';
import {addQuestionAnswer} from '../actions';
import {connect} from 'react-redux';

const AnswerFormContainer = ({question_id, addQuestionAnswer}) => (
  <NewAnswerForm postAnswer={(text, anonymous) => addQuestionAnswer(question_id, text, anonymous)} />
);

const mapStateToProps = state => {
  return {
    question_id: state.question.id,
  };
};

export default connect(mapStateToProps, {addQuestionAnswer})(AnswerFormContainer);