import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  name: null,
  email: null,
  password: null,
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    updateUsername: (state, action) => {
      state.name = action.payload.name;
    },
    resetPassword: (state, action) => {
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.isAuth = false;
      state.email = null;
      state.token = null;

      localStorage.setItem('refreshToken', '');
    }
  }
});

export const { login, logout, updateUsername, resetPassword } = authSlice.actions;
export default authSlice.reducer;
