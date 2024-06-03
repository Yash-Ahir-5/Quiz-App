import { createAction } from '@reduxjs/toolkit';

export const selectNumberOfQuestions = createAction('quiz/selectNumberOfQuestions');
export const startQuiz = createAction('quiz/startQuiz');
export const answerQuestion = createAction('quiz/answerQuestion');
export const submitQuiz = createAction('quiz/submitQuiz');
export const changeQuestion = createAction('quiz/changeQuestion');
