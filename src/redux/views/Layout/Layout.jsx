import AppBar from 'components/AppBar/AppBar';
// import UserMenu from 'components/UserMenu/UserMenu';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import authSelectors from 'redux/auth/auth-selectors';
// import css from './Layout.module.css';

const Layout = () => {
  // const isIsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
