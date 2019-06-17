import QuestionListQuestion from "./QuestionListQuestion";
import React from "react";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.getQuestionList();
  }

  render() {
    return (
      <div>
        {this.props.questions.map((question, index) => (
          <QuestionListQuestion key={index} {...question} />
        ))}
      </div>
    )
  }
}

export default QuestionList;