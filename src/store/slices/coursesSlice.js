import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: []
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload;
    }
  }
});

export const { getCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
