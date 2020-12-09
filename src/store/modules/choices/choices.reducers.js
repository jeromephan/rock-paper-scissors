import { createSlice } from '@reduxjs/toolkit';
import choices from '../../../macros/choices';

const choicesMap = Object.keys(choices.type);

const initialState = {
  player: null,
  computer: null,
};

const generateComputerChoice = () =>
  choicesMap[Math.floor(Math.random() * choicesMap.length)];

export const slice = createSlice({
  name: 'choices',
  initialState,
  reducers: {
    SET_CHOICES: (state, action) => {
      state.player = action.payload.choice;
      state.computer = action.payload.choice ? generateComputerChoice() : null;
    },
  },
});

export const { SET_CHOICES } = slice.actions;
export default slice.reducer;
