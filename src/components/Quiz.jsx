import React from "react";

export default function Quiz(props) {
  const { question, SetScore, EnrollQuiz, ActiveQuestion, ShowScore } = props;
  const { questions, score, isEnrolled, currentQuestion, showScore } = question;
  

  if (isEnrolled) {
    return (
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.id}
                  onClick={() => {
                    debugger;
                    answerOption.isCorrect && SetScore(score + 1);
                    const nextQuestion = currentQuestion + 1;
                    if (nextQuestion < questions.length) {
                      ActiveQuestion(nextQuestion);
                      console.log("Current Quest After ", currentQuestion);
                    } else {
                      ShowScore();
                    }
                  }}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  } else {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            EnrollQuiz();
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Name Here"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-50 mx-auto d-block"
          >
            Enroll
          </button>
        </form>
      </>
    );
  }
}
