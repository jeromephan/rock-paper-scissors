import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

export const slice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    INCREASE_SCORE: (state) => {
      ++state.score;
    },
    DECREASE_SCORE: (state) => {
      --state.score;
    },
  },
});

export const { INCREASE_SCORE, DECREASE_SCORE } = slice.actions;
export default slice.reducer;
