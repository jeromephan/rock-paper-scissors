import { combineReducers } from '@reduxjs/toolkit';
import choicesReducer from './choices/choices.reducers';
import scoreReducer from './score/score.reducers';

export default combineReducers({
  choices: choicesReducer,
  score: scoreReducer,
});
