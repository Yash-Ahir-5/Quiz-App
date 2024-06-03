import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNumberOfQuestions, startQuiz, submitQuiz, answerQuestion, changeQuestion } from '../Redux/actions';
import quizQuestions from './QuizQuestions';
import MyTimer from './Timer';

const Quiz = () => {
  const dispatch = useDispatch();
  const numberOfQuestions = useSelector(state => state.quiz.numberOfQuestions);
  const quizStarted = useSelector(state => state.quiz.quizStarted);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const answers = useSelector(state => state.quiz.answers);

  const [time, setTime] = useState(null);

  useEffect(() => {
    if (quizStarted) {
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + numberOfQuestions * 60); 
      setTime(newTime);
    }
  }, [quizStarted, numberOfQuestions]);

  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  const handleSelectNumberOfQuestions = (event) => {
    const selectedNumberOfQuestions = parseInt(event.target.value);
    dispatch(selectNumberOfQuestions(selectedNumberOfQuestions));
  };

  const handleAnswerQuestion = (questionIndex, answer) => {
    dispatch(answerQuestion({ questionIndex, answer }));
  };

  const handleSubmitQuiz = () => {
    dispatch(submitQuiz());
  };

  const handleCheckboxChange = (questionIndex, option, isChecked) => {
    const currentAnswers = answers[questionIndex] || [];
    const newAnswers = isChecked
      ? [...currentAnswers, option]
      : currentAnswers.filter(ans => ans !== option);
    handleAnswerQuestion(questionIndex, newAnswers);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      dispatch(changeQuestion(currentQuestionIndex - 1));
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < numberOfQuestions - 1) {
      dispatch(changeQuestion(currentQuestionIndex + 1));
    }
  };

  return (
    <div className="App">
      {!quizStarted && (
        <div>
          <h2>Select Number of Questions:</h2>
          <select value={numberOfQuestions} onChange={handleSelectNumberOfQuestions}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      )}
      {quizStarted && time && (
        <div>
          <MyTimer expiryTimestamp={time} />
          <div>
            <h3>{quizQuestions[currentQuestionIndex].question}</h3>
            {quizQuestions[currentQuestionIndex].type === 'single' && (
              <div>
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswerQuestion(currentQuestionIndex, option)}>
                    {option}
                  </button>
                ))}
              </div>
            )}
            {quizQuestions[currentQuestionIndex].type === 'multiple' && (
              <div>
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`option-${index}`}
                      value={option}
                      checked={(answers[currentQuestionIndex] || []).includes(option)}
                      onChange={(e) =>
                        handleCheckboxChange(currentQuestionIndex, option, e.target.checked)
                      }
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}
            {quizQuestions[currentQuestionIndex].type === 'text' && (
              <div>
                <input
                  type="text"
                  onBlur={(e) => handleAnswerQuestion(currentQuestionIndex, e.target.value)}
                />
              </div>
            )}
          </div>
          <div>
            <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button
              onClick={() =>
                currentQuestionIndex < numberOfQuestions - 1
                  ? dispatch(answerQuestion({ questionIndex: currentQuestionIndex + 1, answer: answers[currentQuestionIndex] }))
                  : handleSubmitQuiz()
              }
            >
              {currentQuestionIndex < numberOfQuestions - 1 ? 'Next' : 'Submit'}
            </button>
            <button onClick={handleSkipQuestion} disabled={currentQuestionIndex >= numberOfQuestions - 1}>
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
