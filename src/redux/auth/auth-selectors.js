const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const selectToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  selectToken,
};

export default authSelectors;
