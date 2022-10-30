import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authThunks';
// import { authOperations } from './auth-operations';

export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshingUser = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
