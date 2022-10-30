import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layoutWrapper}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
