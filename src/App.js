import React from "react";
import Quiz from "./containers/Quiz";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}
