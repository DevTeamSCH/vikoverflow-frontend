import QuestionListQuestion from "./QuestionListQuestion";
import React from "react";
import {Container} from "semantic-ui-react";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.getQuestionList();
  }

  render() {
    return (
      <Container>
        {this.props.questions.map((question, index) => (
          <QuestionListQuestion key={index} {...question} />
        ))}
      </Container>
    )
  }
}

export default QuestionList;