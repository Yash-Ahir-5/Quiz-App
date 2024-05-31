import { createReducer } from '@reduxjs/toolkit';
import quizQuestions from '../Pages/QuizQuestions'

const initialState = {
  numberOfQuestions: 5,
  currentQuestionIndex: 0,
  answers: [],
  quizStarted: false,
};

const quizReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('quiz/selectNumberOfQuestions', (state, action) => {
      state.numberOfQuestions = action.payload;
    })
    .addCase('quiz/startQuiz', (state) => {
      state.quizStarted = true;
      state.currentQuestionIndex = 0;
      state.answers = [];
    })
    .addCase('quiz/answerQuestion', (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.answers[questionIndex] = answer;
      if (quizQuestions[questionIndex].type === 'single' || quizQuestions[questionIndex].type === 'text') {
        state.currentQuestionIndex = questionIndex + 1;
      }
    })
    .addCase('quiz/submitQuiz', (state) => {
      state.quizStarted = false;
    });
}); 

export default quizReducer;
