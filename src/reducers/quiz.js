import {
  SET_SCORE,
  ENROLL_QUIZ,
  ACTIVE_QUESTION,
  SHOW_SCORE,
} from "../actions/actionsTypes";

let initialState = {
  isEnrolled: false,
  questions: [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false, id: 1 },
        { answerText: "London", isCorrect: false, id: 2 },
        { answerText: "Paris", isCorrect: true, id: 3 },
        { answerText: "Dublin", isCorrect: false, id: 4 },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false, id: 1 },
        { answerText: "Elon Musk", isCorrect: true, id: 2 },
        { answerText: "Bill Gates", isCorrect: false, id: 3 },
        { answerText: "Tony Stark", isCorrect: false, id: 4 },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true, id: 1 },
        { answerText: "Intel", isCorrect: false, id: 2 },
        { answerText: "Amazon", isCorrect: false, id: 3 },
        { answerText: "Microsoft", isCorrect: false, id: 4 },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false, id: 1 },
        { answerText: "4", isCorrect: false, id: 2 },
        { answerText: "6", isCorrect: false, id: 3 },
        { answerText: "7", isCorrect: true, id: 4 },
      ],
    },
    {
      questionText: "Rate me?",
      answerOptions: [
        { answerText: "5", isCorrect: false, id: 1 },
        { answerText: "6", isCorrect: false, id: 2 },
        { answerText: "7", isCorrect: false, id: 3 },
        { answerText: "8", isCorrect: true, id: 4 },
      ],
    },
  ],
  currentQuestion: 0,
  score: 0,
  showScore: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_QUIZ:
      return {
        ...state,
        isEnrolled: true,
      };

    case ACTIVE_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };

    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    case SHOW_SCORE:
      return {
        ...state,
        showScore: true,
      };

    default:
      return state;
  }
};

export default reducer;
