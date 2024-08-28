import React from "react";
import Question from "./Question";
import Result from "./Result";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: [],
      selectedCategory: "",
      selectDifficulty: "medium",
      questions: [],
      currentQuestionIndex: 0,
      userAnswers: [],
      quizFinished: false,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => {
        let category = data.trivia_categories;
        this.setState({ categoryID: category });
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  handleDifficultyChange = (event) => {
    this.setState({ selectDifficulty: event.target.value });
  };

  startQuiz = () => {
    const { selectedCategory, selectDifficulty } = this.state;
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=${selectDifficulty}`
    )
      .then((res) => res.json())
      .then((questions) =>
        this.setState({ questions: questions.results, currentQuestionIndex: 0 })
      )
      .catch((error) => console.error("Error fetching questions:", error));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.quizFinished !== this.state.quizFinished &&
      this.state.quizFinished
    ) {
      localStorage.setItem(
        "quizResults",
        JSON.stringify(this.state.userAnswers)
      );
    }
  }

  handleAnswerClick = (selectedAnswer) => {
    console.log("Answer clicked:", selectedAnswer);
    const { currentQuestionIndex, questions, userAnswers } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    console.log({
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.correct_answer,
      isCorrect,
    });

    this.setState(
      {
        userAnswers: [
          ...userAnswers,
          {
            question: currentQuestion.question,
            selectedAnswer,
            correctAnswer: currentQuestion.correct_answer,
            isCorrect,
          },
        ],
        currentQuestionIndex: currentQuestionIndex + 1,
      },
      () => {
        if (this.state.currentQuestionIndex === this.state.questions.length) {
          this.setState({ quizFinished: true });
        }
      }
    );
  };

  render() {
    const {
      categoryID,
      selectedCategory,
      selectDifficulty,
      questions,
      currentQuestionIndex,
      quizFinished,
      userAnswers,
    } = this.state;

    if (quizFinished) {
      return <Result userAnswers={userAnswers} />;
    }

    if (questions.length === 0 || currentQuestionIndex >= questions.length) {
      return null;
    }

    return (
      <>
        <header>
          <h1>QUIZ</h1>
        </header>
        {questions.length === 0 ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Select Category:</label>
            <select
              onChange={this.handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">Select a category</option>
              {categoryID.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <label>Select Difficulty:</label>
            <select
              onChange={this.handleDifficultyChange}
              value={selectDifficulty}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <button className="btn" type="button" onClick={this.startQuiz}>
              Start Quiz
            </button>
          </form>
        ) : (
          <Question
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            handleAnswerClick={this.handleAnswerClick}
          />
        )}
      </>
    );
  }
}

export default Quiz;
