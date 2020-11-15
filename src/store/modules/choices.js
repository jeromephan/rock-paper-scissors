import { createSlice } from '@reduxjs/toolkit';
import choices from '../../macros/choices';

const choicesMap = Object.keys(choices);

export const slice = createSlice({
  name: 'choices',
  initialState: {
    player: '',
    cpu: '',
  },
  reducers: {
    setPlayerChoice: (state, action) => {
      state.player = action.choice;
    },
    setRandomCpuChoice: (state) => {
      state.cpu = choicesMap[Math.round(Math.random())];
    },
  },
});

export const { setPlayerChoice, setRandomCpuChoice } = slice.actions;

export default slice.reducers;
