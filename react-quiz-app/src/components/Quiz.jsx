import Questions from "../../questions";
import quizComplete from "../assets/quiz-complete.png";
import { useState, useCallback } from "react";

import Question from "./Question";
import questions from "../../questions";
const timeOut = 10000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isQuizFinished = activeQuestionIndex === Questions.length;
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
      setAnswerState("answered");

      setTimeout(() => {
        if (selectedAnswer === Questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 500);
      }, 500);
    },
    [activeQuestionIndex],
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (isQuizFinished) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Quiz complete image" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        answerState={answerState}
        timeOut={timeOut}
        onSelecct={handleSelectAnswer}
        answers={questions[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSkip={handleSkipAnswer}
        questionText={questions[activeQuestionIndex].text}
      />
    </div>
  );
}
