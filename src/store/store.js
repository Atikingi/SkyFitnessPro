import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fitnessApi } from '../services/fitnessApi';
import { getCourses } from './slices/coursesSlice';

const rootReducer = combineReducers({
  [fitnessApi.reducerPath]: fitnessApi.reducer,
  courses: getCourses
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fitnessApi.middleware)
});

export default store;
