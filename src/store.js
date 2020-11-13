import { createStore } from "redux";
import QuizReducer from "./reducers/quiz";
const store = createStore(QuizReducer);
export default store;
