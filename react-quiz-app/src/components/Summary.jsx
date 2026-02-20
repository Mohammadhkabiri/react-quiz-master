import quizComplete from "../assets/quiz-complete.png";
import questions from "../../questions";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => {
    return answer === questions[index].answers[0];
  });
  const skippedAnswersPercent =
    Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersPercent =
    Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswersPercent =
    100 - (skippedAnswersPercent + correctAnswersPercent);
  return (
    <div id="summary">
      <img src={quizComplete} alt="Quiz complete image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersPercent}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPercent}%</span>
          <span className="text">wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
