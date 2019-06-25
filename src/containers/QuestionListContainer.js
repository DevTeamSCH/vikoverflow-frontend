import React, { Component } from 'react'

class QuestionListContainer extends Component {
  
  componentDidMount() {
    this.props.getQuestionList();
  }
  
  render() {
    return (
      <QuestionList questions={this.props.questions} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer)
