const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const selectToken = state => state.auth.token;

// const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  selectToken,
  //   getIsRefreshingUser,
};

export default authSelectors;
