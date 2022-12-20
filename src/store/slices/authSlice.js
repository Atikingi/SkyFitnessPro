import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  id: null,
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
      state.id = action.payload.id;
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
      state.id = null;

      localStorage.setItem('refreshToken', '');
      localStorage.setItem('id', '');
    }
  }
});

export const { login, logout, updateUsername, resetPassword } = authSlice.actions;
export default authSlice.reducer;
