import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fitnessApi } from '../services/fitnessApi';
import { coursesSlice } from './slices/coursesSlice';
import { authSlice } from './slices/authSlice';
import { progressSlice } from './slices/progressSlice';

const rootReducer = combineReducers({
  [fitnessApi.reducerPath]: fitnessApi.reducer,
  courses: coursesSlice.reducer,
  auth: authSlice.reducer,
  progress: progressSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fitnessApi.middleware)
});

export default store;
