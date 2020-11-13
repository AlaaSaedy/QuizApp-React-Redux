import {
  SET_SCORE,
  ENROLL_QUIZ,
  ACTIVE_QUESTION,
  SHOW_SCORE,
} from "./actionsTypes";

export const setScore = (payload) => {
  return {
    type: SET_SCORE,
    payload: payload,
  };
};

export const enrollQuiz = () => {
  return {
    type: ENROLL_QUIZ,
  };
};

export const activeQuestion = (payload) => {
  return {
    type: ACTIVE_QUESTION,
    payload: payload,
  };
};

export const showScore = () => {
  return {
    type: SHOW_SCORE,
  };
};
