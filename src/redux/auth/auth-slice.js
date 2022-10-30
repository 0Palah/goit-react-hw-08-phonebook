import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authThunks';


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
    [authOperations.register.pending](state) {
      state.isRefreshingUser = true;
    },

    [authOperations.register.fulfilled](state, action) {},

    [authOperations.register.rejected](state) {
      state.isRefreshingUser = false;
    },

    [authOperations.logIn.pending](state, action) {
      state.isRefreshingUser = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.rejected](state, action) {
      state.isRefreshingUser = false;
    },

    [authOperations.logOut.pending](state) {
      state.isRefreshingUser = true;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshingUser = false;
    },

    [authOperations.logOut.rejected](state) {
      state.isRefreshingUser = false;
    },

    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isRefreshingUser = true;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    [authOperations.fetchCurrentUser.rejected](state) {
      state.token = null;
      state.isRefreshingUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
