import React, { Component } from "react";
import { connect } from "react-redux";
import Quiz from "../components/Quiz";
import {
  setScore,
  enrollQuiz,
  activeQuestion,
  showScore,
} from "../actions/QuizActions";

class Container extends Component {
  render() {
    return <Quiz {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    question: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetScore: (score) => {
      dispatch(setScore(score));
    },
    EnrollQuiz: () => {
      dispatch(enrollQuiz());
    },
    ActiveQuestion: (num) => {
      dispatch(activeQuestion(num));
    },
    ShowScore: () => {
      dispatch(showScore())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
