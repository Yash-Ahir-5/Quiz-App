import { createReducer } from '@reduxjs/toolkit';
import quizQuestions from '../Pages/QuizQuestions';
import { selectNumberOfQuestions, startQuiz, answerQuestion, submitQuiz, changeQuestion } from './actions';

const initialState = {
  numberOfQuestions: 5,
  currentQuestionIndex: 0,
  answers: [],
  quizStarted: false,
};

const quizReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectNumberOfQuestions, (state, action) => {
      state.numberOfQuestions = action.payload;
    })
    .addCase(startQuiz, (state) => {
      state.quizStarted = true;
      state.currentQuestionIndex = 0;
      state.answers = [];
    })
    .addCase(answerQuestion, (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.answers[questionIndex] = answer;
      if (quizQuestions[questionIndex].type === 'single' || quizQuestions[questionIndex].type === 'text') {
        state.currentQuestionIndex = questionIndex + 1;
      }
    })
    .addCase(submitQuiz, (state) => {
      state.quizStarted = false;
    })
    .addCase(changeQuestion, (state, action) => {
      state.currentQuestionIndex = action.payload;
    });
});

export default quizReducer;
