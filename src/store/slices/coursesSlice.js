import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  currentCourseName: ''
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload;
    },
    getCourseName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { getCourses, getCourseName } = coursesSlice.actions;
export default coursesSlice.reducer;
