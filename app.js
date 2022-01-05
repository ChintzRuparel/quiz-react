import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Which is the most expensive Stock in the world?",
      answerOptions: [
        { answerText: "MRF", isCorrect: false },
        { answerText: "Berkshire Hathway", isCorrect: true },
        { answerText: "Lindt and Sprungli ", isCorrect: false },

        { answerText: "Next PLC", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Twitter?",
      answerOptions: [
        { answerText: "Jack Dorsey", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "ELon Musk", isCorrect: false },
        { answerText: "Parag Agarwal", isCorrect: true }
      ]
    },
    {
      questionText: "The MAC was created by which company?",
      answerOptions: [
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
        { answerText: "Apple", isCorrect: true }
      ]
    },
    {
      questionText: "Which is the most expensive shoes out of all?",
      answerOptions: [
        { answerText: "Jordan 1 Obsidian Highs", isCorrect: false },
        { answerText: "Nike Air Dior Highs", isCorrect: true },
        { answerText: "Yeezy Foam Runners", isCorrect: false },
        { answerText: "Nike Dunk High Syracuse", isCorrect: false }
      ]
    }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
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
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
