import { combineReducers } from '@reduxjs/toolkit';
import choicesReducer from './choices/choices.reducers';

export default combineReducers({
  choices: choicesReducer,
});
