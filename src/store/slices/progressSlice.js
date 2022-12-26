import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: {},
  count: {},
  arr: []
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    writeProgress: (state, action) => {
      state.progress[action.payload.name] = action.payload.progress;
      state.count[action.payload.name] = action.payload.count;
      state.arr = [];
    },
    updateProgress: (state, action) => {
      state.progress[action.payload.name] =
        (Number(action.payload.progress) / Number(state.count[action.payload.name])) * 100;
    },
    pushArr: (state, action) => {
      state.arr = [];
      if (action.payload.percent) {
        state.arr = action.payload.percent;
      }
    }
  }
});

export const { writeProgress, updateProgress, pushArr } = progressSlice.actions;
export default progressSlice.reducer;
