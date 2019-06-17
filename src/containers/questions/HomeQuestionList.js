import {getQuestionList} from "../../actions";
import {connect} from "react-redux";
import QuestionList from "../../components/questions/QuestionList";

const mapStateToProps = state => {
  return {
    questions: state.questions
  }
};

const HomeQuestionsList = connect(mapStateToProps, {getQuestionList})(QuestionList);

export default HomeQuestionsList;
