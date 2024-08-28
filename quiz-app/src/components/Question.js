import React from "react";

function Question({
  question,
  questionNumber,
  totalQuestions,
  handleAnswerClick,
}) {
  const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="questions">
      <h2>
        Question {questionNumber} of {totalQuestions}
      </h2>
      <p>{decodeHtml(question.question)}</p>
      <div>
        {question.incorrect_answers
          .concat(question.correct_answer)
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <button key={index} onClick={() => handleAnswerClick(answer)}>
              {decodeHtml(answer)}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Question;
