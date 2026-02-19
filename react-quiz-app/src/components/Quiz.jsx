import Questions from "../../questions";
import quizComplete from "../assets/quiz-complete.png";
import { useState, useCallback } from "react";
import QuizTimer from "./QuizTimer";

const timeOut = 10000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const isQuizFinished = activeQuestionIndex === Questions.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isQuizFinished) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Quiz complete image" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...Questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz"> 
      <div id="question"> 
        <QuizTimer
          key={activeQuestionIndex}
          timeOut={timeOut}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}