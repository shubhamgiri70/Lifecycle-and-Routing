import React from "react";

class Result extends React.Component {
  render() {
    const { userAnswers } = this.props;
    const correctAnswersCount = userAnswers.filter(
      (answer) => answer.isCorrect
    ).length;

    return (
      <div className="report-card">
        <h2>Quiz Report Card</h2>
        <table>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Correct Answers</th>
              <th>You Selected</th>
              <th>Right or Wrong</th>
            </tr>
          </thead>
          <tbody>
            {userAnswers.map((answer, index) => (
              <tr key={index}>
                <td>{answer.question}</td>
                <td>{answer.correctAnswer}</td>
                <td>{answer.selectedAnswer}</td>
                <td style={{ color: answer.isCorrect ? "green" : "red" }}>
                  {answer.isCorrect ? "True" : "False"}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Correct</td>
              <td>{correctAnswersCount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Result;
