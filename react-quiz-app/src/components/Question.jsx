import QuizTimer from "./QuizTimer";
import Answers from "./Answers";

export default function Question({
  timeOut,
  onSkip,
  answers,
  selectedAnswer,
  onSelecct,
  answerState,
  questionText,
}) {
  return (
    <div id="question">
      <QuizTimer timeOut={timeOut} onTimeOut={onSkip} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        onSelect={onSelecct}
        answerState={answerState}
      />
    </div>
  );
}
